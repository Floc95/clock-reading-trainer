<template>
    <div class="space-y-4">
        <h1 class="text-2xl font-bold text-center">Game setup</h1>
        <form @submit.prevent="setupGame" class="space-y-4">
            <div class="space-y-2">
                <label for="difficulty" class="block text-sm font-medium text-white-700">Difficulty level</label>
                <USelect
                    v-model="difficulty"
                    class="w-full"
                    :items="[{ label: 'Beginner', value: 'beginner' }, { label: 'Intermediate', value: 'intermediate' }, { label: 'Advanced', value: 'advanced' }, { label: 'Expert', value: 'expert' }]">
                </USelect>
            </div>
            <div class="space-y-2">
                <label for="rounds" class="block text-sm font-medium text-white-700">Number of rounds</label>
                <USelect
                    v-model="rounds"
                    class="w-full"
                    :items="[{ label: '10', value: 10 }, { label: '15', value: 15 }, { label: '20', value: 20 }]">
                </USelect>
            </div>
            <div class="space-y-2">
                <label class="block text-sm font-medium text-white-700">Preview</label>
                <div class="justify-center flex items-center">
                    <Clock
                        :hour="12"
                        :minutes="40"
                        :showMinuteIndicators="showMinuteIndicators"
                        :showHourIndicators="showHourIndicators"
                        :showHourNumbers="showHourNumbers"
                        :showClockBorder="showClockBorder"
                    />
                </div>
            </div>
            <UButton
                class="w-full justify-center"
                type="submit"
                trailing-icon="i-lucide-arrow-right"
                color="primary"
            >Start</UButton>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, watch } from 'vue';
import { useGameMode } from '@/composables/useGameMode';
import Clock from '@/components/clock/clock.vue';

const difficulty = ref('beginner');
const rounds = ref(10);

const { showHourNumbers, showMinuteIndicators, showHourIndicators, showClockBorder,
    startGame, resetGame } = useGameMode();

const emit = defineEmits<{
    (e: 'setup', payload: { difficulty: string; rounds: number }): void;
}>();

function setupGame() {
    emit('setup', { difficulty: difficulty.value, rounds: rounds.value });
}

watch([difficulty], () => {
    resetGame();
    startGame(rounds.value, difficulty.value);
});
</script>

<style scoped>
</style>