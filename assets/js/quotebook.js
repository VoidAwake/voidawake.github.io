const quotes = [
  "Human beings feel like a game is fair when they win 70% of the time.",
  "Life may be short but it's still the longest thing you'll ever do.",
  "Any sufficiently advanced technology is indistinguishable from magic.",
  "Either you seize what may turn out to be the only chance you have, or you decide you're willing to live with the knowledge that the chance has passed you by.",
  "If the universe is so big, then why wont it fight me?",
  "Climb the mountain you enjoy climbing, not the one that looks good from the top.",
  "Everything is a world unto itself.",
  "Reading computing papers from the 50s, 60s, and 70s is like digging in an archeological site and finding a sonic screwdriver.",
  "There is no trade-off of quality vs. speed in software. The only way to go fast is to go well.",
  "OO makes code understandable by encapsulating moving parts. FP makes code understandable by minimizing moving parts.",
  "There is no algorithm for truth.",
  "Failing to succeed does not mean failing to progress.",
  "Good architectures allow major architectural decisions to be deferred.",
  "Only a sith deals in absolutes.",
  "If you’re not paying for the product, you are the product.",
  "'Does not stack' is the worst sentence in game design. The second worst sentence is 'does not work on bosses'.",
  "If you can't get out of it, get into it.",
  "Black lives matter.",
  "Anything worth doing twice is worth automating."
]

let elementOuter = document.getElementById('quotebookOuter')



let prevQuoteIndex = -1;

function refreshQuote () {
  let quoteIndex = -1;

  while (quoteIndex == prevQuoteIndex) {
    quoteIndex = Math.floor(Math.random() * quotes.length)
  }

  // Retrigger animation https://css-tricks.com/restart-css-animation/
  // elementOuter.classList.remove("transition")
  // void elementOuter.offsetWidth
  // elementOuter.classList.add("transition")
  const newOuter = elementOuter.cloneNode(true)
  elementOuter.parentNode.replaceChild(newOuter, elementOuter)
  elementOuter = newOuter


  const button = document.getElementById('quoteRefreshButton')

  button.addEventListener("click", () => refreshQuote())

  const elementInner = document.getElementById('quotebookInner')

  elementInner.innerHTML = "\"" + quotes[quoteIndex] + "\""

    elementOuter.classList.add("transition")
}

refreshQuote()
