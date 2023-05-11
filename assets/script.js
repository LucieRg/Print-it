const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag-Line");
const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let Slide = 0;

arrowLeft.addEventListener("click", () => {
  console.log("click left");
  Slide = (Slide + slides.length - 1) % slides.length;
  bannerImg.src = "assets/images/slideshow/" + slides[Slide].image;
  tagLine.innerHTML = slides[Slide].tagLine;
  updateDots();
});

arrowRight.addEventListener("click", () => {
  console.log("click right");
  Slide = (Slide + slides.length + 1) % slides.length;
  bannerImg.src = "assets/images/slideshow/" + slides[Slide].image;
  tagLine.innerHTML = slides[Slide].tagLine;
  updateDots();
});

for (let i = 0; i < slides.length; i++) {
  const newDot = document.createElement("div");
  newDot.className = "dot";
  dots.appendChild(newDot);
}

let dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");

function updateDots() {
  for (let i = 0; i < dot.length; i++) {
    if (i === Slide) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
  }
}
