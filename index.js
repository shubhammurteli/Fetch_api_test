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
  function interval(){
    ran = Math.floor(Math.random()*quotes.length)
    document.getElementById('quote').innerHTML = `${quotes[ran].quote}`;
    document.getElementById('author').innerHTML = `- ${quotes[ran].author}`;
  };
  interval();
  setInterval(interval, 5000);
}
quotesPrint()
