// ==============================
// CONTADOR
// ==============================
const targetDate = new Date(Date.now() + 10000).getTime();


const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    lock.style.display = "none";
    content.classList.remove("hidden");
    clearInterval(timer);
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
// ANIMACIÓN DE FOTOS AL SCROLL
// ==============================
const photos = document.querySelectorAll(".photo");

window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * (i % 2 === 0 ? 1 : -1)}px) scale(1)`;
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

photos.forEach(photo => observer.observe(photo));


// ==============================
// REPRODUCTOR DE MÚSICA (SEGURO)
// ==============================
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("music");

if (playBtn && audio) {
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().catch(err => {
        console.log("Error al reproducir audio:", err);
      });
      playBtn.innerText = "⏸ Pausar música";
    } else {
      audio.pause();
      playBtn.innerText = "▶ Reproducir música";
    }
  });
}
