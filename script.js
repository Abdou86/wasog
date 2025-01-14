let currentIndex = 0;
const images = document.querySelectorAll('.slider img');

function showNextImage() {
    images[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = '1';
}

setInterval(showNextImage, 3000);
