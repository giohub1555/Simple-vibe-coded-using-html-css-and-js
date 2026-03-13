async function updateCrypto() {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin&vs_currencies=usd";

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("btc").textContent =
    data.bitcoin.usd.toLocaleString();

  document.getElementById("doge").textContent =
    data.dogecoin.usd.toFixed(4);
}