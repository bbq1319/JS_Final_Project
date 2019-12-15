const body = document.querySelector("body");

const IMG_NUMBER = 3;

function writeImage(imgNumber) {
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    writeImage(randomNumber);
}

init();