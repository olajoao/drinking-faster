<template>
  <section class="py-5 md:py-10 px-5 xxl:px-0">
    <NuxtLink
      to="/"
      class="w-max p-1 rounded-md ring-1 ring-faster-blue/10 dark:ring-faster-light-blue/40 hover:ring-faster-pink text-semibold text-faster-blue/80 dark:text-faster-light-blue/80 hover:text-faster-pink flex items-center gap-x-3 group text-sm md:text-base"
    >
      <Icon
        name="ph:arrow-arc-left"
        class="w-5 h-5 md:w-6 md:h-6 text-faster-blue/50 dark:text-faster-light-blue/80 group-hover:text-faster-pink"
      />
      Back
    </NuxtLink>
    <div class="md:flex my-10">
      <div class="max-w-md w-full">
        <div class="h-52 sm:h-auto rounded-xl shadow-lg shadow-neutral-200 dark:shadow-faster-blue/30">
          <img
            class="rounded-md w-full object-cover sm:object-fit h-full"
            :src="drink.strDrinkThumb"
            :alt="drink.strDrink"
            width="500"
            height="500"
          />
        </div>
      </div>

      <div class="py-5 md:py-0 md:flex-1 md:px-10">
        <h1 class="text-lg md:text-3xl font-semibold text-neutral-700 dark:text-faster-light-blue w-full truncate">
          {{ drink.strDrink }}
        </h1>
        <p class="text-sm md:text-base my-5 text-neutral-600 dark:text-faster-light-blue/80 text-lg md:max-w-2xl">
          {{ drink.strInstructions }}
        </p>
        <ul class="list-disc px-4 marker:text-faster-pink">
          <li
            v-for="(item, index) in ingredientList"
            :key="`${item}-index`"
            class="flex items-center gap-x-3 list-item text-neutral-600 dark:text-faster-light-blue/80 my-1.5"
          >
            <span>{{ item.ingredient }}</span>
            <span v-if="item.measure"> - {{ item.measure }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "category",
});

const { id } = useRoute().params;
const { data: drinkData } = await useFetch(`/api/cocktails/drinkById?id=${id}`);

const drink = drinkData.value![0];

function createIngredientsList(drinkObj: any) {
  let ingredients: any[] = [];

  for (let i = 1; i < 15; i++) {
    let keyIngredient = "strIngredient" + i;
    let keyMeasure = "strMeasure" + i;
    ingredients.push({
      ingredient: drinkObj[keyIngredient],
      measure: drinkObj[keyMeasure],
    });
  }

  ingredients = ingredients.filter(({ ingredient }) => ingredient);
  return ingredients;
}

const ingredientList = createIngredientsList(drink);
</script>
