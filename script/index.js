function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.id;
      const correspondingLink = document.querySelector(
        `.nav-links a[href="#${targetId}"]`
      );

      // Remove 'currentpage' class from all links
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("currentpage");
      });

      // Add 'currentpage' class to the corresponding link
      correspondingLink.classList.add("currentpage");
    }
  });
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.3,
});

// Observe each section
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const navLinks = document.querySelector(".nav-links");
var navIcons = document.querySelectorAll("#hamburger-menu");

navIcons.forEach(function (navIcon) {
  navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
});
const navLinksli = document.querySelectorAll(".nav-links li");

navLinksli.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.querySelector("a").getAttribute("href");
    window.location.href = href;
  });
});
