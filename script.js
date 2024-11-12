function locomotiveJS() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function homePageAnimation() {
    gsap.set(".slidingrow", { scale: 7 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    })

    tl
        .to(".videodiv", {
            '--clip': "2.2%",
            ease: Power2
        }, 'a')
        .to(".videodiv", {
            opacity: 0,
            duration: 0.2,
            ease: Power2
        }, 'a+=0.5') // Adjust timing as needed
        .to(".slidingrow", {
            scale: 1,
            ease: Power2
        }, 'a')
        .to(".lft", {
            xPercent: -20,
            stagger: 0.03,
            ease: Power2
        }, 'b')
        .to(".rgt", {
            xPercent: 20,
            stagger: 0.03,
            ease: Power2
        }, 'b')
}

function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: '.real',
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -300,
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listlem")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (details) {
                gsap.to(this.querySelector(".picture"), { opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, details.clientX), y: gsap.utils.mapRange(0, window.innerHeight, -100, 100, details.clientY), scale: 1.4, ease: Power4, duration: 0.2 }),
                    gsap.to(this.querySelector(".bluelayer"), { height: "100%" })
            })
            el.addEventListener("mouseleave", function (details) {
                gsap.to(this.querySelector(".picture"), { opacity: 0, scale: 1, ease: Power4, duration: 0.2 }),
                    gsap.to(this.querySelector(".bluelayer"), { height: "0%" })

            })
        });
}

function paragraphAnimation1() {
    var clutter = ""
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter
    gsap.set(".textpara span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".paragraphs",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4
    })
}

function paragraphAnimation2() {
    var clutter2 = ""
    document.querySelector(".textpara2")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter2 += `<span>&nbsp;</span>`
            clutter2 += `<span>${e}</span>`
        })
    document.querySelector(".textpara2").innerHTML = clutter2
    gsap.set(".textpara2 span", { opacity: .1 })
    gsap.to(".textpara2 span", {
        scrollTrigger: {
            trigger: ".textpara2",
            start: "top 50%",
            end: "bottom 60%",
            scrub: 1
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4
    })
}

function paragraphAnimation3() {
    var clutter3 = ""
    document.querySelector(".textpara3")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter3 += `<span>&nbsp;</span>`
            clutter3 += `<span>${e}</span>`
        })
    document.querySelector(".textpara3").innerHTML = clutter3
    gsap.set(".textpara3 span", { opacity: .1 })
    gsap.to(".textpara3 span", {
        scrollTrigger: {
            trigger: ".textpara3",
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4
    })
}

function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "-10% 80%",
            end: "90% 90%",
            scrub: 1
        },
        marginBottom: "-2rem",
        ease: Power2
    })
}

function themeColorChange() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "100% 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                }
            })
        })
}

function realImageOpacity() {
    gsap.to(".img1", {
        scrollTrigger: {
            trigger: ".teamopaa", // The section beneath the image
            start: "top center", // When the top of the next section hits the center of the viewport
            end: "bottom center", // When the bottom of the next section hits the center of the viewport
            scrub: 2 // Smooth scrubbing effect for gradual fading
        },
        opacity: 0, // Fade out to invisibility
        ease: Power2,
        markers: true
    });
}

function scrollingCard() {
    // Select all cards
    document.querySelectorAll(".card").forEach((card, index) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 60%", // When the top of the card reaches the center of the viewport
                end: "bottom top", // When the top of the card scrolls out of the viewport
                toggleClass: { targets: card, className: "active" }, // Adds/removes the 'active' class
                markers: false, // Set to true for debugging markers
                scrub: true, // Tied to scroll position for smooth effect
                toggleActions: "play none none reverse" // Keeps the class until you scroll back up
            }
        });
    });
}

function letterAnimation() {
    document.querySelectorAll('.animated-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            // Create an animation timeline for hover-in
            let hoverOutTimeline = gsap.timeline();
            hoverOutTimeline.to(button.querySelectorAll('.letter'), {
                y: -20, // Moves each letter up
                opacity: 0, // Fades out each letter
                stagger: 0.02, //  each letter animation
                duration: 0.01,
                ease: "power1.out"
            });

            // Create an animation timeline for hover-out (letters coming from below)
            hoverOutTimeline.to(button.querySelectorAll('.letter'), {
                y: 20, // Start from below
                opacity: 0, // Ensure opacity is 0 before starting
                stagger: 0.02, //  the return animation
                duration: 0, // No delay between sequences
                ease: Power4
            });

            hoverOutTimeline.to(button.querySelectorAll('.letter'), {
                y: 0, // Moves each letter back to its original position
                opacity: 1, // Fades in each letter
                stagger: 0.02, //  animation for letters coming back
                duration: 0.01,
                ease: "power1.out"
            });
        });
    });
}

function craftTextAnimation() {
    gsap.fromTo(
        ".crafttextword",
        { y: 100, opacity: 0 }, // Initial state (below and invisible)
        {
            y: 0,                // End state (at original position)
            opacity: 1,          // Fully visible
            duration: 0.3,       // Adjust for the speed of the animation
            stagger: 0.04,        // Stagger for wave effect
            ease: "power2.out",  // Smooth easing for natural movement
            scrollTrigger: {
                trigger: ".crafttext", // The element to watch
                start: "top 80%",           // When to start the animation
                end: "bottom top",
                toggleActions: "play none none none" // Control playback
            }
        }
    );
}

function realTextAnimation() {
    gsap.fromTo(
        ".realtextword",
        { y: 100, opacity: 0 }, // Initial state (below and invisible)
        {
            y: 0,                // End state (at original position)
            opacity: 1,          // Fully visible
            duration: 0.3,       // Adjust for the speed of the animation
            stagger: 0.04,        // Stagger for wave effect
            ease: "power2.out",  // Smooth easing for natural movement
            scrollTrigger: {
                trigger: ".realtext", // The element to watch
                start: "top 80%",           // When to start the animation
                end: "bottom top",
                toggleActions: "play none none none" // Control playback
            }
        }
    );
}

function svgAnimation() {
    const paths = document.querySelectorAll('.significosvg');

    gsap.from(paths, {
        scrollTrigger: {
            trigger: ".bottombottom",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: .4,
        ease: Power2
    });

}

function counterInReal() {
    // Counter animation logic
    gsap.fromTo("#counter",
        { innerText: 16.3 }, // Starting value
        {
            scrollTrigger: {
                trigger: "#counter",
                start: "top 80%", // Adjust this to control when the animation starts
                toggleActions: "play none none none",
            },
            duration: 2.5, // Animation duration in seconds
            innerText: 20.4, // The number to count to
            ease: "power2.out",
            onUpdate: function () {
                const counterElement = document.getElementById("counter");
                const value = parseFloat(this.targets()[0].innerText);
                counterElement.innerText = value.toFixed(1); // Format to one decimal place
            }
        }
    );
}

locomotiveJS();
themeColorChange();
homePageAnimation();
scrollingCard();
realAnimation();
realTextAnimation();
craftTextAnimation();
realImageOpacity();
counterInReal();
teamAnimation();
paragraphAnimation1();
paragraphAnimation2();
paragraphAnimation3();
capsulesAnimation();
letterAnimation();
svgAnimation();