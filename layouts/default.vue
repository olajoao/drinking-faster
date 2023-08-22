<template>
  <main :class="{ dark: darkMode }" class="min-h-screen">
    <div class="dark:bg-black/95">
      <FasterHeader />
      <section>
        <div class="container mx-auto">
          <FasterHero />
          <div class="md:flex sm:px-5 xxl:px-0 gap-x-5 md:my-10 relative">
            <CategoriesMenu />
            <CategoriesDrinkList />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script lang="ts" setup>
const darkMode = useDarkMode();
</script>
