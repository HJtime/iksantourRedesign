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
const tourSlides=document.querySelector('.tour__slide');
const tourSlide=document.querySelectorAll('.tour__slide li');
const slideImg=document.querySelector('.tour__slide li');
let currentIdx=0;
let slideCount=tourSlide.length;
const prevBtn=document.querySelector('.tour__controller .prev');
const nextBtn=document.querySelector('.tour__controller .next');
let slidesWidth=slideImg.clientWidth;
let slideMargin=35;

tourSlides.style.width=(slidesWidth+slideMargin)*slideCount-slideMargin+'px';

function moveSlide(num){
    tourSlides.style.left=-num*(slidesWidth+slideMargin)+'px';
    currentIdx=num;
}

nextBtn.addEventListener('click',function(){
    if(currentIdx<slideCount-4){
        moveSlide(currentIdx+1);
    }else{
        moveSlide(0);
    }
});

prevBtn.addEventListener('click',function(){
    if(currentIdx>0){
        moveSlide(currentIdx-1);
    }else{
        moveSlide(slideCount-4);
    }
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