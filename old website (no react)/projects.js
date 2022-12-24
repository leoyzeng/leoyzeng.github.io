let index = 0;
displaySlides();

function changeSlide(n) {
    displaySlides(index += n);
}

function displaySlides() {
    // find all slides
    var slides = document.getElementsByClassName("slide");

    // if index is out of bounds
    if (index < 0) {
        index = slides.length-1
    }

    if (index === slides.length) {
        index = 0
    }

    // hide everything
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // show current slide
    slides[index].style.display = "block";
}
