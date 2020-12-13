'use strict'

// 헤더
const navbar=document.querySelector('.navbar');
const header=document.querySelector('.header');
const headerHegiht=header.clientHeight;

window.addEventListener('scroll', ()=>{
    const scrolling=window.pageYOffset;

    if(scrolling>headerHegiht){
        header.classList.add('invisible');
        navbar.classList.add('invisible');
    }

    if(scrolling<headerHegiht){
        header.classList.remove('invisible');
        navbar.classList.remove('invisible');
    }
});

// 서브메뉴
const subMenu=document.querySelectorAll('.navbar__sub');

navbar.addEventListener('mouseover', (event)=>{
    const filter=event.target.dataset.num || event.target.parentNode.dataset.num;

    if(filter===null){
        return;
    }

    subMenu.forEach((sub)=>{
        if(filter===sub.dataset.sub){
            sub.classList.toggle('show');
        }
        else{
            sub.classList.remove('show');
        }
    })
});

// 관광명소 슬라이드
const slides=document.querySelector('.tour__slide');
const slide=document.querySelectorAll('.tour__slide li');
const slideImg=document.querySelector('.tour__slide li');
let currentIdx=0;
let slideCount=slide.length;
const prevBtn=document.querySelector('.tour__controller .prev');
const nextBtn=document.querySelector('.tour__controller .next');
let slidesWidth=slideImg.clientWidth;
let slideMargin=35;

slides.style.width=(slidesWidth+slideMargin)*slideCount-slideMargin+'px';

function moveSlide(num){
    slides.style.left=-num*(slidesWidth+slideMargin)+'px';
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