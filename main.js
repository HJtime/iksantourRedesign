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

const navMenu=document.querySelectorAll('.navbar__main li');
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

