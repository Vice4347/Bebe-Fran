/* ===============================
   CUENTA REGRESIVA (10 SEGUNDOS)
=============================== */
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");
const photos = document.querySelectorAll(".photo");
const animatedText = document.querySelectorAll(".animate-text");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);

    lock.classList.add("fade-out");

    setTimeout(() => {
      lock.style.display = "none";
      content.style.display = "block";

      requestAnimationFrame(() => {
        content.classList.add("show");
      });

      setTimeout(() => {
        animatedText.forEach(el => el.classList.add("visible"));
      }, 400);

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
}, 1000);

/* Movimiento suave al hacer scroll */
window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * dir}px)`;
  });
});


const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");
const photos = document.querySelectorAll(".photo");
const animatedText = document.querySelectorAll(".animate-text");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);

    lock.classList.add("fade-out");

    setTimeout(() => {
      lock.style.display = "none";
      content.style.display = "block";

      requestAnimationFrame(() => {
        content.classList.add("show");
      });

      setTimeout(() => {
        animatedText.forEach(el => el.classList.add("visible"));
      }, 400);

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
}, 1000);

/* ===============================
   MOVIMIENTO SUAVE DE FOTOS
=============================== */
window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * dir}px)`;
  });
});

/* ===============================
   REPRODUCTOR DE MÚSICA (BOTÓN)
=============================== */
const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    playBtn.textContent = "▶ Reproducir música";
  }
});
