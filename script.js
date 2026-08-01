const button = document.getElementById("surpriseBtn");
const slide = document.getElementById("slide");
const slideshow = document.querySelector(".slideshow");
const music = document.getElementById("music");
const finalMessage = document.getElementById("finalMessage");

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg"
];

let current = 0;
let slideshowStarted = false;

button.addEventListener("click", function () {

    alert("Happy Friendship Day! ❤️\n\nThank you for being my safe place. 🫂✨");

    // Start music
    music.play();

    // Show slideshow
    slideshow.style.display = "block";

    if (!slideshowStarted) {

        slideshowStarted = true;

        // Show first photo
        slide.src = photos[0];

        // Change photos every 3 seconds
                let photoTimer = setInterval(function () {

            current++;

            if (current >= photos.length) {

                clearInterval(photoTimer);

                setTimeout(function () {
                    slideshow.style.display = "none";
                    finalMessage.style.display = "block";
                }, 2000);

                return;
            }

            slide.src = photos[current];

        }, 3000);

    }

});
function createHeart() {
    const heart = document.createElement("div");

    const symbols = ["❤️", "🩷", "💕", "✨", "🌸", "💖"];

    heart.className = "heart";
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);