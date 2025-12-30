/* ==============================
   FECHA OBJETIVO
============================== */
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

/* ==============================
   ELEMENTOS
============================== */
const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");
const photos = document.querySelectorAll(".photo");

/* ==============================
   OCULTAR CONTENIDO AL INICIO
============================== */
content.style.display = "none";

/* ==============================
   CONTADOR
============================== */
const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);

    // Ocultar bloqueo
    lock.style.display = "none";

    // Mostrar contenido
    content.style.display = "block";

    // Activar animación de fotos
    photos.forEach(photo => {
      photo.classList.add("visible");
    });

    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    `${days} días<br>${hours} horas ${minutes} min ${seconds} seg`;
}, 1000);

/* ==============================
   ANIMACIÓN SUAVE EN SCROLL
============================== */
window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    const direction = i % 2 === 0 ? 1 : -1;
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * direction}px)`;
  });
});

/* ==============================
   APARICIÓN PROGRESIVA (SCROLL)
============================== */
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
