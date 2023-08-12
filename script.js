const lines = document.querySelectorAll('.intro .line');
let delay = 0;

lines.forEach(line => {
    setTimeout(() => {
        line.classList.add('visible');
    }, delay);
    delay += 1800;
});
