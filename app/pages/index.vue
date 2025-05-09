<template>
    <div class="flex grow">
        <GameManager class="flex flex-col grow md:mt-10 md:max-h-230 md:block"></GameManager>
    </div>
</template>

<script lang="ts" setup>
import GameManager from '~/components/game/gameManager.vue';

useHead({
    title: 'Tic Tac Clock - A Fun Game to Learn Time',
    meta: [
        { name: 'description', content: 'Test your clock reading skills with Tic Tac Clock!' },
        { name: 'keywords', content: 'Tic Tac Clock, game, clock, interactive, fun' },
        { name: 'author', content: 'Florian Constant' },
        { name: 'og:title', content: 'Tic Tac Clock - A Fun Game to Learn Time' },
        { name: 'og:description', content: 'Test your clock reading skills with Tic Tac Clock!' },
        { name: 'og:url', content: 'https://tictacclock.florian.dev' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tic Tac Clock - A Fun Game to Learn Time' },
        { name: 'twitter:description', content: 'Test your clock reading skills with Tic Tac Clock!' },
        { name: 'twitter:url', content: 'https://tictacclock.florian.dev' }
    ]
});

</script>
