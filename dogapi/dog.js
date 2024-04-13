const image = document.querySelector('#dogimage img');
;
const btn = document.getElementById("btn");
const url = "https://dog.ceo/api/breeds/image/random";


const generateImage = () => {
    fetch(url)
        .then((response) => response.json()) // Call response.json() to parse the response body
        .then((data) => {
            let imgUrl = data.message;
            image.src = data.message;
        })
        .catch((error) => {
            console.error('Error fetching dog image:', error);
        });
}

btn.addEventListener("click", generateImage);