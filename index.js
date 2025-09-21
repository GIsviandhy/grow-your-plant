// 1. Box the changing images
const images = [
    'sprite/sprite_frame_1.png',
    'sprite/sprite_frame_2.png',
    'sprite/sprite_frame_3.png',
    'sprite/sprite_frame_4.png',
    'sprite/sprite_frame_5.png'
];

// 2. Get HTML elements
const imageContent = document.querySelector(".image-content"); // ambil the FIRST image with that class (kl mau smua pake querySelectorAll)
const mainButton = document.getElementById("main-btn");
const finalMessage = document.querySelector(".final-message");

let currentIndex = 0;

// 3. Make function to update image
function updateImage(){
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// 4. Show the first image aka image[0] when page loads
updateImage();

// 5. When button is clicked -> show next image
mainButton.addEventListener("click", () => {
    currentIndex++;

    if(currentIndex < images.length){
        updateImage();
    }

    // At the last image, remove button & show message
    if(currentIndex == images.length-1){
        mainButton.style.display = "none";
        finalMessage.style.display = "block";
    }
});