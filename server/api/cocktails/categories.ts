import { ICategory } from "../../../components/categories/CategoriesMenu.vue";

interface ICategories {
  drinks: ICategory[];
}

const CATEGORIES_LIST_URL =
  "https:/thecocktaildb.com/api/json/v1/1/list.php?c=list";

export default defineEventHandler(async (event) => {
  let categories: ICategory[] = [];
  try {
    const data = await $fetch<ICategories>(CATEGORIES_LIST_URL);
    categories = data.drinks ?? [];
  } catch (error) {
    console.error("Error fetching categories", error);
  }
  return categories;
});
