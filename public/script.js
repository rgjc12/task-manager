gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.from("#anim3 h3,#anim4 h3,#anim5 h3,#anim6 h3",{
  y:"9.1vh",
  duration:1.1
})



let cir=document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
  gsap.to(cir,{
    x:e.clientX,
    y:e.clientY,
    duration:0.3,
      ease: "expo.out",

  });
});
let anim1=document.getElementById("anim1");
anim1.addEventListener("mouseenter",()=>{
  gsap.to("#anim1 a",{
          y:"-2.3vw",
          
    duration:0.09,
    
  });
  gsap.to(cir,{
    scale:2,
      ease: "expo.out",
  })
});
  anim1.addEventListener("mouseleave",()=>{
    gsap.to("#anim1 a",{
            y:"0",
      duration:0.09,

    });
    gsap.to(cir,{
      scale:1,
        ease: "expo.out",
    })
});
let anim2=document.getElementById("anim2");
anim2.addEventListener("mouseenter",()=>{
  gsap.to("#anim2 a",{
          y:"-2.3vw",
    duration:0.09,

  });
  gsap.to(cir,{
    scale:2,
      ease: "expo.out",
  })
});
  anim2.addEventListener("mouseleave",()=>{
    gsap.to("#anim2 a",{
            y:"0",
      duration:0.09,

    });
    gsap.to(cir,{
      scale:1,
        ease: "expo.out",
    })
});
let anim3=document.getElementById("anim3");
let anim4=document.getElementById("anim4");
let anim5=document.getElementById("anim5");
let anim6=document.getElementById("anim6");
anim3.addEventListener("mouseenter",()=>{
  gsap.to("#anim3 h3",{
    y:"-9.1vh",
    duration:0.2
  })
});
anim3.addEventListener("mouseleave",()=>{
  gsap.to("#anim3 h3",{
    y:"0",
    duration:0.2
  });
});
anim4.addEventListener("mouseenter",()=>{
  gsap.to("#anim4 h3",{
    y:"-9.1vh",
    duration:0.2
  })
});
anim4.addEventListener("mouseleave",()=>{
  gsap.to("#anim4 h3",{
    y:"0",
    duration:0.2
  });
});
anim5.addEventListener("mouseenter",()=>{
  gsap.to("#anim5 h3",{
    y:"-9.1vh",
    duration:0.2
  })
});
anim5.addEventListener("mouseleave",()=>{
  gsap.to("#anim5 h3",{
    y:"0",
    duration:0.2
  });
});
anim6.addEventListener("mouseenter",()=>{
  gsap.to("#anim6 h3",{
    y:"-9.1vh",
    duration:0.2
  })
});
anim6.addEventListener("mouseleave",()=>{
  gsap.to("#anim6 h3",{
    y:"0",
    duration:0.2
  });
});
let box=document.querySelector("#obot a");
box.addEventListener("mousemove",()=>{
  
  cir.style.width = "25vw";
  cir.style.height = "40vh";
  cir.style.borderRadius = "0";
   cir.style.backgroundImage = `url(/assets/i1.webp)`;

});
box.addEventListener("mouseleave",()=>{
  cir.style.width = "4vh";
  cir.style.height = "4vh";
  cir.style.borderRadius = "50%";
  cir.style.backgroundImage = `none`;
   
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let cards=document.querySelectorAll("#cards");
cards.forEach((card)=>{
  card.addEventListener("mouseenter",()=>{
    gsap.to(card, {
      backgroundColor:"red",
      ease: "expo.out",
    });
  gsap.to(card.querySelectorAll("h3"),{
    color:"#050505",
    ease: "expo.out",
  });
    gsap.to(card.querySelector("#cmid #space"),{
      paddingLeft:"30px",
      ease: "expo.out",
    
    });
  });
  card.addEventListener("mouseleave",()=>{
    gsap.to(card, {
      backgroundColor:"transparent",
      ease: "expo.out",
    });
    gsap.to(card.querySelectorAll("h3"),{
      color:"whitesmoke",
      ease: "expo.out",
    });
    gsap.to(card.querySelector("#space"),{
      width:"0",
      ease: "expo.out",

    });
    gsap.to(card.querySelector("#cmid #space"),{
      paddingLeft:"0",
      ease: "expo.out",

    });
  });
})
let edit=document.querySelectorAll("#edit");
edit.forEach((edit)=>{
  edit.addEventListener("mouseenter",()=>{
    gsap.to(cir,{
      scale:3,
      ease: "expo.out",
    });
  });

  edit.addEventListener("mouseleave",()=>{
    gsap.to(cir,{
      scale:1,
      ease: "expo.out",
    });
  });
});
gsap.from("#page2 #page2-cont",{
  y:"250vh",
  scrollTrigger:{
    trigger:"#page1 #obot",
      scroller:"#main",
      start:"top 68%",
      end:"top 25%",
       scrub:2,
    

  } 
});
gsap.from("#text",{
  x:"-10vw",
  opacity:0,
  scrollTrigger:{
    trigger:"#page1 #obot",
      scroller:"#main",
      start:"top 40%",
      end:"top 25%",
       scrub:2,
    

  }
});
gsap.to(".marque",{
  transform: "translateX(-200%)",
  duration:2.5,
  ease: "none",
  repeat:-1
});
gsap.to(".marque1",{
  transform: "translateX(200%)",
  duration:5.1,
  ease: "none",
  repeat:-1
});
const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'});

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
                trigger: "#obot",
                scroller:"#main",
                start: 'top 20%',
                end: 'top -30%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
    })
})