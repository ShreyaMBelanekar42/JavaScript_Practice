const quote = document.getElementById("quote");
const author = document.getElementById("author");
const new_quote = document.getElementById("new_quote");
const quoteUrl = "https://api.quotable.io/random";

async function getData(url) {
  const response = await fetch(url);
  let data = await response.json();
//   console.log(data);

  quote.innerHTML = `"${data.content}"`;
  author.innerHTML = `- ${data.author}`;
}

getData(quoteUrl);
