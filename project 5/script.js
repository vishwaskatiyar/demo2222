const plus = document.getElementById("positive");
const minus = document.getElementById("negative");
const countElement = document.getElementById("count");

plus.addEventListener("click", addNumber);
minus.addEventListener("click", subtractNumber);

function addNumber() {

    var number = parseInt(countElement.textContent);


    countElement.innerHTML = number + 1;
}

function subtractNumber() {


    var number = parseInt(countElement.textContent);
    countElement.innerHTML = number - 1;
}
