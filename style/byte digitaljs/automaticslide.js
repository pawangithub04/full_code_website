let slideIndex = 1;
showSlides(slideIndex);

// Automatically advance the slides every 5 seconds
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

// Rest of your JavaScript code (slider.js) for handling slides and dots
function plusSlides(n) {
    clearInterval(slideInterval); // Clear the previous interval
    slideIndex += n;
    showSlides(slideIndex);
    
    // Set a new interval to continue automatic slide transitions
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

function currentSlide(n) {
    clearInterval(slideInterval); // Clear the previous interval
    slideIndex = n;
    showSlides(slideIndex);
    
    // Set a new interval to continue automatic slide transitions
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}


