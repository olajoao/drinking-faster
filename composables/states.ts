import { IDrink } from "../components/categories/DrinkList.vue";

export const useDrinks = () => useState<IDrink[]>("drinks", () => []);
export const useFavoriteDrinks = () =>
  useState<IDrink[]>("favorites", () => []);

export const useDarkMode = () => useState<boolean>("darkMode", () => true);
