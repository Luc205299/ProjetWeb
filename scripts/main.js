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