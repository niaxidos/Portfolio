// Scrolling outside of section
document.addEventListener("wheel", function (event) {
  const scrollable = document.getElementById("scrollable");
  scrollable.scrollTop += event.deltaY * 0.3;
  event.preventDefault();
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Highlight when a section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(
        `nav a[href="#${entry.target.id}"]`
      );

      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  document.body.appendChild(sparkle);
});

// Updates the visible image
const imagesContainer = document.querySelector(".images");
const images = document.querySelectorAll(".images img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

function updateGallery() {
  const offset = -currentIndex * 100;
  imagesContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});

updateGallery();
