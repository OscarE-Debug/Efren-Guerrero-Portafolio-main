// *Carousel bootstrap

var carouselMenu = document.querySelector("#menu-carousel");

new bootstrap.Carousel(carouselMenu, {
  interval: 5000,
  keyboard: true,
  pause: "hover",
  ride: true,
  wrap: true,
  touch: true,
});

// !Scrollreveal

ScrollReveal().reveal(".object-rvl", {
  delay: 300,
  distance: "0px",
  duration: 700,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "left",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
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

ScrollReveal().reveal(".special-reveal", {
  delay: 600,
  distance: "0px",
  duration: 900,
  origin: "center",
  scale: 0.3,
});

ScrollReveal().reveal(".hamburger", {
  delay: 1000,
  rotate: {
    x: 0,
    y: 0,
    z: 2000,
  },
});
ScrollReveal().reveal(".circle-orange", { delay: 800 });
ScrollReveal().reveal(".circle-red", { delay: 600 });
ScrollReveal().reveal(".obj-delay", { delay: 600 });

// * Overlay

const buttonsOverlay = document.querySelectorAll(".btn-overlay");
const buttonCloseOverlay = document.querySelector(".bi-x-circle");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".image-overlay");
const menuList = document.querySelectorAll(".menu-content");

buttonsOverlay.forEach((element) => {
  element.addEventListener("click", () => {
    overlay.classList.add("active");
    const targetImage = element.dataset.img;
    const classMenu = element.dataset.class;
    document.querySelector("." + classMenu).classList.add("active");
    overlayImage.src = targetImage;
  });
});

buttonCloseOverlay.addEventListener("click", () => {
  overlay.classList.add("removing-overlay");
  setTimeout(function () {
    overlay.classList.remove("active");
    overlay.classList.remove("removing-overlay");
    menuList.forEach((element) => {
      element.classList.remove("active");
    });
  }, 300);
});
