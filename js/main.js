let sliderBtnLeft = document.querySelector('.slider__btn-left');
let sliderBtnRight = document.querySelector('.slider__btn-right');
let sliderDots = document.querySelectorAll('.slider__dot');
let sliderLinks = document.querySelectorAll('.slider__links-item');

let sliderItems = [
    {
        image: 'images/slider-image-1.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request'
    },
    {
        image: 'images/slider-image-2.png',
        city: 'Sochi<br>Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request'
    },
    {
        image: 'images/slider-image-3.png',
        city: 'Rostov-on-Don<br>Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request'
    }
];

let sliderCurrentItem = 0;

sliderBtnLeft.addEventListener('click', function() {
    if (sliderCurrentItem - 1 < 0) {
        sliderCurrentItem = sliderItems.length - 1;
    } else {
        sliderCurrentItem--;
    }

    changeSlide(sliderCurrentItem);
});

sliderBtnRight.addEventListener('click', function() {
    if (sliderCurrentItem + 1 > sliderItems.length - 1) {
        sliderCurrentItem = 0;
    } else {
        sliderCurrentItem++;
    }

    changeSlide(sliderCurrentItem);
});

sliderDots.forEach(function(item, index) {
    item.addEventListener('click', function() {
        sliderCurrentItem = index;

        changeSlide(index);
    });
});

sliderLinks.forEach(function(item, index) {
    item.addEventListener('click', function() {
        sliderCurrentItem = index;
        
        changeSlide(index);
    });
});

function changeSlide(itemId) {
    let currentDot = document.querySelector('.slider__dot_active');
    let currentLink = document.querySelector('.slider__links-item_active');
    let nextDot = document.querySelectorAll('.slider__dot')[itemId];
    let nextLink = document.querySelectorAll('.slider__links-item')[itemId];

    currentDot.classList.remove('slider__dot_active');
    currentLink.classList.remove('slider__links-item_active');
    nextDot.classList.add('slider__dot_active');
    nextLink.classList.add('slider__links-item_active');

    let image = document.querySelector('.slider__image img');
    let city = document.querySelector('.slider__info-item_city p');
    let apartmentArea = document.querySelector('.slider__info-item_apartment-area p');
    let repairTime = document.querySelector('.slider__info-item_repair-time p');
    let repairCost = document.querySelector('.slider__info-item_repair-cost p');

    image.src = sliderItems[itemId].image;
    city.innerHTML = sliderItems[itemId].city;
    apartmentArea.innerHTML = sliderItems[itemId].apartmentArea;
    repairTime.innerHTML = sliderItems[itemId].repairTime;
    repairCost.innerHTML = sliderItems[itemId].repairCost;
}