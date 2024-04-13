const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result-box");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("inp-word").value;
    console.log(inputWord);
    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {

            console.log(data);
            result.innerText = `${data[0].word} - ${data[0].meanings[0].definitions[0].definition}`;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            // Display error message if necessary
            result.innerText = "An error occurred. Please try again later.";
        });
});
