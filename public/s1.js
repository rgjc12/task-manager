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
let frame=document.getElementById("reditbut");
const lerp = (x, y, a) => x * (1 - a) + y * a;
frame.addEventListener("mousemove",(e)=>{
  let dim=frame.getBoundingClientRect();
  let xstart=dim.x;
  let xend=dim.x+dim.width;
  let zo=gsap.utils.mapRange(xstart,xend,0,1,e.clientX);
  gsap.to(cir,{
   scale:8  
  });
  gsap.to(frame.querySelectorAll("a"),{
    y:"-3vw",
      duration:0.2,
    x:lerp(-50, 50, zo),
  });
 
});
frame.addEventListener("mouseleave",(e)=>{
  gsap.to(cir,{
   scale:1  
  });
  gsap.to(frame.querySelectorAll("a"),{
    y:"0",
      duration:0.2,
    x:0,
  });

});