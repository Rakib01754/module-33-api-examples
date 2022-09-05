const getData = () => {
    const url = 'https://restcountries.com/v3.1/all'
    fetch(url)
        .then(res => res.json())
        .then(countries => displayData(countries))
}
const displayData = (countries) => {
    countries.forEach(country => {
        const countryContainer = document.getElementById('country-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <h2>${country.name.common}</h2>
            <button onclick="countryDetails('${country.name.common}')">Details</button>
        `
        countryContainer.appendChild(newDiv);
    });
}
const countryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(countryDetails => displayDetails(countryDetails[0]))
}
const displayDetails = (countryDetails) => {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <h3>Country Name: ${countryDetails.name.common}</h3>
    <h4>Capital:${countryDetails.capital[0]}</h4>
    <h4>Region:${countryDetails.region}</h4>
    <img src="${countryDetails.flags.png}" alt="">
    `
    detailsContainer.appendChild(newDiv);



}
