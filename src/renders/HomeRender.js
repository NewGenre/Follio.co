import { Renderer } from '@unseenco/taxi';
import gsap from 'gsap';
import { CustomEase } from "gsap/CustomEase";
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { pause } from 'bodymovin';
import { nodeName } from 'jquery';

gsap.registerPlugin(ScrollTrigger);



export default class homeRender extends Renderer {
  initialLoad() {

    //Load Intro

    const videoWrapper = document.querySelector('.hero_bg_hold')
    const videoBg = document.querySelector('.follio_bg')
    const follioH1 = document.querySelectorAll('.follio_h1')
    const follioSmallText = document.querySelectorAll('.follio_h_p')

    const downCursor = document.querySelector('.down_b_link')

    const follioText = new SplitType(follioH1, { types: 'words, chars, lines'  })
    const follioPara = new SplitType(follioSmallText, { types: 'words, chars, lines'  })

    let intro = gsap.timeline({paused: true})
    intro.set(downCursor,{
      scale: 0,
      opacity: 0,
    })

    intro.set(follioText.lines,{
      y: '120%',
      opacity: 0,
    })

    intro.set(follioPara.lines,{
      y: '120%',
      opacity: 0,
    })

    intro.to(videoWrapper, {
      width: '100vw',
      height: '100vh',
      borderRadius: '0rem',
      duration: 1.6,
      ease: 'expo.out'
    }, '0.1'),

    // intro.from(videoBg,{
    //   rotateY: 20,
    //   duration: 1.6,
    //   ease: 'expo.out'
    // }),

    intro.from(follioText.lines, {
      y: '120%',
      opacity: 0,
      rotateZ: 2,
      duration: 1.4,
      ease: 'expo.out',
      stagger: {
        each: 0.04
      }
    }, '0.2'),

    intro.from(follioPara.chars, {
      y: '120%',
      ease: 'expo.out',
      duration: 1.6,
      stagger: {
        each: 0.03
      }
    }, '0.2'),

    intro.from(downCursor, {
      scale: 0,
      opacity: 1,
      ease: 'expo.out',
      duration: 1.8
    }, '0.3')
    

    //Load Intro Endslack





    // let animation = bodymovin.loadAnimation({
    //   container: document.querySelector('.lottie_holder'),
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   path: 'https://uploads-ssl.webflow.com/653fc3ea0c7eb910f251f299/654d02230a8918c091b21e4e_logoV3.json'
    // })
    // animation.addEventListener('complete', function() {
    //   intro.play();
    //   console.log('animation after')
    // });

    let animation = bodymovin.loadAnimation({
      container: document.querySelector('.lottie_holder'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'https://uploads-ssl.webflow.com/653fc3ea0c7eb910f251f299/654d02230a8918c091b21e4e_logoV3.json'
    })
    
    animation.addEventListener('complete', function() {
      console.log('Animation completed');
      intro.play();
    });
    
    // animation.addEventListener('loopComplete', function() {
    //   console.log('Loop completed');
    // });
    
    // animation.addEventListener('enterFrame', function() {
    //   console.log('Frame entered');
    // });
    
    animation.play();

    



    $(".industry_cards_parent").each(function (index) {
      const swiper = new Swiper($(this).find(".swiper.is-industry")[0], {
        slidesPerView: 1,
        speed: 400,
        keyboard: true,
        loop: true,
        
        mousewheel: {
          forceToAxis: true
        },
      });
    });

    $(".personas_cms_parent").each(function (index) {
      const swiper = new Swiper($(this).find(".swiper.is-personas")[0], {
        slidesPerView: 1,
        speed: 400,
        keyboard: true,
        loop: true,
        loopedSlides: 6,
        
        mousewheel: {
          forceToAxis: true
        },
      });
    });


    //Lenis Scroll

    let lenis;
    if (Webflow.env("editor") === undefined) {
      lenis = new Lenis({
        lerp: 0.1,
        orientation: 'vertical',
        infinite: false,
        wheelMultiplier: 0.7,
        gestureOrientation: "vertical",
        normalizeWheel: true,
        smoothTouch: false
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        
      }
      requestAnimationFrame(raf);
    }
    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });


    

  }

  onEnter() {
    // run after the new content has been added to the Taxi container


    
  }

  onEnterCompleted() {

  }

  onLeave() {
    // run before the transition.onLeave method is called

  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}