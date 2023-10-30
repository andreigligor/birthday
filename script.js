function createConfetti() {
  const confettiContainer = document.querySelector(".confetti-container");
  const confettiColors = [
    "#f0e68c",
    "#ff7f50",
    "#90ee90",
    "#87ceeb",
    "#ff69b4",
  ]; // Customize your confetti colors

  for (let i = 0; i < 50; i++) {
    // Adjust the number of confetti pieces as needed
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Vary animation duration
    confetti.style.animationDelay = Math.random() * 2 + "s"; // Vary animation delay
    confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";

    confettiContainer.appendChild(confetti);
  }
}

createConfetti();
