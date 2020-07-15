const scrollerCard = document.getElementById('scroller');

let currentX = 0;
let currentY = 0;

function scroll() {
    if (currentX === 14) {
        currentX = 0;
        currentY += 1;

        if (currentY === 5) {
            currentY = 0;
        }
    }

    if (currentY === 4 && currentX == 1) {
        currentX = 13;
    }

    scrollerCard.style.setProperty('--card-x', currentX);
    scrollerCard.style.setProperty('--card-y', currentY);
    currentX++;
}

scroll();
setInterval(scroll, 1000);
