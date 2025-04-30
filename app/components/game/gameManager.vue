<template>
    <div>
        <UCard variant="subtle" class="max-w md:max-w-lg lg:max-w-md md:mx-auto">
            <GameSetup v-if="step === 'setup'" @setup="setupGame" />
            <GamePlay v-else-if="step === 'game'"
                :currentRound="currentRound"
                :totalRounds="totalRounds"
                :score="score"
                :elapsedSeconds="elapsedSeconds"
                :gameHour="gameHour"
                :gameMinute="gameMinute"
                :showHourNumbers="showHourNumbers"
                :showMinuteIndicators="showMinuteIndicators"
                :showHourIndicators="showHourIndicators"
                :showClockBorder="showClockBorder"
                :isPlaying="isPlaying"
                @validateAnswer="handleValidate"
                @cancelRound="back"
                @nextRound="handleNextRound" />
            <GameScore v-else-if="step === 'score'"
                :score="score"
                :totalRounds="totalRounds"
                :total-time="elapsedSeconds"
                @retry="retry"
                @back="back" />
        </UCard>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useGameMode } from '@/composables/useGameMode';
import GameSetup from '@/components/game/gameSetup.vue';
import GamePlay from '@/components/game/gamePlay.vue';
import GameScore from '@/components/game/gameScore.vue';
import { onBeforeUnmount } from 'vue';

const { score, isPlaying, currentRound, totalRounds, elapsedSeconds, gameHour, gameMinute,
    showHourNumbers, showMinuteIndicators, showHourIndicators, showClockBorder,
    difficultyMode, startGame, resetGame, validateAnswer, nextRound } = useGameMode();

onBeforeUnmount(() => {
    resetGame();
});

const step = ref<'setup'|'game'|'score'>('setup');

const setupGame = (gameSetup: { difficulty: string, rounds: number }) => {
    step.value = 'game';
    startGame(gameSetup.rounds, gameSetup.difficulty);
};

const retry = () => {
    const difficultyValue = difficultyMode.value;
    const totalRoundsValue = totalRounds.value;
    resetGame();
    step.value = 'game';
    setupGame({ difficulty: difficultyValue, rounds: totalRoundsValue });
};

const back = () => {
    step.value = 'setup';
    resetGame();
};

const handleNextRound = () => {
    if (currentRound.value >= totalRounds.value) {
        step.value = 'score';
    } else {
        nextRound();
    }
};

const handleValidate = (userAnswerHours: number, userAnswerMinutes: number) => {
    validateAnswer(userAnswerHours, userAnswerMinutes);
};
</script>

<style scoped>

</style>