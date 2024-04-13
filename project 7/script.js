setInterval(function () {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    document.querySelector(".clock").innerHTML = currentTime;
}, 1000);

