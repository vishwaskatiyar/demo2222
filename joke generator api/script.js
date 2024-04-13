const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const apiKey = "EJ1NF5p1yyWviFwSUYtQdg==xayfeWvD8AiGw7wU";

let getJoke = () => {

    fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();

        })
        .then(data => {
            jokeContainer.innerHTML = data[0].joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
};

btn.addEventListener("click", getJoke);
getJoke(); // Fetch a joke when the page loads  