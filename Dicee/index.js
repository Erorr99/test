var rndNum1 = Math.floor(Math.random() * 6) + 1
var rndNum2 = Math.floor(Math.random() * 6) + 1

var dice1img = "./image/dice" + rndNum1 + ".png";
var dice2img = "./image/dice" + rndNum2 + ".png";

document.querySelector(".img1").setAttribute("src",dice1img);
document.querySelector(".img2").setAttribute("src",dice2img);   

if(rndNum1 > rndNum2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN!";
}else if(rndNum2 > rndNum1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN!";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}
