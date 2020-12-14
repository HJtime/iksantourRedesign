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

// 여행코스
const courseImg=document.querySelector('.course-img img');
const para=document.querySelector('.course__description');
let imgcount=0;
const txt1="익산왕릉-왕궁리 유적-보석박물관-미륵사지-입정리고분";
const txt2="어쩌구";
const txt3="저쩌구";


function changeImg(){
    if(imgcount<3){
        imgcount++;
        courseImg.setAttribute("src", "imgs/course"+imgcount+".jpg");
    }else if(imgcount>2){
        imgcount=0;
    }    
}

const imgtimer=setInterval(function(){
    changeImg();
}, 2500)
