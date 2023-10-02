const quotes = [
  [
    "Human beings feel like a game is fair when they win 70% of the time.",
    "https://www.youtube.com/watch?v=8uE6-vIi1rQ"
  ],
  [
    "Life may be short but it's still the longest thing you'll ever do.",
    "https://www.youtube.com/watch?v=n64SFhebVr0"
  ],
  [
    "Any sufficiently advanced technology is indistinguishable from magic.",
    "https://en.wikipedia.org/wiki/Clarke%27s_three_laws"
  ],
  [
    "Either you seize what may turn out to be the only chance you have, or you decide you're willing to live with the knowledge that the chance has passed you by.",
    "https://en.wikipedia.org/wiki/A_Promised_Land"
  ],
  [
    "If the universe is so big, then why wont it fight me?",
    "https://www.youtube.com/watch?v=O5BJVO3PDeQ"
  ],
  [
    "Climb the mountain you enjoy climbing, not the one that looks good from the top.",
    "https://en.wikipedia.org/wiki/The_Subtle_Art_of_Not_Giving_a_F*ck"
  ],
  [
    "Everything is a world unto itself.",
    "https://www.relay.fm/cortex"
  ],
  [
    "Reading computing papers from the 50s, 60s, and 70s is like digging in an archeological site and finding a sonic screwdriver.",
    "https://twitter.com/fogus/status/1135987780557950978"
  ],
  [
    "There is no trade-off of quality vs. speed in software. The only way to go fast is to go well.",
    "https://twitter.com/unclebobmartin/status/1163789159309434880"
  ],
  [
    "OO makes code understandable by encapsulating moving parts. FP makes code understandable by minimizing moving parts.",
    "https://twitter.com/mfeathers/status/29581296216"
  ],
  [
    "There is no algorithm for truth.",
    "https://www.youtube.com/watch?v=leX541Dr2rU"
  ],
  [
    "Failing to succeed does not mean failing to progress.",
    ""
  ],
  [
    "Good architectures allow major architectural decisions to be deferred.",
    "https://www.youtube.com/watch?v=o_TH-Y78tt4"
  ],
  [
    "Only a sith deals in absolutes.",
    "https://en.wikipedia.org/wiki/Star_Wars:_Episode_III_%E2%80%93_Revenge_of_the_Sith"
  ],
  [
    "If you’re not paying for the product, you are the product.",
    ""
  ],
  [
    "'Does not stack' is the worst sentence in game design. The second worst sentence is 'does not work on bosses'.",
    "https://www.youtube.com/watch?v=AkkywuaRKWM"
  ],
  [
    "If you can't get out of it, get into it.",
    ""
  ],
  [
    "Black lives matter.",
    "https://blacklivesmatter.com/"
  ],
  [
    "Anything worth doing twice is worth automating.",
    ""
  ]
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

  elementInner.innerHTML = "\"" + quotes[quoteIndex][0] + "\""

  elementInner.href = quotes[quoteIndex][1]

  elementOuter.classList.add("transition")
}

refreshQuote()
