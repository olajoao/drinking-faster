export const useToggleDarkMode = () => {
  const darkMode = useDarkMode();
  darkMode.value = !darkMode.value;
};
