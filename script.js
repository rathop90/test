// Falling hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.width = "20px";
    heart.style.height = "20px";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10%";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 300);
