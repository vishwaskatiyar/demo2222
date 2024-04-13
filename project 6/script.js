const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const images = document.querySelectorAll(".image");
let currentIndex = 0;

for (let i = 1; i < images.length; i++) {
    images[i].style.display = "none";
}

function showImage(index) {

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[index].style.display = "block";
}

// Event listener for the next button
nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Event listener for the prev button
prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});
