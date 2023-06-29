const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesRightCount = slideRight.querySelectorAll('div').length;

slideLeft.style.top = `-${(slidesRightCount - 1) * 100}vh`;

let activeSlideIndex = 0;

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'up')
        activeSlideIndex = (activeSlideIndex + 1) % slidesRightCount;
    else if (direction === 'down')
        activeSlideIndex = (activeSlideIndex - 1 + slidesRightCount) % slidesRightCount;

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

window.addEventListener('load', () => {
    changeSlide('down');
});
