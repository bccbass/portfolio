const slideContainer = document.querySelector('.slide-container');
const slide = document.querySelector('.slide');
const slideLeft = document.querySelector('#slide-left');
const slideRight = document.querySelector('#slide-right');


slideLeft.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
})

slideRight.addEventListener('click', () => {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
})
