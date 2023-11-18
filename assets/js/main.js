$(document).ready(function () {

    // let brandMainSlider = gsap.utils.toArray(".brandSlide");
    // gsap.to(brandMainSlider, {
    //   xPercent: -100 * (brandMainSlider.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".horizontal-sliders",
    //     pin: ".brandMain",
    //     pinSpacing: true,
    //     scrub: 1,
    //     end: "+=3000",
    //   }
    // });



    const observerSections = gsap.utils.toArray(".observer-section");
    let allowScroll = true;
    let currentSection = 0;
    const sectionIndices = [0, 0];
    const sectionsPanels = [];
    const sectionsLimits = [];
    let lastSectionChangeTime = 0;

    const gotoPanel = (index, isScrollingDown) => {
        const limit = sectionsLimits[currentSection];
        if ((index === limit && isScrollingDown) || (index === -1 && !isScrollingDown)) {
            intentObserver.disable(); // resume native scroll
            return;
        }

        allowScroll = false;
        const target = isScrollingDown
            ? sectionsPanels[currentSection][sectionIndices[currentSection]]
            : sectionsPanels[currentSection][index];

        gsap.to(target, {
            yPercent: isScrollingDown ? -100 : 0,
            duration: 0.75,
            onComplete: () => {
                allowScroll = true;
            },
        });

        sectionIndices[currentSection] = index;
    };

    const intentObserver = ScrollTrigger.observe({
        type: "wheel,touch,scroll",
        onUp: () => allowScroll && gotoPanel(sectionIndices[currentSection] - 1, false),
        onDown: () => allowScroll && gotoPanel(sectionIndices[currentSection] + 1, true),
        tolerance: 10,
        preventDefault: true,
        onEnable(self) {
            allowScroll = false;

            // Calculate dynamic delay based on the time spent in the current section
            const currentTime = new Date().getTime();
            const timeSpentInCurrentSection = currentTime - lastSectionChangeTime;
            const dynamicDelay = Math.max(0, 1000 - timeSpentInCurrentSection);

            gsap.delayedCall(dynamicDelay / 1000, () => {
                allowScroll = true;
                self.scrollY(self.scrollY()); // trigger a scroll to update the ScrollTrigger state
            });
        },
        onDisable: (self) => {
            lastSectionChangeTime = new Date().getTime();
        },
    });
    intentObserver.disable();

    observerSections.forEach((section, i) => {
        const panels = gsap.utils.toArray(".nisho-slide", section);
        sectionsPanels[i] = panels;
        sectionsLimits[i] = panels.length;

        gsap.set(panels, { zIndex: (j) => panels.length - j });

        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "+=200",
            pin: true,
            onEnter: (self) => {
                if (intentObserver.isEnabled) {
                    return;
                }

                if (self.direction === 1 && currentSection < sectionsLimits.length - 1) {
                    currentSection++;
                } else if (self.direction === -1 && currentSection > 0) {
                    currentSection--;
                }

                lastSectionChangeTime = new Date().getTime();
                intentObserver.enable();
            },
            onEnterBack: (self) => {
                if (intentObserver.isEnabled) {
                    return;
                }

                if (self.direction === -1 && currentSection > 0) {
                    currentSection--;
                } else if (self.direction === 1 && currentSection < sectionsLimits.length - 1) {
                    currentSection++;
                }

                lastSectionChangeTime = new Date().getTime();
                intentObserver.enable();
            },
        });
    });




    $('.text3').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='_text3'>$&</span>"));
    });
    var $text3 = $(".text3 span"),
        tl_3 = new TimelineMax({ repeat: -1 });

    tl_3
        .staggerFrom($text3, 0.5, { y: 50, z: 0, ease: Elastic.easeOut.config(1, 0.7) }, 0.08)
        .to($text3, 0.5, { alpha: 0, ease: Power1.easeOut }, '+=1.2');

    const arrowPulseTL = gsap.timeline({ repeat: -1, repeatDelay: .5 });
    arrowPulseTL.to('.img_arrow', { y: 10, duration: .5, repeat: -1, yoyo: true, ease: 'power2.out' });



});
