const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');

sliderItems.forEach(function (slide, index) {


//Скрываю все слайды кроме первого
    if (index !== 0) {
        slide.classList.add('hidden');
    }

// Добавляю индексы
    slide.dataset.index = index;

//Клик по слайдам
    slide.addEventListener('click', function() {

        //Скрываю текущий слайд
        slide.classList.add('hidden');

        //Рассчитываю индекс след слайда

        let nextSlideIndex;
        if (index +1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1
        }

        //Нахожу след слайд
        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

        //Отображаю след слайд
        nextSlide.classList.remove('hidden');
    });
});

