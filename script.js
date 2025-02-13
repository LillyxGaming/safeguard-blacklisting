// Fix Background Animation
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];

for (let i = 0; i < 50; i++) {
    lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 2 + 1
    });
}

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "cyan";
    ctx.lineWidth = 1.5;

    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.stroke();

        line.x += line.speed;
        if (line.x > canvas.width) {
            line.x = -line.length;
        }
    });

    requestAnimationFrame(drawLines);
}

drawLines();

// Fade-in Effect for Info & Stats Boxes
const fadeElements = document.querySelectorAll('.info-box, .stats-box');

fadeElements.forEach(element => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
});

// Counter Effect for Stats Boxes
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let current = 0;
    let increment = target / 100;

    function updateCounter() {
        if (current < target) {
            current += increment;
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
});

const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
setTimeout(() => {

button.classList.add('fade-in');
}, 500);
});
