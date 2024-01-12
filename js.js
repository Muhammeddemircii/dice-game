var randomNumber1=Math.floor(Math.random()*6+1)
var randomImageSource="images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6+1);
var randomImageSource="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WİNS";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WİNS";
}else{
    document.querySelector("h1").innerHTML="DRAW";
}