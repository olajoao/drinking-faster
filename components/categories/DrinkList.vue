<template>
  <ClientOnly>
    <div
      v-if="drinks && drinks.length > 0"
      class="flex-1 px-5 sm:px-0 md:px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5"
    >
      <article v-for="drink in drinks" :key="drink.idDrink" class="group">
        <NuxtLink
          :to="`/categories/${drink.idDrink}`"
          class="rounded-md block transition-all duration-300 lg:scale-90 lg:group-hover:scale-100"
        >
          <div
            class="h-52 rounded-md shadow-lg shadow-neutral-200 dark:shadow-faster-blue/20 bg-black/20 group-hover:bg-transparent transition-all duration-300"
          >
            <img
              class="rounded-md w-full object-cover sm:object-fit h-full mix-blend-multiply dark:mix-blend-normal"
              width="120"
              height="120"
              :src="drink.strDrinkThumb"
              :alt="drink.strDrink"
            />
          </div>
        </NuxtLink>
        <div class="flex items-center justify-between mt-3 sm:px-3 gap-x-3">
          <h3 class="text-faster-blue dark:text-faster-light-blue truncate w-10/12" :title="drink.strDrink">
            {{ drink.strDrink }}
          </h3>

          <button @click="favoriteDrink(drink)" class="relative">
            <Icon
              v-if="drink.favorite"
              name="ph:star-fill"
              class="w-5 h-5 text-amber-400"
            />
            <Icon
              v-else
              name="ph:star-duotone"
              class="w-5 h-5 text-amber-400"
            />
            <span class="sr-only"> Favorite drink button </span>
          </button>
        </div>
      </article>
    </div>

    <div v-else>
      <h1 class="text-faster-blue dark:text-faster-light-blue text-4xl font-semibold text-center">
        No drinks found
      </h1>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  favorite?: boolean;
}

const drinks = useState<IDrink[]>("drinks");
const favoriteDrinks = useState<IDrink[]>("favorites");
const tempDrinks = ref<IDrink[]>([]);

function favoriteDrink(drink: IDrink) {
  if (favoriteDrinks.value.length > 0) {
    const drinkAlreadyFavorite = favoriteDrinks.value.findIndex(
      (currentDrink) => drink.idDrink === currentDrink.idDrink
    );

    if (drinkAlreadyFavorite >= 0) {
      drink.favorite = false;
      favoriteDrinks.value.splice(drinkAlreadyFavorite, 1);
      return;
    }
  }

  drink.favorite = true;
  tempDrinks.value.push(drink);
  favoriteDrinks.value = tempDrinks.value;
}
</script>
