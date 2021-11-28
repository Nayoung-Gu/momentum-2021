const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
]

const image = images[Math.floor(Math.random() * images.length)];

const bigImage = document.createElement("img");

bigImage.src = `img/${image}`;

document.body.appendChild(bigImage);