const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="text-align:center; margin-top:40vh;">
      🌹 LET'S GOOOOOOO  😁🌹
    </h1>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

