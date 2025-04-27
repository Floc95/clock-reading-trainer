<template>
    <div class="flex flex-col">
        <div class="space-y-4">
            <h1 class="text-2xl font-bold text-center">Game Over</h1>
            <div class="text-lg mb-4">
                <p class="mb-2"><span class="font-semibold">Score:</span> {{ score }}/{{ totalRounds }}</p>
                <p class="mb-2"><span class="font-semibold">Total Time:</span> {{ formatTime(totalTime) }}</p>
                <p><span class="font-semibold">Avg Time per Round:</span> {{ formatTime(avgTimePerRound) }}</p>
            </div>
            <div class="flex justify-between mt-6">
                <UButton
                    color="neutral"
                    @click="goBack"
                    icon="i-lucide-arrow-left"
                >
                    Back
                </UButton>
                <UButton
                    @click="retry"
                    trailing-icon="i-lucide-refresh-cw"
                >
                    Retry
                </UButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GameScore',
    props: {
        score: {
            type: Number,
            required: true,
        },
        totalRounds: {
            type: Number,
            required: true,
        },
        totalTime: {
            type: Number,
            required: true,
        },
    },
    methods: {
        formatTime(seconds: number): string {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}m ${secs}s`;
        },
        retry() {
            this.$emit('retry');
        },
        goBack() {
            this.$emit('back');
        },
    },
    computed: {
        avgTimePerRound(): number {
            return this.totalTime / this.totalRounds;
        },
    },
});
</script>

<style scoped>
</style>