const getData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = quote => {
    const quoteArea = document.getElementById('quote-area');
    quoteArea.innerText = `${quote.quote}`
}
