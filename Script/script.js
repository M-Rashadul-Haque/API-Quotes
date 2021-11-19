let apiData = {};

// Fetch quotes
async function fetchQuotes() {
  const url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(url);
    const data = await response.json();
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
  const author = document.querySelector("#author");
  quotes.textContent = data.text;
  author.innerText = data.author;
}

function main() {
  fetchQuotes();
  randomQuote();
}
main();
