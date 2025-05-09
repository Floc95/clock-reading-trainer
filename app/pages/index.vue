<template>
    <div class="flex grow">
        <GameManager class="flex flex-col grow md:mt-10 md:max-h-230 md:block"></GameManager>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameManager from '~/components/game/gameManager.vue';

export default defineComponent({
    name: "HomePage",
});
</script>
