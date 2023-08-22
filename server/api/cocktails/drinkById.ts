import { ICategory } from "../../../components/categories/CategoriesMenu.vue";

interface ICategories {
  drinks: ICategory[];
  strDrink?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

const DRINK_URL = "https://thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default defineEventHandler(async (event) => {
  let drink: ICategory[] = [];
  const { id } = getQuery(event);

  try {
    const data = await $fetch<ICategories>(`${DRINK_URL}${id}`);
    drink = data.drinks ?? [];
  } catch (error) {
    console.error("Error fetching drinks", error);
  }

  return drink;
});
