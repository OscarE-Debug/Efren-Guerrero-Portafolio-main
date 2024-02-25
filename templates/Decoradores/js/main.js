//* Grab DOM elements

let imagesReference = document.querySelectorAll(".reference-images");
let coverImages = document.querySelectorAll(".cover");

//* Functions

function start(){
  imagesReference.forEach((element)=>{
    imagesStaertWidth = element.clientWidth;
  })
  
}

window.addEventListener("resize", () => {
  imagesReference.forEach((element) => {
    imagesWidth = element.clientWidth;
  });
  coverImages.forEach((element) => {
    element.style.setProperty("width", `${imagesWidth}px`);
  });
});
