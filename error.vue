<template>
  <section class="grid place-content-center h-screen text-center">
    <div class="w-36">
      <img class="w-full" src="/404.png" alt="Broken goblet" />
    </div>
    <h1 class="mt-5 text-xl md:text-3xl text-faster-blue font-medium">Oops</h1>
    <p class="my-5 text-faster-blue/80">Page not found</p>

    <NuxtLink
      to="/"
      class="py-2 px-5 rounded border border-neutral-200 text-faster-blue hover:border-faster-pink hover:text-faster-pink block text-center"
    >
      to home
    </NuxtLink>
  </section>
</template>
