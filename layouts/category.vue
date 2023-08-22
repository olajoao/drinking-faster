<template>
  <main :class="{ dark: darkMode }">
    <div class="dark:bg-black/95 min-h-screen">
      <FasterHeader />
      <section>
        <div class="container mx-auto">
          <slot />
        </div>
      </section>
    </div>
  </main>
</template>
<script lang="ts">
import FasterHeader from "../components/FasterHeader.vue";
export default {
  components: { FasterHeader },
  layout: "category",
  setup() {
    const darkMode = useDarkMode();
    return {
      darkMode,
    };
  },
};
</script>
