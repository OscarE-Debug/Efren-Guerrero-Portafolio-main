// *grab DOM elements

let navbar = document.querySelector(".mobile-links");
let linksOrientation = document.querySelector(".list-links");
let buttonOpenLinks = document.querySelector(".bi-list");
let buttonCloseLinks = document.querySelector(".bi-x");
let buttons = document.querySelectorAll(".button-general");
let overlay = document.querySelector(".overlay");

// *Event listeners for window width

window.addEventListener("load", () => {
  let innerScreenWidth = window.innerWidth;
  if (innerScreenWidth >= 1051) {
    navbar.classList.remove("mobile-links");
    linksOrientation.classList.remove("orientation-mobile");
    linksOrientation.classList.add("orientation-desktop");
  } else {
    navbar.classList.add("mobile-links");
    linksOrientation.classList.add("orientation-mobile");
    linksOrientation.classList.remove("orientation-desktop");
  }
});

window.addEventListener("resize", () => {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1051) {
    navbar.classList.remove("mobile-links");
    linksOrientation.classList.remove("orientation-mobile");
    linksOrientation.classList.add("orientation-desktop");
  } else {
    navbar.classList.add("mobile-links");
    linksOrientation.classList.add("orientation-mobile");
    linksOrientation.classList.remove("orientation-desktop");
  }
});

// *Links visible mobile

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // !Open mobile navbar button
    if (element.classList.contains("bi-list")) {
      navbar.classList.add("active");
      setTimeout(function addingClasses() {
        buttonOpenLinks.classList.add("inactive");
        buttonCloseLinks.classList.add("active");
      }, 1000);
    }

    // !Closing the mobile navbar
    if (element.classList.contains("bi-x")) {
      navbar.classList.add("removing-links");
      setTimeout(function removingClasses() {
        navbar.classList.remove("removing-links");
        navbar.classList.remove("active");
        buttonCloseLinks.classList.remove("active");
        buttonOpenLinks.classList.remove("inactive");
      }, 1000);
    }
  });
});

// *Popup for web templates


const routeWebTemplate = document.querySelector(".link-page");
document.querySelectorAll(".button-overlay").forEach((element) => {
  element.addEventListener("click", () => {
    const url = element.dataset.target;
    const linkWebTemplate = element.dataset.link;
    overlay.classList.add("active");

    document.querySelector(".image-overlay").src = url;
    routeWebTemplate.href = linkWebTemplate;
  });
});

document.querySelector(".bi-x-circle").addEventListener("click", () => {
  overlay.classList.add("removing-overlay");

  setTimeout(function removingClasses() {
    overlay.classList.remove("active");
    overlay.classList.remove("removing-overlay");
  }, 300);
});

// *Zoom of web templates

let item = document.querySelectorAll(".item-web-templates");
item.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    const itemZoom = element.dataset.item;
    const addClassZoom = document.querySelector("." + itemZoom);
    addClassZoom.classList.add("zoom");
  });
  element.addEventListener("mouseleave", () => {
    const itemRemoveZoom = element.dataset.item;
    const removeClassZoom = document.querySelector("." + itemRemoveZoom);
    removeClassZoom.classList.remove("zoom");
  });
});

// *Scrollreveal config

ScrollReveal().reveal(".reveal", {
  delay: 300,
  distance: "20px",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "left",
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

ScrollReveal().reveal(".reveal-right", {
  origin: "right",
});

ScrollReveal().reveal(".reveal-special", {
  distance: "0px",
  delay: 500,
});
