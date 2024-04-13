document.getElementById("btn").addEventListener("click", function () {
    var randomcolor = getrandomcolor();
    document.getElementById("btn").style.backgroundColor = randomcolor
    document.body.style.backgroundColor = randomcolor;
    var a = document.getElementById("hex-code").innerHTML = randomcolor;
    // var c = document.querySelector("h1").style.color = getrandomcolor();



})

function getrandomcolor() {
    var letters = "123344454234ABCDE";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color);
    return color;
}