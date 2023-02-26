const btnLeft = document.querySelector(".button-arrow.-left");
const btnRight = document.querySelector(".button-arrow.-right");

const elements = document.querySelector(".elements");
let pixels = 0;
const sumPixel = 30;
btnRight.addEventListener('click', () => {
    pixels += sumPixel;
    elements.style = `transform: translateX(${pixels}px)`
});
btnLeft.addEventListener('click', () => {
    pixels -= sumPixel;
    elements.style = `transform: translateX(${pixels}px)`
});