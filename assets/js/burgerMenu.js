const menuIcon = document.getElementById("menu-icon");
const menuPanel = document.getElementById("menu-panel-id");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  menuPanel.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  menuPanel.classList.remove("active");
});
