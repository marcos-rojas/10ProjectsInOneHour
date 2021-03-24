

const container = document.getElementById('container');
const img = document.querySelector('img');

container.addEventListener('mousemove', function (event) {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

document.addEventListener('mouseout', function (event) {
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
});
