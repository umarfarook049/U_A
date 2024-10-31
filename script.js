// Optional: You can add more interactive features using JavaScript.
document.addEventListener("DOMContentLoaded", () => {
    const girlfriendImage = document.getElementById("girlfriend-img");

    // Example effect: Girlfriend image fade-in on page load.
    girlfriendImage.style.opacity = 0;
    setTimeout(() => {
        girlfriendImage.style.transition = "opacity 2s";
        girlfriendImage.style.opacity = 1;
    }, 500);
});
// Optional: You can add more interactive features using JavaScript.
document.addEventListener("DOMContentLoaded", () => {
    const girlfriendImage = document.getElementById("girlfriend-img1");

    // Example effect: Girlfriend image fade-in on page load.
    girlfriendImage.style.opacity = 0;
    setTimeout(() => {
        girlfriendImage.style.transition = "opacity 2s";
        girlfriendImage.style.opacity = 1;
    }, 500);
});

// qoute 
// JavaScript for Hearts Rain Effect
const heartContainer = document.querySelector(".heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// JavaScript for Typing Animation
const quoteText = "Love is not just looking at each other, it's looking in the same direction.";
let index = 0;

function typeQuote() {
  if (index < quoteText.length) {
    document.getElementById("quote").innerHTML += quoteText.charAt(index);
    index++;
    setTimeout(typeQuote, 100); // Adjust speed here
  }
}

window.onload = typeQuote;

