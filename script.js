var cursour = document.querySelector("#cursour");
var accordinButton = document.querySelector(".accordin-heading");
document.addEventListener("mousemove", function (dets) {
    gsap.to(cursour, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .5,
        ease: Expo
    })
});


gsap.to("#video video", {
    backgroundColor: "#000",
    duration: 2,
    width: "95%",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -50%",
        end: "top -11%",
        scrub: 3
    }
})
