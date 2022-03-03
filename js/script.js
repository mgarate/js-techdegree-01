/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

  @author: Marcel Garate <marcel.garate@bd.zh.ch>
  
******************************************/

/*** 
 * GLOBAL CONSTANTS
***/

// Array of quote-Objects
const quotes = [
  {
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: "2016"
  },
  {
    quote: "To be forgotten too is to die a little. It is to lose some of the links that anchor us to the rest of humanity.",
    source: "Aung San Suu Kyi",
    citation: "Nobel Peace Prize Acceptance Speech",
    year: "2012",
    profession: "Politician"
  },
  {
    quote: "The fight is here; I need ammunition, not a ride.",
    source: "Volodymyr Zelenskyy",
    year: "2022",
    profession: "Politician"
  },
  {
    quote: "Here the ways of men part: if you wish to strive for peace of soul and pleasure, then believe; if you wish to be a devotee of truth, then inquire.",
    source: "Friedrich Nietzsche",
    citation: "Letter to Elisabeth Nietzsche",
    year: "1865",
    profession: "Philosopher"
  },
  {
    quote: "We depict hatred, but it is to depict that there are more important things. We depict a curse, to depict the joy of liberation.",
    source: "Hayao Miyazaki",
    citation: "Proposal for Princess Mononoke",
    profession: "Animation director"
  },
  {
    quote: "Creation is a bird without a flight plan, that will never fly in a straight line.",
    source: "Violeta Parra",
    profession: "Musician"
  }
];

// Array of predefined colors
const colors = ["tomato", "cornflowerblue", "cornsilck", "darksalmon", "firebrick", "mediumpurple"];


/*** 
 * FUNCTIONS
***/

/***
 * `getRandomQuote` function
 *  Randomly chooses and returns a quote-Object from quotes[]
 *  @return {object} quotes[]
***/
function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * 6);
  return quotes[randomNumber];
}

/***
 * `getRandomColor` function
 *  Randomly chooses and returns a color-string from colors[]
 *  @return {string} colors[]
***/
function getRandomColor() {
  const randomNumber = Math.floor( Math.random() * 6);
  return colors[randomNumber];
}

/***
 * `printQuote` function
 *  
***/
function printQuote() {

  // Chooses a **new** random quote
  do {var randomQuote = getRandomQuote(); console.log(randomQuote)}
  while (randomQuote["quote"] == document.body.querySelector(".quote").textContent);

  // Start of string to be inserted into class="container"
  let htmlString = `<div id="quote-box" class="quote-box">
  <p class="quote">${randomQuote["quote"]}</p>
  <p class="source">${randomQuote["source"]}`;

  // Conditional additions to htmlString dependent on available keys in quote-Object
  if (randomQuote["profession"]) {htmlString += `<span class="profession">${randomQuote["profession"]}</span>`}
  if (randomQuote["citation"]) {htmlString += `<span class="citation">${randomQuote["citation"]}</span>`}
  if (randomQuote["year"]) {htmlString += `<span class="year">${randomQuote["year"]}</span>`}

  // End of string to be inserted into class="container"
  htmlString += `</p>\n</div>`;

  // Chooses a **new** random color
  do {var randomColor = getRandomColor(); console.log(randomColor)}
  while (randomColor == document.body.style.backgroundColor);

  // Inserts the generated random quote and background color
  document.body.querySelector(".container").innerHTML = htmlString;
  document.body.style.backgroundColor = randomColor
}


/*** 
 * BODY
***/

// Timer to call function printQuote() every 5 seconds
setInterval(printQuote, 5000)

// EventListener for the button #load-quote to call function printQuote()
document.getElementById('load-quote').addEventListener("click", printQuote, false);