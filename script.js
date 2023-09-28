"use strict";

let timeline = gsap.timeline({
    defaults: {
        duration: 0.6,
        ease: "linear"
    }
});
let startX, startY, endX, endY;
let portalType = 0;

document.addEventListener("click", function(e) {
    if (portalType === 0) {
        // Create red portals
        startX = e.pageX;
        startY = e.pageY;
        svgContainer.innerHTML += `<image id="r1" x="${startX}" y="${startY}" xlink:href="static/Port2.svg"/>`;
        portalType = 1
    } else {
        timeline.set("#runner", {
            x: startX + 10,
            y: startY + 40
        });

        if (portalType === 2) {
            r.remove();
        }

        // Create blue portals
        endX = e.pageX;
        endY = e.pageY;
        svgContainer.innerHTML += `<image id="r" x="${endX}" y="${endY}" xlink:href="static/Port1.svg"/>`;
        portalType = 2;

        move(0);
    }
}, false);

function move(count) {
    if (count < 10) {
        timeline.to("#runner", {
            x: endX,
            y: endY + 40
        });

        timeline.set("#runner", {
            x: startX + 10,
            y: startY + 40
        });
        count += 1;
        move(count);
    }
}