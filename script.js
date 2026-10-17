
"use strict";

// ========================================
// BIRTHDAY PROTOCOL — DARSHIKA EDITION
// ========================================

const $ = (selector) => document.querySelector(selector);

const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========================================
// SCREEN 1 — FAKE HACKER LOADER
// ========================================

const bootMessages = [
  "[ OK ] Initializing birthday protocol...",
  "[ OK ] Connecting to birthday database...",
  "[ OK ] Scanning suspicious levels of bakchodi...",
  "[ OK ] Detecting birthday girl...",
  "[ OK ] Loading 21 years of questionable decisions...",
  "[ OK ] Installing extra drama detector...",
  "[ OK ] Birthday surprise located.",
  "[ OK ] Awaiting identity verification."
];

const bootLogs = $("#boot-logs");
const progressFill = $("#progress-fill");
const loadingPercent = $("#loading-percent");
const loadingStatus = $("#loading-status");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runBootSequence() {
  for (let i = 0; i < bootMessages.length; i++) {
    const line = document.createElement("div");
    line.className = "log-line";
    line.textContent = bootMessages[i];

    if (i === bootMessages.length - 1) {
      line.classList.add("success");
    }

    bootLogs.appendChild(line);

    const progress = Math.round(((i + 1) / bootMessages.length) * 100);

    progressFill.style.width = `${progress}%`;
    loadingPercent.textContent = `${String(progress).padStart(2, "0")}%`;

    if (progress >= 100) {
      loadingStatus.textContent = "SYSTEM READY";
    }

    await wait(420);
  }

  await wait(650);
  showScreen("username-screen");
}

runBootSequence();

// ========================================
// SCREEN 2 — USERNAME
// ========================================


 // ========================================
 // SCREEN 2 — USERNAME
 // ========================================

const usernameForm = $("#username-form");
const usernameInput = $("#username");
const usernameError = $("#username-error");

usernameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Ignore capitalization and repeated spaces
  const enteredName = usernameInput.value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  const correctName = "darshika shrivastav";

  if (enteredName === correctName) {
    usernameError.textContent = "";
    showScreen("dob-screen");
  } else {
    usernameError.textContent =
      "ACCESS DENIED. BIRTHDAY GIRL BANNE KI ACTING MAT KAR. 💀";
  }
});


// ========================================
// SCREEN 3 — DATE OF BIRTH
// ========================================

const dobForm = $("#dob-form");
const dobInput = $("#dob");
const dobError = $("#dob-error");

dobInput.addEventListener("input", () => {
  let digits = dobInput.value.replace(/\D/g, "").slice(0, 6);

  if (digits.length > 4) {
    digits = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  } else if (digits.length > 2) {
    digits = `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }

  dobInput.value = digits;
});

dobForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const enteredDOB = dobInput.value.trim();

  if (enteredDOB !== "13/11/05") {
    dobError.textContent =
      "WRONG DOB. Apni birthday bhi bhool gayi, bhondu? 😭";
    return;
  }

  dobError.textContent = "";
  showScreen("age-screen");
});

// ========================================
// SCREEN 4 — AGE SELECTION
// ========================================

const ageForm = $("#age-form");
const ageSelect = $("#age");
const ageError = $("#age-error");

ageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (ageSelect.value !== "21") {
    ageError.textContent =
      "DOB SE MATCH NAHI KAR RAHA. Ek baar dimaag laga le. 💀";
    return;
  }

  ageError.textContent = "";
  showScreen("confirm-screen");
});

// ========================================
// SCREEN 5 — FINAL CONFIRMATION
// ========================================

const confirmYes = $("#confirm-yes");
const confirmNo = $("#confirm-no");
const confirmError = $("#confirm-error");

confirmYes.addEventListener("click", async () => {
  confirmYes.disabled = true;
  confirmYes.textContent = "VERIFYING MATURITY LEVEL...";

  await wait(1000);

  confirmError.textContent = "MATURITY NOT FOUND. AGE CONFIRMED ANYWAY. 😂";

  await wait(1100);

  showScreen("celebration-screen");
  launchConfetti();
});

confirmNo.addEventListener("click", () => {
  confirmError.textContent =
    "ACHHA JI? DOB AUR AGE DONO CHECK KAR. 😂";

  confirmNo.textContent = "OKAY, DOBARA CHECK KARO ↻";

  confirmNo.onclick = () => {
    confirmYes.disabled = false;
    confirmYes.textContent = "HAAN BHAI, PAKKA! 😤";
    confirmError.textContent = "";
    confirmNo.textContent = "NAHI, DOBARA CHECK KARO";

    showScreen("dob-screen");
    dobInput.focus();
  };
});

// ========================================
// SCREEN 6 — CONFETTI
// ========================================

const confettiContainer = $("#confetti-container");

const confettiColors = [
  "#f52b50",
  "#ffcf40",
  "#ff8b42",
  "#7b2638",
  "#ffffff",
  "#ff9eb5"
];

function launchConfetti() {
  confettiContainer.replaceChildren();

  for (let i = 0; i < 85; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor =
      confettiColors[Math.floor(Math.random() * confettiColors.length)];

    piece.style.animationDelay = `${Math.random() * 2.2}s`;
    piece.style.animationDuration = `${2.8 + Math.random() * 2}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    if (Math.random() > 0.5) {
      piece.style.borderRadius = "50%";
    }

    confettiContainer.appendChild(piece);
  }
}

// ========================================
// NEXT STAGE — CAKE PAGE (COMING NEXT)
// ========================================

/* ==========================================
   SCREEN 7 — CAKE REVEAL & INTERACTIONS
========================================== */

const cakeScreen = $("#cake-screen");
const cakePlaceholder = $("#cake-placeholder");
const cakeScene = $("#cake-scene");
const cakeStatus = $("#cake-status");

const revealCakeButton = $("#reveal-cake-button");
const blowCandlesButton = $("#blow-candles-button");
const cutCakeButton = $("#cut-cake-button");
const cakeNextButton = $("#cake-next-button");

let cakeHasAppeared = false;
let candlesAreOut = false;
let cakeHasBeenCut = false;

// Birthday celebration → cake screen
$("#continue-button").addEventListener("click", () => {
  showScreen("cake-screen");
});

// Cake appears only after clicking the button
revealCakeButton.addEventListener("click", () => {
  if (cakeHasAppeared) return;

  cakeHasAppeared = true;

  cakePlaceholder.classList.add("hidden");
  cakeScene.classList.add("visible");

  revealCakeButton.classList.add("hidden");
  blowCandlesButton.classList.remove("hidden");

  cakeStatus.textContent =
    "CAKE MIL GAYA! Ab wish maang le, jaldi. 🎂";
});

// Blow out candles
blowCandlesButton.addEventListener("click", () => {
  if (!cakeHasAppeared || candlesAreOut) return;

  candlesAreOut = true;

  cakeScene.classList.add("candles-out");
  blowCandlesButton.disabled = true;
  blowCandlesButton.textContent = "WISH ACCEPTED ✓";

  cakeStatus.textContent =
    "Wish maang li? Achha. Ab cake kaat, bhookhad. 😭";

  setTimeout(() => {
    blowCandlesButton.classList.add("hidden");
    cutCakeButton.classList.remove("hidden");
  }, 700);
});

// Cut the cake
cutCakeButton.addEventListener("click", async () => {
  if (!candlesAreOut || cakeHasBeenCut) return;

  cakeHasBeenCut = true;
  cutCakeButton.disabled = true;

  cakeScene.classList.add("cut-complete");

  cakeStatus.textContent =
    "CAKE CUT SUCCESSFUL! Ab party ki jagah gift khol. ❤️";

  cutCakeButton.textContent = "CAKE CUT HO GAYA ✓";

  await wait(1300);

  cutCakeButton.classList.add("hidden");
  cakeNextButton.classList.remove("hidden");
});

cakeNextButton.addEventListener("click", () => {
  showScreen("letter-screen");
});


/* ==========================================
   SCREEN 8 — OPEN THE BIRTHDAY LETTER
========================================== */

const letterEnvelope = $("#letter-envelope");
const openLetterButton = $("#open-letter-button");
const birthdayLetter = $("#birthday-letter");

let letterIsOpen = false;

openLetterButton.addEventListener("click", async () => {
  if (letterIsOpen) return;

  letterIsOpen = true;
  openLetterButton.disabled = true;
  openLetterButton.textContent = "OPENING YOUR LETTER... 💌";

  letterEnvelope.classList.add("opened");

  await wait(550);

  birthdayLetter.classList.remove("hidden");
  openLetterButton.classList.add("hidden");

  birthdayLetter.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});


/* ==========================================
   FEVIGUM-STYLE STAMP — REVEAL THE ROAST
========================================== */

const fevigumStamp = $("#fevigum-stamp");
const stampMessage = $("#stamp-message");
const finalGift = $("#final-gift");

let stampHasBeenPressed = false;

fevigumStamp.addEventListener("click", async () => {
  if (stampHasBeenPressed) return;

  stampHasBeenPressed = true;

  // Physical stamp-press effect
  fevigumStamp.classList.add("stamped");
  fevigumStamp.disabled = true;
  fevigumStamp.setAttribute("aria-label", "Birthday message unlocked");

  fevigumStamp.querySelector(".stamp-main").textContent = "UNLOCKED!";

  await wait(250);

  // Reveal the teddy investigation report
  stampMessage.classList.remove("hidden");

  stampMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Unlock the final heartfelt note after the roast
  await wait(1700);

  finalGift.classList.remove("hidden");

  finalGift.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
