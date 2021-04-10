var slideshow1 = document.getElementById("slideshow1");
var slideshow2 = document.getElementById("slideshow2");
var slideshow3 = document.getElementById("slideshow3");
var slideshow4 = document.getElementById("slideshow4");
var slideshow5 = document.getElementById("slideshow5");
var slideshow6 = document.getElementById("slideshow6");
var slideshow7 = document.getElementById("slideshow7");

var slideshows = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6, slideshow7];
for (i = 0; i < slideshows.length; i++) {
    slideshows[i].currentSlideIndex = 1;
    showSlides(slideshows[i].currentSlideIndex, slideshows[i]);
}

function plusSlides(n, slideshow) {
    showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
    showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
    var i;
    var slides = slideshow.getElementsByClassName("mySlides");
    var dots = slideshow.getElementsByClassName("dot");
    if (n > slides.length) {slideshow.currentSlideIndex = 1}    
    if (n < 1) {slideshow.currentSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideshow.currentSlideIndex-1].style.display = "block";  
    dots[slideshow.currentSlideIndex-1].className += " active";
}