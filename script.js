// ==============================
// CONTADOR
// ==============================
const targetDate = Date.now() + 10000; // 10 segundos

const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");

const animatedText = document.querySelectorAll(".animate-text");
const photos = document.querySelectorAll(".photo");

function updateCountdown() {
  const now = Date.now();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);

    // Fade out del lock
    lock.classList.add("fade-out");

    setTimeout(() => {
      lock.style.display = "none";

      // Mostrar contenido
      content.style.display = "block";

      requestAnimationFrame(() => {
        content.classList.add("show");
      });

      // Animar textos
      setTimeout(() => {
        animatedText.forEach(el => el.classList.add("visible"));
      }, 400);

      // Animar fotos
      setTimeout(() => {
        photos.forEach(photo => photo.classList.add("visible"));
      }, 900);

    }, 1200);

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    `${days} días<br>${hours} horas ${minutes} min ${seconds} seg`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();


// ==============================
// MOVIMIENTO SUAVE AL SCROLL
// ==============================
window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * dir}px) scale(1)`;
  });
});


// ==============================
// REPRODUCTOR DE MÚSICA
// ==============================
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("music");

if (playBtn && audio) {
  playBtn.addEventListener("click", async () => {
    try {
      if (audio.paused) {
        await audio.play();
        playBtn.textContent = "⏸ Pausar música";
      } else {
        audio.pause();
        playBtn.textContent = "▶ Reproducir música";
      }
    } catch (e) {
      console.error("Error reproduciendo audio:", e);
    }
  });
}
