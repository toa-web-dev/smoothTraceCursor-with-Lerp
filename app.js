const $cursor = document.createElement("div");
$cursor.id = "cursor";
document.body.appendChild($cursor);

let startX = innerWidth / 2,
    startY = innerHeight / 2,
    mouseX = innerWidth / 2,
    mouseY = innerHeight / 2,
    alpha = 0.15;
const lerp = (s, e, a) => {
    return s + (e - s) * a;
};
const setCursurPoint = (x, y) => {
    $cursor.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) `;
};

window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
const frame = () => {
    requestAnimationFrame(frame);
    startX = lerp(startX, mouseX, alpha);
    startY = lerp(startY, mouseY, alpha);
    setCursurPoint(startX, startY);
};
requestAnimationFrame(frame);
