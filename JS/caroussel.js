var slideIndex = 0;
var pass = 0;
var timeout;
let test = document.getElementById("test");
test.textContent = "oui";
showSlides(slideIndex);
    
// Thumbnail image controls
function currentSlide(n) {
    test.textContent = "oui";
        showSlides(slideIndex = n, pass = 1);
}
    
function showSlides() {
    test.textContent = "oui";
    var i;
    var slides = document.getElementsByClassName("container");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex ++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    if (pass == 1){
        clearTimeout(timeout);
    }
    //timeout_A = setTimeout(showSlides_A, 7000); // Change image every 7 seconds
}