const seal = document.getElementById("seal");
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");
const music = document.getElementById("music");

if (seal) {
  seal.addEventListener("click", () => {

    intro.style.display = "none";
    contenido.style.display = "block";

    if (music) {
      music.play().catch(() => {
        console.log("La reproducción automática fue bloqueada.");
      });
    }

  });
}

const countdown = document.getElementById("countdown");

const targetDate = new Date("July 18, 2026 00:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = targetDate - now;
  if (distance < 0) {
  if (countdown) {
    countdown.innerHTML = "¡Llegó el gran día!";
  }
  return;
}

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (countdown) {
    countdown.innerHTML =
      days + " días " +
      hours + " horas " +
      minutes + " minutos " +
      seconds + " segundos";
  }
}

updateCountdown();
setInterval(updateCountdown, <script>
const intro = document.getElementById("intro");
const contenido = document.getElementById("contenido");
const seal = document.getElementById("seal");
const music = document.getElementById("music");

seal.addEventListener("click", () => {
  // Animación del sobre
  seal.style.transform = "scale(1.3) rotate(-3deg)";
  seal.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    contenido.style.display = "block";

    // efecto carta
    contenido.classList.add("aparecer-carta");

    // música
    if (music) {
      music.play().catch(() => {});
    }

    // scroll suave al abrir
    window.scrollTo({ top: 0, behavior: "smooth" });

  }, 700);
});
</script>

