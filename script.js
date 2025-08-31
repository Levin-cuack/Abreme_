// Generador dinámico de luciérnagas
const firefliesContainer = document.getElementById('fireflies');

for (let i = 0; i < 40; i++) {
    const firefly = document.createElement('div');
    firefly.classList.add('firefly');

    firefly.style.left = Math.random() * window.innerWidth + 'px';
    firefly.style.top = Math.random() * window.innerHeight + 'px';
    firefly.style.animationDuration = 10 + Math.random() * 10 + 's';

    firefliesContainer.appendChild(firefly);
}
// Boton para activar la musica
const music =
    document.getElementById("bg-music");
    const playBtn =
    document.getElementById("play-btn");
    playBtn.addEventListener("click" , () => {
        music.play();
        play.Btn.style.display =
    "none"; //ocultar el boton despues de activar
    });

