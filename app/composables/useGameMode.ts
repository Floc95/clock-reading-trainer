import { ref } from 'vue';

export function useGameMode() {
    const score = ref(0);
    const isPlaying = ref(false);
    const totalRounds = ref(10);
    const currentRound = ref(0);
    const elapsedSeconds = ref(0);
    const gameHour = ref(0);
    const gameMinute = ref(0);
    const difficultyMode = ref('beginner'); // "beginner", "intermediate", "advanced", "expert"
    const roundTimer = ref<NodeJS.Timeout|null>(null);

    // Clock settings
    const showMinuteIndicators = ref(true);
    const showHourIndicators = ref(true);
    const showHourNumbers = ref(true);
    const showClockBorder = ref(true);

    const startGame = (difficultyModeValue: string) => {
        totalRounds.value = 10;
        difficultyMode.value = difficultyModeValue;
        score.value = 0;
        currentRound.value = 0;
        elapsedSeconds.value = 0;
        gameHour.value = 0;
        gameMinute.value = 0;
        isPlaying.value = false;
        initClockSettings(); // Initialize clock settings based on difficulty mode
        nextRound();
    };

    const prepareGame = (difficultyModeValue: string) => {
        difficultyMode.value = difficultyModeValue;
        initClockSettings(); // Initialize clock settings based on difficulty mode
    };

    const resetGame = () => {
        isPlaying.value = false;
        score.value = 0;
        currentRound.value = 0;
        elapsedSeconds.value = 0;
        gameHour.value = 0;
        gameMinute.value = 0;
        if (roundTimer.value) {
            clearInterval(roundTimer.value); // Clear the timer when resetting the game
            roundTimer.value = null;
        }
    };

    const nextRound = () => {
        if (currentRound.value < totalRounds.value) {
            isPlaying.value = true;
            currentRound.value++;
            generateRandomTime();
            roundTimer.value = setInterval(() => {
                elapsedSeconds.value++;
            }, 1000); // Increment elapsed time every second
        }
    };

    const validateAnswer = (hour: number, minute: number) => {
        isPlaying.value = false; // Stop the game when validating the answer
        if (roundTimer.value) {
            clearInterval(roundTimer.value); // Clear the timer when validating the answer
            roundTimer.value = null;
        }
        if (hour === gameHour.value && minute === gameMinute.value) {
            score.value++;
            return true;
        }
        return false;
    };

    const generateRandomTime = () => {
        gameHour.value = Math.floor(Math.random() * 12) + 1; // Random hour between 1-12
        gameMinute.value = Math.floor(Math.random() * 12) * 5; // Random minute between 0-55 in steps of 5
    };

    const initClockSettings = () => {
        if (difficultyMode.value === 'beginner') {
            showMinuteIndicators.value = true;
            showHourIndicators.value = true;
            showHourNumbers.value = true;
            showClockBorder.value = true;
        }
        else if (difficultyMode.value === 'intermediate') {
            showMinuteIndicators.value = false;
            showHourIndicators.value = true;
            showHourNumbers.value = false;
            showClockBorder.value = true;
        }
        else if (difficultyMode.value === 'advanced') {
            showMinuteIndicators.value = false;
            showHourIndicators.value = false;
            showHourNumbers.value = false;
            showClockBorder.value = true;
        }
        else if (difficultyMode.value === 'expert') {
            showMinuteIndicators.value = false;
            showHourIndicators.value = false;
            showHourNumbers.value = false;
            showClockBorder.value = false;
        }
    };

    return {
        score,
        totalRounds,
        currentRound,
        elapsedSeconds,
        gameHour,
        gameMinute,
        difficultyMode,
        roundTimer,
        isPlaying,
        showMinuteIndicators,
        showHourIndicators,
        showHourNumbers,
        showClockBorder,
        prepareGame,
        startGame,
        resetGame,
        nextRound,
        validateAnswer,
    };
}