<template>
    <div class="flex flex-col min-h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 800" preserveAspectRatio="none" class="absolute inset-0 w-full h-full fixed"
            style="z-index: -1;">
            <defs>
                <linearGradient id="gradient1" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #ffdc51; stop-opacity: 1" />
                    <stop offset="60%" style="stop-color: #f0928f; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient2" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #8ab3be; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #b291a0; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient3" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #897cd6; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #ec806d; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient4" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #f2a957; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #ef8a7d; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient5" x1="100%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #ec688b; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #ee7d82; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient6" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: #ec806d; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #897cd6; stop-opacity: 1" />
                </linearGradient>
                <linearGradient id="gradient7" x1="0%" y1="50%" x2="50%" y2="50%">
                    <stop offset="0%" style="stop-color: #ec688b; stop-opacity: 1" />
                    <stop offset="100%" style="stop-color: #ee7d82; stop-opacity: 1" />
                </linearGradient>
                <g id="wave">
                    <path d="M 12 216.5 C -40.5 123.5 150 0 200 50 C 250 100 350 0 410.5 29.5 C 455 46.5 282.5 198.5 191 140 C 95.5 71 75 285 12 217" />
                </g>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient1)" />

            <circle cx="50" cy="400" r="200" fill="url(#gradient6)" opacity=".8" />

            <use xlink:href="#wave" fill="url(#gradient3)" transform="translate(-250, -40)" opacity=".5" />

            <circle cx="0" cy="0" r="100" fill="url(#gradient4)" transform="rotate(90)" />

            <use xlink:href="#wave" fill="url(#gradient4)" transform="translate(100, 500),rotate(-35)" opacity=".8" />
            <use xlink:href="#wave" fill="url(#gradient3)" transform="translate(100, 400),rotate(-30)" />
            <use xlink:href="#wave" fill="url(#gradient5)" transform="translate(100, 300),rotate(-25)" />

            <circle cx="400" cy="850" r="400" fill="url(#gradient7)" />

            <use xlink:href="#wave" fill="url(#gradient3)" transform="translate(150, 600),rotate(-180)" opacity=".8" />
            <use xlink:href="#wave" fill="url(#gradient5)" transform="translate(150, 550),rotate(-180)" />
            <use xlink:href="#wave" fill="url(#gradient4)" transform="translate(150, 500),rotate(-180)" />

            <use xlink:href="#wave" fill="url(#gradient2)" transform="translate(250, 150),rotate(-120)" opacity=".7" />
        </svg>

        <main class="md:mx-auto grow flex">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>