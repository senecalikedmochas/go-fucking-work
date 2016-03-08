var quotes = [
  "GO FUCKING WORK.",
  "TICK TOCK. FUCKING WORK.",
  "REMEMBER WORK? FUCKING DO IT.",
  "FUCKING WORK. NOW.",
  "WHAT THE FUCK? GO WORK.",
  "WORK YOU FUCKITY FUCK.",
  "GO LOOK AT THE FUCKING SKY IF YOU NEED A BREAK.",
  "STOP WASTING TIME AND WORK."
];

function getQuote () {
  return quotes[Math.floor(Math.random() * (quotes.length-1))];
}

function setQuote() {
  document.querySelector("#quote").textContent = getQuote();
}

window.onload = setQuote;