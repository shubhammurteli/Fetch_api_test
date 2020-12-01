async function getQuotes() {
  let url = 'Quotes_file.json';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function quotesPrint() {
  var quotes = await getQuotes();
  let ran = Math.floor(Math.random()*quotes.length)
  let quote = document.getElementById('quote').innerHTML = `${quotes[ran].quote}`;
  let author = document.getElementById('author').innerHTML = `- ${quotes[ran].author}`;
}
quotesPrint()
