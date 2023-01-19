const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

sliderItems.forEach(function (slide, index) {


//Скрываю все слайды кроме первого
    if (index !== 0) {
        slide.classList.add('hidden');
    }

// Добавляю индексы
    slide.dataset.index = index;

// Добавляю data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');

//Клик по слайдам
    slide.addEventListener('click', function () {
        showBtn('next');
    });
});

btnNext.onclick = function () {
    showBtn('next');
    console.log('next')
}

btnPrev.onclick = function () {
    showBtn('prev');
    console.log('last')
}

function showBtn(direction) {
    //Скрытие текущего слайда
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //Рассчитываю след индекс
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

//Показ предыдущего слайда
    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`)

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active','');
}