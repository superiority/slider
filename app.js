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

        //Скрываю текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        //Рассчитываю индекс след слайда

        let nextSlideIndex;
        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1
        }

        //Нахожу след слайд
        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

        //Отображаю след слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
    });
});

btnNext.onclick = function () {


    //Скрытие текущего слайда
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    //Показ след слайд
    let nextSlideIndex;
    if (currentSlideIndex + 1 === sliderItems.length) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1
    }
    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`)

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function () {

    console.log('nazad')

    //Скрытие текущего слайда
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //Показ предыдущего слайда
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`)

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active','');
}