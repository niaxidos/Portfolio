// scrolling outside of section
document.addEventListener("wheel", function (event) {
  const scrollable = document.getElementById("scrollable");
  scrollable.scrollTop += event.deltaY * 0.3;
  event.preventDefault();
});

// smooth scrolling
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

// highlight when a section is in view
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

// add sparkle effect
sections.forEach((section) => observer.observe(section));
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  document.body.appendChild(sparkle);
});

// play/pause button
function toggleGif(element) {
  const container = element.parentNode;
  const img = container.querySelector(".static");

  if (img.classList.contains("gif")) {
    img.src = "files/img/Black.png"; 
    img.classList.remove("gif");
    element.innerText = "▶"; 
    element.classList.remove("pause"); 
  } else {
    img.src = "files/gif/SnakeGame.gif"; 
    img.classList.add("gif");
    element.innerText = "⏸︎"; 
    element.classList.add("pause"); 
  }
}
