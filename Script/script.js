let apiData = {};

// Fetch quotes
async function fetchQuotes() {
    showLoader()
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    const data = await response.json();
    hideLoader ()
    apiData = data;
  } catch (error) {
    console.log(error);
  }
}

//Generate quote
function randomQuote() {
  const btn = document.querySelector("#new-quote");
  btn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * apiData.length);
    let quote = apiData[randomNum];

    renderQuote(quote);
  });
}

// Render quotes
function renderQuote(data) {
  const quotes = document.querySelector("#quote");
  const authors = document.querySelector("#author");

  quotes.textContent = data.text;

  //  While author name is missing
  if (!data.author) {
    authors.innerText = "Unknown";
  } else {
    authors.innerText = data.author;
  }

  textControl(data);
}

// Tweet quote

function quoteTweet() {
  const twitterBtn = document.querySelector(".twitter-button");
  const quotes = document.querySelector("#quote");
  const authors = document.querySelector("#author");
  twitterBtn.addEventListener("click", () => {
    const urlTwitter = `https://twitter.com/intent/tweet?text=${authors.textContent} - ${quotes.textContent}`;
    window.open(urlTwitter, '_blank')
  });
}

// Control text size if quote is too long

function textControl(data) {
  const textQuote = document.querySelector(".quote-text");
  let textLen = data.text.length;
  if (textLen > 50) {
    textQuote.classList.add("long-text");
  } else {
    textQuote.classList.remove("long-text");
  }
}

// Preloader

function showLoader(){
    const preLoad = document.querySelector(".preloader")
    const container = document.querySelector(".container")
    preLoad.hidden = false;
    container.hidden = true;

}


function hideLoader (){
    const preLoad = document.querySelector(".preloader")
    const container = document.querySelector(".container")
    preLoad.hidden = true;
    container.hidden = false; 
}

function main() {
  fetchQuotes();
  randomQuote();
  quoteTweet()
}
main();
