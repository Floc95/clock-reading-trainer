<template>
    <div>
        <div class="flex flex-col grow md:rounded-xl md:border p-6 max-w md:max-w-lg lg:max-w-md md:mx-auto bg-game relative overflow-hidden md:h-max">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800" class="absolute inset-0 w-full"
                style="z-index: -1;bottom: 0px;top: auto;height: 950px;width: 100%;">
                <defs>
                    <linearGradient id="gradient8" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: #f6ce5e; stop-opacity: 1" />
                        <stop offset="100%" style="stop-color: #f19e96; stop-opacity: 1" />
                    </linearGradient>
                    <linearGradient id="gradient9" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color: #f3b74e; stop-opacity: 1" />
                        <stop offset="100%" style="stop-color: #f2af4c; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <circle cx="200" cy="830" r="300" fill="url(#gradient8)" />
                <ellipse cx="200" cy="605" rx="100" ry="25" fill="url(#gradient9)" />
            </svg>
            <div class="flex justify-between items-center mb-4">
                <div class="grow flex space-x-2">
                    <div class="bg-info text-white px-3 py-1 rounded-xl text-xs md:text-base flex items-center"
                        v-if="step === 'game'">
                        Round: {{ currentRound }}/{{ totalRounds }}
                    </div>
                </div>
                <div class="grow flex">
                    <div class="rounded-xl text-xs md:text-base flex items-center"
                        v-if="step === 'game'">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="timer-9-second" data-name="Flat Line" class="icon flat-line">
                            <circle id="secondary" cx="12" cy="13.5" r="7.5" style="fill: white; stroke-width: 2;"/>
                            <polyline id="primary" points="10 14 12 14 12 10" style="fill: none; stroke: #57315c; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>
                            <path id="primary-2" data-name="primary" d="M6.7,8.2,5.2,6.7M17.3,8.2l1.5-1.5M12,6V3m3,0H9m3,3a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,12,6Z" style="fill: none; stroke: #57315c; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"/>
                        </svg>
                        {{ time }}
                    </div>
                </div>
                <div class="shrink-0 align-self-center flex space-x-2">
                    <UModal>
                        <UButton
                            size="xl"
                            color="secondary"
                            class="w-full justify-center rounded-2xl text-regular font-bold"
                            style="width: 44px; height: 44px;"
                        >
                        <svg height="200px" width="200px" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <circle style="fill:white;" cx="256.006" cy="462.002" r="49.998"></circle>
                                <g>
                                    <path style="fill:white;" d="M305.996,462.004c0-27.612-22.384-49.996-49.996-49.996V512 C283.612,512,305.996,489.616,305.996,462.004z"></path>
                                    <path style="fill:white;" d="M425.133,169.133C425.133,75.724,349.41,0,256,0S86.867,75.724,86.867,169.133 c0,34.925,10.587,67.376,28.725,94.321c33.928,50.4,52.205,109.859,52.205,170.614v0.037c0,15.408,12.491,27.9,27.9,27.9h120.609 c15.408,0,27.9-12.491,27.9-27.9v-0.037c0-61.042,18.116-119.977,52.205-170.614C414.547,236.509,425.133,204.058,425.133,169.133z "></path>
                                </g>
                                <path style="fill:#57315c;" d="M158.272,358.648c6.276,24.526,9.524,49.858,9.524,75.421v0.037c0,15.408,12.491,27.9,27.9,27.9 h120.609c15.408,0,27.9-12.491,27.9-27.9v-0.037c0-25.667,3.216-50.958,9.462-75.42H158.272V358.648z"></path>
                                <path style="fill:#57315c;" d="M256,462.004h60.304c15.408,0,27.9-12.491,27.9-27.9v-0.037c0-25.667,3.216-50.958,9.462-75.42H256 L256,462.004L256,462.004z"></path>
                            </g>
                        </svg>
                        </UButton>

                        <template #content>
                            <HintsContent></HintsContent>
                        </template>
                    </UModal>

                    <UModal>
                        <UButton
                            size="xl"
                            color="neutral"
                            class="w-full justify-center rounded-2xl text-regular font-bold"
                            style="width: 44px; height: 44px;"
                        >
                            i
                        </UButton>

                        <template #content>
                            <InfoContent></InfoContent>
                        </template>
                    </UModal>
                </div>
            </div>
            <div class="mb-4">
                <h1 class="text-2xl font-bold text-center bg-primary text-white rounded-3xl py-3 main-title">Tic Tac Clock</h1>
            </div>
            <div class="grow flex flex-col justify-end">
                <div class="justify-center flex items-center mb-8 mt-8">
                    <Clock
                        :hour="gameHour"
                        :minutes="gameMinute"
                        :showMinuteIndicators="showMinuteIndicators"
                        :showHourIndicators="showHourIndicators"
                        :showHourNumbers="showHourNumbers"
                        :showClockBorder="showClockBorder"
                    />
                </div>
                <div class="game-container flex">
                    <GameSetup v-if="step === 'setup'" @start="handleStartGame" @setup="setupGame" />
                    <GamePlay v-else-if="step === 'game'"
                        :currentRound="currentRound"
                        :totalRounds="totalRounds"
                        :gameHour="gameHour"
                        :gameMinute="gameMinute"
                        :isPlaying="isPlaying"
                        @validateAnswer="handleValidate"
                        @nextRound="handleNextRound" />
                    <GameScore v-if="step === 'score'"
                        :score="score"
                        :totalRounds="totalRounds"
                        :total-time="elapsedSeconds"
                        @retry="retry"
                        @back="back" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useGameMode } from '@/composables/useGameMode';
import GameSetup from '@/components/game/gameSetup.vue';
import GamePlay from '@/components/game/gamePlay.vue';
import GameScore from '@/components/game/gameScore.vue';
import HintsContent from '@/components/modal/hintsContent.vue';
import InfoContent from '@/components/modal/infoContent.vue';
import { onBeforeUnmount } from 'vue';

const { score, isPlaying, currentRound, totalRounds, elapsedSeconds, gameHour, gameMinute,
    showHourNumbers, showMinuteIndicators, showHourIndicators, showClockBorder,
    difficultyMode, prepareGame, startGame, resetGame, validateAnswer, nextRound } = useGameMode();

onBeforeUnmount(() => {
    resetGame();
});

const step = ref<'setup'|'game'|'score'>('setup');

const setupGame = (difficulty: string) => {
    prepareGame(difficulty);
};

const handleStartGame = (difficulty: string) => {
    step.value = 'game';
    startGame(difficulty);
};

const retry = () => {
    const difficultyValue = difficultyMode.value;
    resetGame();
    step.value = 'game';
    setupGame(difficultyValue);
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

const time = computed(() => {
    const minutes = Math.floor(elapsedSeconds.value / 60);
    const seconds = elapsedSeconds.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});
</script>

<style scoped>
.game-container {
    min-height: 210px;
    max-height: 210px;
}

.main-title {
    position: relative;
}

.main-title:after{
    position: absolute;
    content: '';
    display: block;
    top: 0;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background: #ca554a;
    z-index: -1;
    margin-top: -5px;
    margin-left: -10px;
    border-radius: 50px;
}
</style>