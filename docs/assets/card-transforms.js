const cards = document.querySelectorAll('.card-container');

for (const card of cards) {
    const inner = card.querySelector('.oneq-card');

    // Handles card hover effect - card lifts up, rotates to cursor + gradient at cursor
    inner.addEventListener('mousemove', ev => {
        console.log(ev);
        const target = ev.currentTarget;
        const width = target.offsetWidth;
        const height = target.offsetHeight;

        // Get the pointer coordinates relative to the card.
        const x = ev.pageX - target.offsetLeft;
        const y = ev.pageY - target.offsetTop;

        // Math to calculate how much the card should rotate in each axis
        /*
         * x - width / 2 : subtracts half of the width from the x position, effectively putting the center point in the middle of the card.
         * ans / width : divides the above result by the total width, which makes the number small enough to rotate with.
         * ans * 10 : how much to increase the rotation by. Around 10/15 seems alright, anything 50+ is just absurd.
         */
        const xRot = -((x - width / 2) / width * 15);
        const yRot = (y - height / 2) / height * 15;

        const transformation = `perspective(500px) scale(1.025) rotateX(${yRot}deg) rotateY(${xRot}deg)`;

        inner.style.setProperty('transform', transformation);
    }, { passive: true });

    inner.addEventListener('mouseleave', ev => {
        // Resets rotation vars
        inner.style.setProperty('transform', 'none');
    });
}
