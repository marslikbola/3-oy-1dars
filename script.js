const watches = [
    { image: './Frame 28.png', color: '#f7c08a' },
    { image: './Frame 28 (2).png', color: '#d3d3d3' },
    { image: './Frame 28 (3).png', color: '#7ed957' },
    { image: './Frame 24.png', color: '#ff6f61' }
];
let currentIndex = 0;

function changeWatch(direction) {
    currentIndex = (currentIndex + direction + watches.length) % watches.length;
    document.getElementById('watch-image').src = watches[currentIndex].image;
    document.body.style.background = watches[currentIndex].color;
}