// $(document).ready(function () {
//     gsap.registerPlugin(ScrollTrigger);

//     let brandMainSlider = gsap.utils.toArray(".brandSlide");

//     gsap.to(brandMainSlider, {
//         xPercent: -100 * (brandMainSlider.length - 1),
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".horizontal-sliders",
//             start: "top top",
//             end: "+=" + document.querySelector(".brandSlide").offsetWidth, // Adjust end value
//             scrub: 1,
//         }
//     });
// });

$(document).ready(function () {
  const cards = gsap.utils.toArray(".cardInner");
  const spacer = 50;
  const minScale = 0.8;

  const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

  cards.forEach((card, index) => {

    const scaleVal = distributor(index, cards[index], cards);

    const tween = gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: `top top`,
        scrub: true,
        invalidateOnRefresh: true
      },
      ease: "",
      scale: scaleVal
    });

    ScrollTrigger.create({
      trigger: card,
      start: `top-=${index * spacer} top`,
      endTrigger: '.cardsWrapper',
      end: `bottom top+=${10 + (cards.length * spacer)}`,
      pin: true,
      pinSpacing: false,
      id: 'pin',
      invalidateOnRefresh: true,
    });
  });



  gsap.to("#slider-container", {
    x: () => "-50%",
    duration: 5,
    ease: "linear",
    repeat: -1,
  });
});