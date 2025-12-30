const targetDate = new Date(Date.now() + 10000).getTime();

const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");
const photos = document.querySelectorAll(".photo");
const animatedText = document.querySelectorAll(".animate-text");

content.style.display = "none";

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);

    /* 1️⃣ Fade out contador */
    lock.classList.add("fade-out");

    setTimeout(() => {
      lock.style.display = "none";

      /* 2️⃣ Mostrar contenido */
      content.style.display = "block";

      requestAnimationFrame(() => {
        content.classList.add("show");
      });

      /* 3️⃣ Texto entra primero */
      setTimeout(() => {
        animatedText.forEach(el => el.classList.add("visible"));
      }, 400);

      /* 4️⃣ Fotos entran después */
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

/* Movimiento suave de fotos en scroll */
window.addEventListener("scroll", () => {
  photos.forEach((photo, i) => {
    const dir = i % 2 === 0 ? 1 : -1;
    photo.style.transform =
      `translateY(${window.scrollY * 0.02 * dir}px)`;
  });
});
