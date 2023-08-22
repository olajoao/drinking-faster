<template>
  <header class="container mx-auto px-5 xxl:px-0 py-5 flex items-center justify-between">
    <a href="https://www.fstr.co" target="_blank" class="max-w-xs flex gap-x-1">
      <h1 class="text-3xl text-faster-blue dark:text-faster-light-blue">
        <span>drinkingFaster</span>
        <span class="text-5xl text-faster-pink">.</span>
      </h1>
    </a>

    <button
      @click="toggleDarkMode"
      class="text-faster-blue/80 dark:text-faster-light-blue p-1 rounded ring-1 ring-faster-blue/30 dark:ring-faster-light-blue/40 w-10 h-10"
    >
      <Icon v-if="darkMode" class="w-6 h-6" name="ph:sun-fill" />
      <Icon v-else class="w-6 h-6" name="ph:moon-fill" />
    </button>
  </header>
</template>
<script lang="ts" setup>
const darkMode = useDarkMode();

const toggleDarkMode = () => useToggleDarkMode();
</script>
