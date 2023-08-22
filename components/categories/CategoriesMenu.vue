<template>
  <div class="relative">
    <aside class="w-52 border-r-2 border-neutral-100 dark:border-faster-light-blue/20 hidden md:block sticky top-10">
      <h2 class="text-2xl text-faster-blue dark:text-faster-light-blue font-semibold mb-4">
        Categories
      </h2>
      <nav>
        <ul>
          <li v-if="favoriteDrinks && favoriteDrinks.length > 0">
            <button
              @click="showFavoriteList"
              class="border-b-2 my-2 hover:text-faster-pink dark:text-faster-light-blue"
              :class="[
                'favorites' === activeItem
                  ? 'font-semibold text-faster-blue border-faster-pink'
                  : 'font-normal border-transparent',
              ]"
            >
              Favorites <span>({{ favoriteDrinks.length }})</span>
            </button>
          </li>
          <li
            v-for="(category, index) in categories"
            :key="`${category.strCategory}#${index}`"
          >
            <button
              @click="getDrinksByCategory(category.strCategory)"
              class="border-b-2 my-2 hover:text-faster-pink dark:text-faster-light-blue"
              :class="[
                category.strCategory === activeItem
                  ? 'font-semibold text-faster-blue dark:text-faster-light-blue border-faster-pink'
                  : 'font-normal border-transparent',
              ]"
            >
              {{ category.strCategory }}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
    <aside class="md:hidden px-5 sm:px-0 my-5">
      <h2 class="text-lg text-faster-blue dark:text-faster-light-blue font-semibold mb-4">Categories</h2>
      <nav>
        <select
          name="categories"
          id="categories"
          class="w-full bg-white dark:bg-transparent dark:text-faster-light-blue border border-neutral-300 dark:border-neutral-700 p-2 rounded-md"
          v-model="selectedOption"
          @change="getDrinksByCategory(selectedOption)"
        >
          <option
            class="text-faster-blue"
            v-for="(category, index) in categories"
            :key="`${category.strCategory}#${index}`"
            :value="category.strCategory"
          >
            {{ category.strCategory }}
          </option>
        </select>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { IDrink } from "./DrinkList.vue";
export interface ICategory {
  strCategory: string;
  strDrink?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

const { data: categories } = await useFetch<ICategory[]>(
  "/api/cocktails/categories"
);

const drinks = useDrinks();
const favoriteDrinks = useFavoriteDrinks();
const activeItem = ref("");
const selectedOption = ref("Ordinary Drink");

async function getDrinksByCategory(category: string) {
  activeItem.value = selectedCategory(category)?.strCategory ?? "";

  category = useFormatName(category);

  const { data } = await useFetch<IDrink[]>(
    `/api/cocktails/drinks?category=${category}`
  );
  drinks.value = data.value ?? [];
}
await getDrinksByCategory("Ordinary Drink");

function selectedCategory(category: string) {
  return categories.value?.find((name) => name.strCategory === category);
}

function showFavoriteList() {
  activeItem.value = "favorites";
  drinks.value = favoriteDrinks.value;
}
</script>
