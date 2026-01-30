const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES behavior (keep yours or customize)
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="text-align:center; margin-top:40vh;">
      🌹 Let's GOOOOOOOOOO
        You just made me very happy 🌹
    </h1>
  `;
});

// Make sure transforms behave consistently
noBtn.style.position = "relative";

function moveNoButton(e) {
  // Prevent the tap from also "clicking" the button on mobile
  if (e) e.preventDefault();

  // Stronger movement range so it actually feels like it dodges on phones
  const x = Math.random() * 240 - 120; // [-120, 120]
  const y = Math.random() * 240 - 120; // [-120, 120]
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile + modern devices
noBtn.addEventListener("pointerdown", moveNoButton);

// Extra safety for some mobile browsers
noBtn.addEventListener("touchstart", moveNoButton, { passive: false });

// If someone still manages to click it, move again
noBtn.addEventListener("click", moveNoButton);
