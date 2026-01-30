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
    setTimeout(() => petal.remove(), 5200);
  }
}

/* --- YES behavior (use art-only screen OR text screen) --- */
yesBtn.addEventListener("click", () => {
  // Big initial burst
  sakuraBurst(40);

  setTimeout(() => {
    // Switch to art-only heart screen
   document.body.innerHTML = `
      <div class="yes-screen" id="yesScreen">
        <div class="yes-text">LET’S GOOOOOOOOOOO</div>
      </div>
    `;
    
    // Continuous gentle petals while the heart is showing
    const intervalId = setInterval(() => sakuraBurst(6), 450);

    // Stop after 12 seconds (so it doesn’t run forever)
    setTimeout(() => clearInterval(intervalId), 12000);
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
