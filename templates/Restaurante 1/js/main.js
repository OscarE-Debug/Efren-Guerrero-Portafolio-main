window.addEventListener("load", () => {
  M.AutoInit();
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);
  const elementosCarousel = document.querySelectorAll(".carousel");

  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -70,
    shift: 5,
    padding: 5,
    numVisible: 5,
    indicators: true,
    noWrap: false,
  });
});

let overlay = document.querySelector(".overlay");
document.querySelectorAll("#button").forEach((element) => {
  element.addEventListener("click", () => {
    const elementRoute =
      element.parentNode.parentNode.parentNode.dataset.target;
    const elementMenu = element.parentNode.parentNode.parentNode.dataset.menu;
    const listMenu = document.querySelector("." + elementMenu);
    listMenu.classList.add("description-menu-active");

    document.querySelector(".overlay .image-overlay").src = elementRoute;
    overlay.classList.add("active");
  });
});

document.getElementById("close-button").addEventListener("click", () => {
  let listMenus = document.querySelector(".description-menu-active");
  overlay.classList.add("removing-active");
  setTimeout(removingClasses, 500);
  function removingClasses() {
    overlay.classList.remove("active", "removing-active");
    listMenus.classList.remove("description-menu-active");
  }
});

ScrollReveal({
  delay: 200,
  distance: "50px",
  duration: 900,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: true,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

ScrollReveal().reveal(".image-chef");
ScrollReveal().reveal(".image-saucer");
ScrollReveal().reveal(".carousel");
ScrollReveal().reveal(".hour-hand");
ScrollReveal({ delay: 400 }).reveal(".morning-hours");
ScrollReveal({ delay: 600 }).reveal(".evening-hours");
ScrollReveal({ delay: 800 }).reveal(".night-hours");
