const quortbox = document.getElementById("box");
const btn = document.getElementById("btn");
const author = document.getElementById("aut");
const apiKey = "EJ1NF5p1yyWviFwSUYtQdg==xayfeWvD8AiGw7wU";

let getQuort = () => {
    const category = document.getElementById("text").value.trim(); // Trim to remove leading/trailing whitespace
    if (!category) {
        quortbox.innerHTML = "Please enter a category.";
        author.innerHTML = "Please enter a category.";
        return;
    }

    const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;

    fetch(url, {
        method: "GET",
        headers: {
            'X-Api-Key': apiKey,
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        quortbox.innerHTML = data[0].quote;
        author.innerHTML = data[0].author;

    }).catch(error => {
        console.error('Error fetching quote:', error);
        quortbox.innerHTML = "An error occurred. Please try again later.";
    });
}

btn.addEventListener("click", getQuort);
