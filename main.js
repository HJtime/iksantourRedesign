'use strict'

// 헤더
const navbar=document.querySelector('.navbar');
const topbar=document.querySelector('.topbar');
const header=document.querySelector('.header');
const topbarHegiht=topbar.clientHeight;

window.addEventListener('scroll', ()=>{
    const scrolling=window.pageYOffset;

    if(scrolling>topbarHegiht){
        topbar.classList.add('invisible');
        navbar.classList.add('invisible');
        header.classList.add('invisible');
    }

    if(scrolling<topbarHegiht){
        topbar.classList.remove('invisible');
        navbar.classList.remove('invisible');
        header.classList.remove('invisible');
    }
});

// 관광명소 슬라이드
const tourWrapper=document.querySelector('.tour__wrapper');
const tourSlides=document.querySelectorAll('.tour__slides');
const tourSlidez=document.querySelector('.tour__slides');
const tourSlide=document.querySelector('.tour__slide');
const tourtotal=tourSlides.length;

let tourWidth=tourSlidez.clientWidth;
// let mainWidth=mainWrapper.clientWidth;
let tourSlideIndex=0;


function slidePosition(){
    for(let i=0; i<tourSlides.length; i++){
        tourSlides[i].style.left = `${tourWidth * i}px`;
    }
}

slidePosition();

tourSlide.style.width=tourWidth*tourtotal+'px';

function tourShowSlides(n) {
    tourSlideIndex = n;
    if (tourSlideIndex == -1) {
        tourSlideIndex = tourtotal - 1;
    } else if (tourSlideIndex === tourtotal) {
        tourSlideIndex = 0;
    }
    tourSlide.style.left = -(tourWidth * tourSlideIndex) + 'px';
}

function plusSlides(n){
    tourShowSlides(tourSlideIndex += n);
}

function currentSlide(n) {
    tourShowSlides(tourSlideIndex = n);
}

const nextBtn = document.querySelector('.tour__controller .next');
const prevBtn = document.querySelector('.tour__controller .prev');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

// 여행코스

const slides = document.querySelectorAll('.slides');
const dots =  document.querySelectorAll('.dots');
let slideIndex = 0;

let myVar;


showSlides();

function showSlides(){
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].setAttribute('class', '');
    }
    
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].setAttribute('class', 'on');

    myVar = setTimeout(showSlides, 2000);
}//showSlides


function stopSlide(){
    clearTimeout(myVar);
} //stopSlide

const dotsBox=document.querySelector('.dotContainer');

dotsBox.addEventListener('click', (event)=>{
    const filter=event.target.dataset.current || event.target.parentNode.dataset.current;

    currentSlide(filter);
})

/* ========= */
function currentSlide(num){
    stopSlide();
    slideIndex = num;

    for(var i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].setAttribute('class', '');
    }
    
    slides[slideIndex - 1 ].style.display = 'block';
    dots[slideIndex - 1 ].setAttribute('class', 'on');
}