export const useFormatName = (name: string) => {
  name = name ? name.trim().toLowerCase().replace(" ", "_") : "";
  return name;
};
