<template>
    <div class="flex flex-col grow">
        <form @submit.prevent="setupGame" class="flex flex-col grow justify-between space-y-4">
            <div class="space-y-2">
                <label for="difficulty" class="block text-xl font-bold text-center">Difficulty</label>
                <USelect
                    v-model="difficulty"
                    class="w-full"
                    size="xl"
                    :ui="{

                    }"
                    :items="[{ label: 'Beginner', value: 'beginner' }, { label: 'Intermediate', value: 'intermediate' }, { label: 'Advanced', value: 'advanced' }, { label: 'Expert', value: 'expert' }]">
                </USelect>
            </div>
            <UButton
                class="w-full justify-center"
                type="submit"
                size="xl"
                color="success"
            >Start</UButton>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, watch } from 'vue';

const difficulty = ref('beginner');

const emit = defineEmits<{
    (e: 'setup', payload: string): void;
    (e: 'start', payload: string): void;
}>();

function setupGame() {
    emit('start', difficulty.value);
}

watch([difficulty], () => {
    emit('setup', difficulty.value);
    // resetGame();
    // startGame(rounds.value, difficulty.value);
});
</script>

<style scoped>
</style>