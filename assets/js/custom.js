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

  function cardsPin() {
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
      // end:+=${10 + (cards.length * spacer)}
      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: '.cardsWrapper',
        end: `center top`,
        pin: true,
        pinSpacing: false,
        id: 'pin',
        invalidateOnRefresh: true,
      });
    });
  }
  cardsPin()

  function runTextSlider() {
    gsap.to("#slider-container", {
      x: () => "-50%",
      duration: 15,
      ease: "linear",
      repeat: -1,
    });
  }

  runTextSlider();
});