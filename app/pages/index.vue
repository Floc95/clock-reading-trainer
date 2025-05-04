<template>
    <div class="flex grow">
        <GameManager class="flex flex-col grow md:mt-10"></GameManager>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameManager from '~/components/game/gameManager.vue';

export default defineComponent({
    name: "HomePage",
    setup() {
        // Reactive properties for Clock settings
        const showMinuteIndicators = ref(true);
        const showHourIndicators = ref(true);
        const showHourNumbers = ref(true);
        const showClockBorder = ref(true);

        return {
            showMinuteIndicators,
            showHourIndicators,
            showHourNumbers,
            showClockBorder,
        };
    },
    methods: {
        nextRound() {
            // Logic for the next round can be implemented here
            console.log("Next round clicked!");
        },
    },
});
</script>

<style scoped>
.settings-panel {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background-color: #f9fafb34;
    max-width: 300px;
}

.settings-item {
    margin-bottom: 10px;
}

.clock-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
}
</style>