<template>
    <div class="flex flex-col grow justify-between space-y-4">
        <div class="text-center text-2xl font-semibold rounded-lg"
            :class="{'bg-success/80 animate-success': !isPlaying && isAnswerCorrect, 'bg-error/80 animate-failure': !isPlaying && !isAnswerCorrect}">
            {{ isPlaying ? 'What time is it?' : (isAnswerCorrect ? 'Correct!' : `Wrong! It is ${gameHour}:${gameMinute < 10 ? '0' + gameMinute : gameMinute}`) }}
        </div>
        <div class="flex justify-between items-center space-x-4" v-if="isPlaying">
            <USelect
                v-model="userAnswerHours"
                :items="Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: i + 1 }))"
                placeholder="Hours"
                class="w-full"
                size="xl"
            />
            <USelect
                v-model="userAnswerMinutes"
                :items="Array.from({ length: 60 }, (_, i) => i).filter(i => i % 5 === 0).map(i => ({ value: i, label: i }))"
                placeholder="Minutes"
                class="w-full"
                size="xl"
            />
        </div>
        <div class="flex justify-between mt-4">
            <!-- <UButton
                @click="cancelRound"
                color="error"
                size="xl"
            >
                Cancel
            </UButton> -->
            <UButton
                @click="handleValidate"
                v-if="isPlaying"
                :disabled="userAnswerHours === null || userAnswerMinutes === null"
                size="xl"
                color="success"
                :block="true"
            >
                Validate
            </UButton>
            <UButton
                @click="playNextRound"
                v-if="!isPlaying"
                size="xl"
                color="primary"
                :block="true"
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

// Computed properties checking if userAnswer is equal to gameHour and gameMinute
const isAnswerCorrect = computed(() => {
    return userAnswerHours.value === gameHour.value && userAnswerMinutes.value === gameMinute.value;
});


</script>

<style scoped>
@keyframes animate-success {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-success {
    position: relative;
    animation: animate-success 0.6s ease-out forwards;
}

@keyframes animate-failure {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(10px);
    }
    75% {
        transform: translateX(-10px);
    }
    100% {
        transform: translateX(0);
    }
}

.animate-failure {
    position: relative;
    animation: animate-failure 0.6s ease-out forwards;
}
</style>