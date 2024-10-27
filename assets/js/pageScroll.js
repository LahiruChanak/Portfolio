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

// document.addEventListener("DOMContentLoaded", () => {
//   const homeLink = document.querySelector('a[href="#home"]');
//   homeLink.classList.add("active");

//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       navLinks.forEach((link) => link.classList.remove("active"));
//       link.classList.add("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  // Set home as active by default
  const homeLink = document.querySelector('a[href="#home"]');
  homeLink.classList.add("active");

  // Function to change active state
  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("active");
      }
    });
  };

  // Scroll event listener
  window.addEventListener("scroll", () => {
    let current = "";

    // Check if we're near the bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      // Get the last section's id
      current = sections[sections.length - 1].getAttribute("id");
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
    }

    setActiveLink(current);
  });

  // Click event listener
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
