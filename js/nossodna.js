const carouselSlider = document.querySelector(".carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-slider img");

//Buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//Counter
var counter = 1;
var size = carouselImages[0].clientWidth;

carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";

//Button Listeners
nextBtn.addEventListener("click", function (e) {
    if (counter >= carouselImages.length - 1) return;
    carouselSlider.style.transition = "transform 0.5s ease-in-out";
    counter++;
    console.log(counter);
    carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", function (e) {
    if (counter <= 0) return;
    carouselSlider.style.transition = "transform 0.5s ease-in-out";
    counter--;
    console.log(counter);
    carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlider.addEventListener("transitionend", function (e) {
    if (carouselImages[counter].id == "lastClone") {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if (carouselImages[counter].id == "firstClone") {
        carouselSlider.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});

window.addEventListener("resize", function (e) {
    carouselSlider.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlider.style.transform = "translateX(" + (-size * counter) + "px)";
});


//---------------------------------------------------Pedro---------------------------------------------------
var slideIndex = 1;
var slideIndex2 = 0;

function plusSlides(e) {
    showSlides((slideIndex += e));
}

function currentSlide(e) {
    showSlides((slideIndex = e));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    
    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    setTimeout(showSlidesAutomatic, 5000);
}