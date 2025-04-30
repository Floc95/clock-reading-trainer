<template>
    <div class="clock" :class="{ 'clock-hidden': !showClockBorder }">
        <div class="clock-face">
            <div
                v-for="n in 12"
                :key="'hour-' + n"
                v-if="showHourIndicators"
                class="hour-indicator"
                :style="getHourIndicatorStyle(n)"
            ></div>
            <div
                v-for="n in 60"
                :key="'minute-' + n"
                v-if="showMinuteIndicators"
                class="minute-indicator"
                :style="getMinuteIndicatorStyle(n)"
            ></div>
            <div
                v-for="n in 12"
                :key="'hour-number-' + n"
                v-if="showHourNumbers"
                class="hour-number"
                :style="getHourNumberStyle(n)"
            >
                {{ n }}
            </div>
            <div
                class="hour-hand"
                :style="getHourHandStyle(hour, minutes)"
            ></div>
            <div
                class="minute-hand"
                :style="getMinuteHandStyle(minutes)"
            ></div>
            <div class="center-dot"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Clock",
    props: {
        hour: {
            type: Number,
            required: true,
        },
        minutes: {
            type: Number,
            required: true,
        },
        showMinuteIndicators: {
            type: Boolean,
            default: true,
        },
        showHourIndicators: {
            type: Boolean,
            default: true,
        },
        showHourNumbers: {
            type: Boolean,
            default: true,
        },
        showClockBorder: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        getHourIndicatorStyle(n: number): Record<string, string> {
            return {
                transform: `rotate(${n * 30}deg) translateY(-98px)`,
            };
        },
        getMinuteIndicatorStyle(n: number): Record<string, string> {
            return {
                transform: `rotate(${n * 6}deg) translateY(-98px)`,
            };
        },
        getHourHandStyle(hour: number, minutes: number): Record<string, string> {
            const degrees = (hour % 12) * 30 + minutes * 0.5;
            return {
                transform: `rotate(${degrees + 180}deg)`,
            };
        },
        getMinuteHandStyle(minutes: number): Record<string, string> {
            const degrees = minutes * 6;
            return {
                transform: `rotate(${degrees + 180}deg)`,
            };
        },
        getHourNumberStyle(n: number): Record<string, string> {
            const angle = n * 30;
            const radius = 75;
            const x = Math.sin((angle * Math.PI) / 180) * radius;
            const y = -Math.cos((angle * Math.PI) / 180) * radius;
            return {
                transform: `translate(${x}px, ${y}px)`,
            };
        },
    },
});
</script>

<style scoped>
.clock {
    width: 200px;
    height: 200px;
    border: 4px solid #1f2937;
    border-radius: 50%;
    position: relative;
}

.clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
}

.clock-hidden {
    border: none;
}

.hour-indicator,
.minute-indicator {
    position: absolute;
    width: 4px;
    height: 10px;
    background-color: #1f2937;
    top: 50%;
    left: calc(50% - 2px);
    transform-origin: top center;
    border-radius: 0 0 10px 10px;
}

.minute-indicator {
    width: 2px;
    height: 5px;
    left: calc(50% - 1px);
}

.hour-hand {
    position: absolute;
    width: 6px;
    height: 50px;
    background-color: #1f2937;
    top: 50%;
    left: calc(50% - 3px);
    transform-origin: top center;
    transform: rotate(0deg);
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
}

.minute-hand {
    position: absolute;
    width: 4px;
    height: 70px;
    background-color: #1f2937;
    top: 50%;
    left: calc(50% - 2px);
    transform-origin: top center;
    transform: rotate(0deg);
    border-radius: 10px;
    transition: transform 0.5s ease-in-out;
}

.center-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #1f2937;
    border-radius: 50%;
    top: calc(50% - 4px);
    left: calc(50% - 4px);
}

.hour-number {
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #1f2937;
}

.dark .clock  {
    border-color: white;
}

.dark .hour-indicator,
.dark .minute-indicator,
.dark .hour-hand,
.dark .minute-hand,
.dark .center-dot {
    background-color: white;
}

.dark .hour-number {
    color: white;
}
</style>