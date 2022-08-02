var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var imgs = new Array("images\\dice1.png","images\\dice2.png","images\\dice3.png",
                    "images\\dice4.png", "images\\dice5.png", "images\\dice6.png");
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
img1.setAttribute("src", imgs[randomNumber1]);
img2.setAttribute("src", imgs[randomNumber2]);
console.log(img2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML  = "Player 1 Wins :D";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML  = "Player 2 Wins :D";
} else {
    document.querySelector("h1").innerHTML  = "Its a Draw:(";
}