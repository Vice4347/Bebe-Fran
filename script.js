const targetDate = new Date("January 1, 2022 00:00:00").getTime();

const countdownEl = document.getElementById("countdown");
const lock = document.getElementById("lock");
const content = document.getElementById("content");

setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
  clearInterval(timer);

  const envelope = document.getElementById("envelope");

  envelope.style.transform = "scale(1.2) translateY(-20px)";
  envelope.style.opacity = "0";

  setTimeout(() => {
    lock.style.display = "none";
    content.classList.remove("hidden");
  }, 1200);

  return;
}


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    days + " días<br>" +
    hours + " horas " +
    minutes + " min " +
    seconds + " seg";
}, 1000);

.letter {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255,255,255,0.15);
  padding: 30px;
  border-radius: 12px;
  line-height: 1.6;
  font-size: 1.1em;
  text-align: left;
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".photo").forEach((photo, i) => {
    const offset = window.scrollY * 0.02 * (i % 2 === 0 ? 1 : -1);
    photo.style.transform = `translateY(${offset}px) rotate(${getComputedStyle(photo).getPropertyValue('--rot')})`;
  });
});
