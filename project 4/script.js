// Get references to the elements
const messageInput = document.getElementById("message-input");
const messageOutput = document.getElementById("message-output");
const submitButton = document.getElementById("btn");


submitButton.addEventListener("click", getMessage);

function getMessage() {
    const message = messageInput.value;
    console.log(message.length);
    messageOutput.textContent = message;
}
