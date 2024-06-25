document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight; // Make the canvas cover the entire scrollable area
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const numStars = 500;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            alpha: Math.random()
        });
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFFFFF'; // Star color
        ctx.beginPath();
        for (const star of stars) {
            ctx.globalAlpha = star.alpha;
            ctx.moveTo(star.x, star.y);
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        }
        ctx.fill();
    }

    function animateStars() {
        for (const star of stars) {
            star.y += 0.5;
            if (star.y > canvas.height) {
                star.y = 0;
            }
        }
        drawStars();
        requestAnimationFrame(animateStars);
    }

    animateStars();
});
