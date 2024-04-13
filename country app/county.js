let searchBtn = document.getElementById("btn");
let countryInp = document.getElementById("countryName");
let resultDiv = document.getElementById("result"); // Reference to the result div

let getdetails = () => {
    let countryName = countryInp.value;
    let Url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(Url);
    fetch(Url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Check if data is returned
            if (data.length > 0) {
                // Extract information
                let countryData = data[0];
                let capital = countryData.capital[0];
                let flag = countryData.flags.svg;
                let currencyData = countryData.currencies.INR; // Assuming INR currency data is available
                let currencyName = currencyData.name;
                let currencySymbol = currencyData.symbol;

                // Create HTML elements to display information
                let infoHTML = `
                    <p>Capital: ${capital}</p>
                    <img src="${flag}" alt="Flag">
                    <p>Currency: ${currencyName} (${currencySymbol})</p>
                `;

                // Set innerHTML of result div
                resultDiv.innerHTML = infoHTML;
            } else {
                resultDiv.innerHTML = "Country not found";
            }
        })
        .catch((error) => {
            console.error('Error fetching country data:', error);
            resultDiv.innerHTML = "An error occurred. Please try again later.";
        });
}

searchBtn.addEventListener("click", getdetails);
