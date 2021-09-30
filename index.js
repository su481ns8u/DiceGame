var randomNumber1 = getRandomDiceVal();
var randomNumber2 = getRandomDiceVal();

var img1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", img1);

var img2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", img2);

document.querySelector("h1").textContent = getWinner(randomNumber1, randomNumber2);

function getRandomDiceVal() {
    return Math.floor(Math.random() * 6) + 1;
}

function getWinner(pla1, pla2) {
    if (pla1 > pla2) 
        return "🚩 Player 1 wins!";
    else if (pla1 < pla2)
        return "Player 2 wins! 🚩";
    else 
        return "Draw!!!";
}