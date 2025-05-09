<template>
    <div class="flex flex-col grow">
        <div>
            <h1 class="text-2xl font-bold text-center">Game Over</h1>
            <div class="text-lg mb-4">
                <p class="mb-2"><span class="font-semibold">Score:</span> {{ score }}/{{ totalRounds }}</p>
                <p class="mb-2"><span class="font-semibold">Total Time:</span> {{ formatTime(totalTime) }} (avg {{ formatTime(avgTimePerRound) }})</p>
            </div>
            <div class="flex justify-between space-x-4">
                <UButton
                    color="primary"
                    @click="goBack"
                    :block="true"
                    size="xl"
                >
                    Back
                </UButton>
                <UButton
                    color="success"
                    @click="retry"
                    :block="true"
                    size="xl"
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
            if (mins <= 0) {
                return `${secs}s`;
            }
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
h1.text-2xl {
    font-size: 1.8rem;
    line-height: 38px;
}
</style>