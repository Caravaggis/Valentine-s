const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* --- Sakura burst (used on YES click) --- */
function sakuraBurst(count = 22) {
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 0.3 + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 1800);
  }
}

/* --- YES behavior (use art-only screen OR text screen) --- */
yesBtn.addEventListener("click", () => {
  // petals first
  sakuraBurst(28);

  // then switch screen (ART-ONLY)
  setTimeout(() => {
    document.body.innerHTML = `<div class="yes-screen"></div>`;
  }, 250);
});

/* --- NO button dodges (mobile-friendly) --- */
noBtn.style.position = "relative";

function moveNoButton(e) {
  if (e) e.preventDefault();

  const x = Math.random() * 240 - 120; // [-120, 120]
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile taps
noBtn.addEventListener("pointerdown", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// If it still gets clicked somehow, move again
noBtn.addEventListener("click", moveNoButton);
