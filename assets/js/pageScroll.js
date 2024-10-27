document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const navHeight = document.querySelector("header").offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navHeight - 30,
      behavior: "smooth",
    });
  });
});
