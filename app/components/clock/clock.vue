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
            <!-- <div
                v-for="n in 60"
                :key="'minute-' + n"
                v-if="showMinuteIndicators && n % 5 !== 0"
                class="minute-indicator"
                :style="getMinuteIndicatorStyle(n)"
            ></div> -->
            <div
                v-for="n in 60"
                :key="'minute-' + n"
                v-if="showMinuteIndicators">
                <div class="minute-indicator" :style="getMinuteIndicatorStyle(n)"
                 v-if="n % 5 !== 0"></div>
            </div>
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
                transform: `rotate(${n * 30}deg) translateY(-146px)`,
            };
        },
        getMinuteIndicatorStyle(n: number): Record<string, string> {
            return {
                transform: `rotate(${n * 6}deg) translateY(-146px)`,
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
            const radius = 110;
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
    width: 350px;
    height: 350px;
    border: 16px solid #9e5cbd;
    border-radius: 50%;
    position: relative;
    background-color: #fcf0cf;
}

.clock::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent;
    border: 8px solid #674090;
}

.clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
}

.clock-hidden {
    border: none;
    background-color: transparent;
}

.clock-hidden::after {
    border: none;
}

.hour-indicator,
.minute-indicator {
    position: absolute;
    width: 4px;
    height: 12px;
    background-color: #4a376d;
    top: 50%;
    left: calc(50% - 2px);
    transform-origin: top center;
}

.minute-indicator {
    width: 2px;
    height: 10px;
    left: calc(50% - 1px);
    border-radius: 10px;
    background-color: #806ab5;
}

.hour-hand {
    position: absolute;
    width: 12px;
    height: 65px;
    background-color: #4a376d;
    top: 50%;
    left: calc(50% - 6px);
    transform-origin: top center;
    transform: rotate(0deg);
    border-radius: 6px;
    transition: transform 0.5s ease-in-out;
}

.minute-hand {
    position: absolute;
    width: 12px;
    height: 90px;
    background-color: #4a376d;
    top: 50%;
    left: calc(50% - 6px);
    transform-origin: top center;
    transform: rotate(0deg);
    border-radius: 6px;
    transition: transform 0.5s ease-in-out;
}

.center-dot {
    position: absolute;
    width: 32px;
    height: 32px;
    background-color: #fcf0cf;
    border-radius: 50%;
    border: 10px solid #4a376d;
    top: calc(50% - 16px);
    left: calc(50% - 16px);
}

.hour-number {
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    color: #4a376d;
    font-weight: 600;
    font-style: normal;
}
</style>