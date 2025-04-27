<template>
    <div class="space-y-8">
        <div class="justify-center flex items-center">
            <Clock
                :hour="gameHour"
                :minutes="gameMinute"
                :show-clock-border="showClockBorder"
                :show-hour-indicators="showHourIndicators"
                :show-minute-indicators="showMinuteIndicators"
                :show-hour-numbers="showHourNumbers" />
        </div>
        <div class="flex justify-between items-center text-sm font-semibold">
            <div class="bg-slate-500 text-white px-4 py-2 rounded-xl text-xs md:text-base">
            Score: {{ score }}
            </div>
            <div class="bg-slate-500 text-white px-4 py-2 rounded-xl text-xs md:text-base">
            Time: {{ time }}
            </div>
            <div class="bg-slate-500 text-white px-4 py-2 rounded-xl text-xs md:text-base">
            Round: {{ currentRound }}/{{ totalRounds }}
            </div>
        </div>
        <div class="text-center text-lg font-semibold rounded-xl">
            {{ isPlaying ? 'What time is it?' : (isAnswerCorrect ? 'Correct!' : `Wrong! It is ${gameHour}:${gameMinute < 10 ? '0' + gameMinute : gameMinute}`) }}
        </div>
        <div class="flex justify-between items-center space-x-4">
            <USelect
                v-model="userAnswerHours"
                :items="Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }))"
                placeholder="Hours"
                class="w-full"
            />
            <USelect
                v-model="userAnswerMinutes"
                :items="Array.from({ length: 60 }, (_, i) => i).filter(i => i % 5 === 0).map(i => ({ value: i, label: i }))"
                placeholder="Minutes"
                class="w-full"
            />
        </div>
        <div class="flex justify-between mt-4">
            <UButton
                @click="cancelRound"
                variant="ghost"
                color="neutral"
            >
                Cancel
            </UButton>
            <UButton
                @click="handleValidate"
                v-if="isPlaying"
                :disabled="userAnswerHours === null || userAnswerMinutes === null"
                trailing-icon="i-lucide-check"
            >
                Validate
            </UButton>
            <UButton
                @click="playNextRound"
                v-if="!isPlaying"
                trailing-icon="i-lucide-arrow-right"
            >
                {{ currentRound >= totalRounds ? 'View score' : 'Next' }}
            </UButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Clock from '@/components/clock/clock.vue';

const props = defineProps({
    currentRound: {
        type: Number,
        required: true
    },
    totalRounds: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    elapsedSeconds: {
        type: Number,
        required: true
    },
    gameHour: {
        type: Number,
        required: true
    },
    gameMinute: {
        type: Number,
        required: true
    },
    isPlaying: {
        type: Boolean,
        required: true
    },
    showHourNumbers: {
        type: Boolean,
        required: true
    },
    showMinuteIndicators: {
        type: Boolean,
        required: true
    },
    showHourIndicators: {
        type: Boolean,
        required: true
    },
    showClockBorder: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits<{
    (e: 'validateAnswer', userAnswerHours: number, userAnswerMinutes: number): void,
    (e: 'cancelRound'): void,
    (e: 'nextRound'): void
}>();

const { currentRound, totalRounds, score, elapsedSeconds, gameHour, gameMinute, isPlaying,
    showHourNumbers, showMinuteIndicators, showHourIndicators, showClockBorder } = toRefs(props);

const userAnswerHours = ref<number|null>(null);
const userAnswerMinutes = ref<number|null>(null);

const handleValidate = () => {
    if (userAnswerHours.value !== null && userAnswerMinutes.value !== null) {
        emit('validateAnswer', userAnswerHours.value, userAnswerMinutes.value);
    }
};

const cancelRound = () => {
    userAnswerHours.value = null;
    userAnswerMinutes.value = null;
    emit('cancelRound');
};

const playNextRound = () => {
    userAnswerHours.value = null;
    userAnswerMinutes.value = null;
    emit('nextRound');
};

const time = computed(() => {
    const minutes = Math.floor(elapsedSeconds.value / 60);
    const seconds = elapsedSeconds.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Computed properties checking if userAnswer is equal to gameHour and gameMinute
const isAnswerCorrect = computed(() => {
    return userAnswerHours.value === gameHour.value && userAnswerMinutes.value === gameMinute.value;
});


</script>

<style scoped>
/* Add any additional styles if needed */
</style>