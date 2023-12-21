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

  function rangeSlider() {
    jQuery('#one').val(jQuery('#lower').val());
    jQuery('#two').val(jQuery('#upper').val());

    jQuery('#lower').on('input', function () {
      jQuery('#one').val(jQuery(this).val());
    });

    jQuery('#upper').on('input', function () {
      jQuery('#two').val(jQuery(this).val());
    });

    jQuery('#one').on('input', function () {
      jQuery('#lower').val(jQuery(this).val());
    });

    jQuery('#two').on('input', function () {
      jQuery('#upper').val(jQuery(this).val());
    });
  }
  rangeSlider();

  function radioBtn() {
    jQuery(".allRadioBtn .allRadioSingle").click(function () {
      jQuery("label.btn").removeClass("active");
      jQuery(this).find("label.btn").toggleClass("active");
    });
    jQuery(".ssdInner .ssdSingle").click(function () {
      jQuery("label.btn").removeClass("active");
      jQuery(this).find("label.btn").toggleClass("active");
    });
    jQuery(".ramInner .ramSingle").click(function () {
      jQuery("label.btn").removeClass("active");
      jQuery(this).find("label.btn").toggleClass("active");
    });
    jQuery(".processorInner .processorSingle").click(function () {
      jQuery("label.btn").removeClass("active");
      jQuery(this).find("label.btn").toggleClass("active");
    });
  }
  radioBtn();

  function slickSliderFun() {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  }
  slickSliderFun();

  function toasterFunc() { 
    $('.toast').toast("show")
   }
   toasterFunc()

});