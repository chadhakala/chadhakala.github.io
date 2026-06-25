const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

themeToggle?.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  root.setAttribute("data-theme", nextTheme);
});
