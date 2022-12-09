const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const tweet = document.getElementById("tweet");
const next = document.getElementById("next");

let realData = "";
let quoteData = "";
let i = Math.floor(Math.random() * 10);

const tweetnow = () => {
  const url = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
  window.open(url);
};

const getNewQuote = () => {
  i = i + 1;
  quoteData = realData[i];
  quotes.innerText = `${quoteData.text}`;
  quoteData.author == null
    ? (author.innerText = ` - By Unknown`)
    : (author.innerText = ` - By ${quoteData.author}`);
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuote();
  } catch (error) {}
};
tweet.addEventListener("click", tweetnow);
next.addEventListener("click", getNewQuote);
getQuotes();
