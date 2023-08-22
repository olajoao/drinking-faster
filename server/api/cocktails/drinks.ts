import { IDrink } from "../../../components/categories/DrinkList.vue";

interface IDrinks {
  drinks: IDrink[];
}

const CATEGORIES_FILTER_URL =
  "https://thecocktaildb.com/api/json/v1/1/filter.php?c=";

export default defineEventHandler(async (event) => {
  let drinks: IDrink[] = [];
  const { category } = getQuery(event);

  try {
    const { drinks: drinksData } = await $fetch<IDrinks>(
      `${CATEGORIES_FILTER_URL}${category}`
    );
    drinks = drinksData ?? [];
  } catch (error) {
    console.error("Error fetching drinks", error);
  }

  return drinks;
});
