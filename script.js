 
 function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration:1.5,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.2
    })
}

 function navanimation(){
 
var nav=document.querySelector("nav")
nav.addEventListener("mouseenter",function(){
 let tl=gsap.timeline()
 tl.to(".nav-bottom",{
    height:"21vh"
 })
 tl.to(".nav-part2 h5",{
    display:"block"
 })
  tl.to(".nav-part2 h5 span",{
    y:0,
    stagger:{
        amount:0.3
    }
     
 })
})
nav.addEventListener("mouseleave",function(){
 let tl=gsap.timeline()
 
  tl.to(".nav-part2 h5 span",{
    y:25,
    stagger:{
        amount:0.2
    }   
 })
 tl.to(".nav-part2 h5",{
    display:"none",
    duration:0.1
 })
 tl.to(".nav-bottom",{
    height:0,
    duration:0.1
 })
})
 }
 
 function page2animation(){
    var rightElem=document.querySelectorAll(".right-elem")
 rightElem.forEach(function(elem){
 elem.addEventListener("mouseenter",function(){
   gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1
   })
 })
  elem.addEventListener("mouseleave",function(){
         gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0
   })
 })
 elem.addEventListener("mousemove",function(dets){
   gsap.to(elem.childNodes[3],{
      x:dets.x-elem.getBoundingClientRect().x-40,
      y:dets.y-elem.getBoundingClientRect().y-180
   })
 })
 })
 }
 function page3videoanimatio(){
   
 var page3Centar=document.querySelector(".page3-centar")
 var video=document.querySelector(".page3 video")
 page3Centar.addEventListener("click",function(){
   video.play()
   gsap.to(video,{
      Transform:"scaleX(1) scaleY(1)",
      opacity:1,
      borderRadius:0
   })
   video.addEventListener("click",function(){
      video.pause()
         gsap.to(video,{
      Transform:"scaleX(0.7) scaleY(0.2)",
      opacity:0,
      borderRadius:"30px"
   })
   })
 })
 }
 function page6animation(){
    var sections=document.querySelectorAll(".section-right")
 sections.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      elem.childNodes[3].style.opacity=1,
      elem.childNodes[3].play()
   })
      elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.opacity=0,
      elem.childNodes[3].load()
   })
 })
 }
  
 function page8Scrollanimation(){
    gsap.from("#btm8-part2 h4",{
   x:0,
   duration:1,
   scrollTrigger:{
      trigger:"#btm8-part2",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true

   }
 }),
     gsap.from("#btm8-part3 h4",{
   x:0,
   duration:1,
   scrollTrigger:{
      trigger:"#btm8-part3",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true

   }
 }),
     gsap.from("#btm8-part4 h4",{
   x:0,
   duration:1,
   scrollTrigger:{
      trigger:"#btm8-part4",
      scroller:".main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true

   }
 })

 } 
   loadingAnimation()
   locomotiveAnimation()
    navanimation()
    page2animation()
    page3videoanimatio()
    page6animation()
    page8Scrollanimation()
    respnav()
   
    
   function respnav(){
            var manu=document.querySelector(".manu");
      var cls=document.querySelector(".ri-close-circle-line");
      var respnav=document.querySelector(".resp-nav")
      manu.addEventListener("click",function(){
         respnav.style.left="0%"
         console.log("click and open")
      })
      cls.addEventListener("click",function(){
         respnav.style.left="-100%"
         console.log("click and close")
      })
   }
     
      
     
    
 

 