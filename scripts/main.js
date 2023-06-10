let slideIndex = 0;
const slides = document.getElementsByClassName("slide")[0].getElementsByTagName("img");

function showSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
  showSlide(n);
}

showSlide(0);

let slideIndex1 = 0;
const slides1 = document.getElementsByClassName("slide1")[0].getElementsByTagName("img");

function showSlide1(n) {
  slideIndex1 += n;
  if (slideIndex1 < 0) {
    slideIndex1 = slides1.length - 1;
  } else if (slideIndex1 >= slides1.length) {
    slideIndex1 = 0;
  }
  
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  
  slides1[slideIndex1].style.display = "block";
}

function changeSlide1(n) {
  showSlide1(n);
}

showSlide1(0);

let slideIndex2 = 0;
const slides2 = document.getElementsByClassName("slide2")[0].getElementsByTagName("img");

function showSlide2(n) {
  slideIndex2 += n;
  if (slideIndex2 < 0) {
    slideIndex2 = slides2.length - 1;
  } else if (slideIndex2 >= slides2.length) {
    slideIndex2 = 0;
  }
  
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  
  slides2[slideIndex2].style.display = "block";
}

function changeSlide2(n) {
  showSlide2(n);
}

showSlide2(0);

