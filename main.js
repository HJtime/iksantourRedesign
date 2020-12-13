'use strict'

// 헤더
const navbar=document.querySelector(".navbar");
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

// console.log(headerHegiht);