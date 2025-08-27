const canvas = document.getElementById("patternCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

//speed
function randomSpeed(min = 0.2, max = 0.5) {
  let speed = Math.random() * (max - min) + min;
  return Math.random() < 0.5 ? -speed : speed;
}

// Parameters
const numCircles = 5;      // Number of moving bullseyes
const ringThickness = 4;    // Thickness of each black ring
const maxRadius = 300;      // Maximum radius of bullseye

// Create moving circles
let circles = [];
for (let i = 0; i < numCircles; i++) {
  let r = maxRadius * Math.random() * 0.5 + maxRadius*0.5;
  circles.push({
    x: Math.random() * (canvas.width - 2*r) + r, // fully inside canvas
    y: Math.random() * (canvas.height - 2*r) + r,
    dx: randomSpeed(), // ensures noticeable movement
    dy: randomSpeed(),
    r: r
  });
}

// Draw bullseye with rings all the way to the center
function drawBullseye(x, y, radius, rings, thickness) {
  const spacing = radius / rings; // dynamic spacing to fill center
  for (let i = 0; i < rings; i++) {
    ctx.beginPath();
    let r = radius - i * spacing;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }
}

// Animate circles
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let c of circles) {
    c.x += c.dx;
    c.y += c.dy;

    // bounce off edges
  if (c.x - c.r < 0) { c.dx *= -1; c.x = c.r; }
  if (c.x + c.r > canvas.width) { c.dx *= -1; c.x = canvas.width - c.r; }
  if (c.y - c.r < 0) { c.dy *= -1; c.y = c.r; }
  if (c.y + c.r > canvas.height) { c.dy *= -1; c.y = canvas.height - c.r; }


    drawBullseye(c.x, c.y, c.r, ringsPerCircle, ringThickness);
  }

  requestAnimationFrame(animate);
}

animate();
