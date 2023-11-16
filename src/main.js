import './styles/style.css'

import { Core } from '@unseenco/taxi'
import { Renderer } from '@unseenco/taxi';

import homeRender from './renders/HomeRender';
import { Transition } from '@unseenco/taxi'


import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import Lenis from '@studio-freight/lenis'
import 'swiper/css/bundle';
import { easing } from 'jquery';

// const lenisInstance = new Lenis();

// function raf(time) {
//     lenisInstance.raf(time)
//     requestAnimationFrame(raf)
//   }
  
//   requestAnimationFrame(raf)




const taxi = new Core({
    renderers: {
        home: homeRender,
        // work: workRender,
        // about: aboutRender,
        
    },
    transitions: {
        // homeTran: myHome,
        // workTran: workPage,
        // aboutTran: AboutPage
    }
})


console.log('Hello its working for follio baby')





//Navbar Mobile Menu //


const menuToggle = document.querySelector('.navbar_tool')

const bgWrapper = document.querySelector('.navbar_mobile_component')
const menuText = document.querySelectorAll('.nav_t_mobile')
const menuLines = document.querySelectorAll('.nav_line_mobile')

const menuHorizontalLines = document.querySelectorAll('.horizontal_line_menu')

const menuCloseWrap = document.querySelector('.lose_nav_wrap')
const menuVerticalLines = document.querySelectorAll('.line_close_nav')

const firstBg = document.querySelector('.background_1')
const secBg = document.querySelector('.background_2')

const menuButtons = document.querySelectorAll('.login_mobile')



const textMenu = new SplitType(menuText, { types: 'words, chars, lines'  })

let navTl = gsap.timeline({ paused: true });


// navTl.set(textMenu.lines,{
//     y: '120%',
//     opacity: 0,
// })

// navTl.set(menuLines,{
//     width: '0%',
// })

navTl.to(bgWrapper,{
    display: 'flex',
    ease: 'expo.out',
    duration: 0
}),

navTl.from(firstBg,{
    height: '0%',
    width: '100%',
    duration: 0.8,
    ease: 'expo.out'
}, '0.1'),

navTl.from(secBg,{
    height: '0%',
    width: '100%',
    duration: 0.8,
    ease: 'expo.out'
},  '0.2'),

navTl.from(textMenu.lines,{
    y: '120%',
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    stagger: {
        each: 0.03
    }
}, '0.3'),

navTl.from(menuLines,{
    width: '0%',
    ease: 'expo.out',
    duration: 0.6,
    stagger: {
        each: 0.04
    },
}, '0.4'),

navTl.from(menuButtons,{
    y: '120%',
    scale: 0.5,
    duration: 1.2,
    ease: 'expo.out',
    stagger: {
        each: 0.02
    }
}, '0.5')






navTl.reverse();
menuToggle.addEventListener("click", function () {
    navTl.reversed(!navTl.reversed());
    if (!navTl.reversed()) {
        lenisInstance.stop();
        // document.body.style.position = 'fixed';
    } else {
        lenisInstance.start();
        // document.body.style.position = '';
    }   
});

//Navbar Mobile Menu Ends //


//Sticky Section Video Grow


$(".about_section").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".about_video_parent");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
        scale: 0.4,
        y: '10%',
        borderRadius: "0.8rem",
        duration: 1.2
      },
      {
        scale: 1,
        y: '0%',

        borderRadius: "0.8rem",
        duration: 1.2
      }
    );
  });

//Sticky Section Video Grow End//