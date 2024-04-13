const btn = document.getElementById('btn');
const displayImage = document.getElementById('displayImage');
const URL = "https://api.thecatapi.com/v1/images/search";

const catImageGenerator = () => {
    fetch(URL)
        .then(response => response.json())
        .then((data) => {
            const image = data[0].url; // Declare 'image' variable
            const img = document.createElement("img");
            img.src = image;
            displayImage.innerHTML = '';
            displayImage.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
            // You can add additional error handling here, such as displaying an error message to the user.
        });

};

btn.addEventListener('click', catImageGenerator);
