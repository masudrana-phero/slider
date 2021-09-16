const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];

let imgIndex = 0;
const slideImg = document.getElementById('slider-image');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    slideImg.setAttribute('src', imgUrl);
    imgIndex++;
}, 1000);