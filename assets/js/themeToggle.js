const toggleSwitch = document.getElementById("theme-toggle");

// Set default theme to dark if not in local storage
const currentTheme = localStorage.getItem("theme") || "dark-mode";
document.body.classList.add(currentTheme);

// Smooth transition for theme change
document.body.style.transition =
  "background-color 0.5s ease-in-out, color 0.5s ease-in-out";

// Initialize toggle switch based on the current theme
toggleSwitch.checked = currentTheme === "light-mode";

// Toggle theme on switch change
toggleSwitch.addEventListener("change", () => {
  const newTheme = toggleSwitch.checked ? "light-mode" : "dark-mode";
  document.body.classList.toggle("light-mode", toggleSwitch.checked);
  document.body.classList.toggle("dark-mode", !toggleSwitch.checked);
  localStorage.setItem("theme", newTheme);
});
