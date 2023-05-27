function handleImageChange (offset){
    const actveSlide = document.querySelector('[data-active]')
    const slides = [...document.querySelectorAll('.slide')];
    const currentIndex = slides.indexOf(actveSlide)
    let newIndex = currentIndex + offset;
    if(newIndex < 0){
        newIndex = slides.length - 1
    }
    if(newIndex >= slides.length){
        newIndex = 0
    }

    slides[newIndex].dataset.active = true;
    delete actveSlide.dataset.active;
}

const nextBtn = document.querySelector('.js-next-btn')
const prevBtn = document.querySelector('.js-prev-btn')

nextBtn.addEventListener('click', onNext)
prevBtn.addEventListener('click', onPrev)

function onNext (event) {
    handleImageChange(1)
}

function onPrev (event) {
    handleImageChange(-1)
}