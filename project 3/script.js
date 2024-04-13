import quotesData from "./quotes.js";



document.getElementById("btn").addEventListener("click", generateRandomQuote);
var quotextex = document.getElementById("quoteText");
var authorElement = document.getElementById("author");

function generateRandomQuote() {
    var index = Math.floor(Math.random() * quotesData.length);
    var quote = quotesData[index].quote;
    var author = quotesData[index].author;

    quotextex.textContent = quote;
    authorElement.textContent = author;
}
generateRandomQuote();