<template>
    <div class="flex flex-col min-h-screen">
        <header class="container mx-auto shrink-0">
            <UNavigationMenu
                highlight
                highlight-color="primary"
                orientation="horizontal"
                :items="items"
                class="data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
            />
        </header>

        <main class="container mx-auto grow p-4">
            <slot />
        </main>

        <footer class="container mx-auto shrink-0 p-4">
            <p class="text-center text-sm text-gray-300 dark:text-gray-600">
              <a href="https://florian.dev" target="_blank" rel="noopener noreferrer" class="hover:underline">
                florian.dev
              </a>
            </p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Tic Tac Clock',
      icon: 'i-lucide-clock',
      to: '/',
    },
  ],
  [
    {
      label: 'Learn',
      icon: 'i-lucide-book',
      to: '/learn',
    },
    {
      label: 'About',
      icon: 'i-lucide-info',
      to: '/about',
    },
    {
      label: '',
      icon: 'i-lucide-github',
      href: 'https://github.com/Floc95/clock-reading-trainer',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ]
]);
</script>

<style scoped>
</style>