var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

console.log(randomNumber1);
var randomDiceImage="dice" + randomNumber1 + ".png";
console.log(randomDiceImage);
var randomImageSource = "images/" + randomDiceImage; 
console.log(randomImageSource);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource); 

var randomDiceImage2= "dice" + randomNumber2 + ".png";
var randomImagesource2= "images/"+ randomDiceImage2;

var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImagesource2);

if (randomNumber1>randomNumber2){
    document.getElementsByTagName("h3")[0].innerHTML=" Hey it's been months since we were planning for coffee hope this helps the tastiest coffee u will get ha ha yeah ☕☕ ";
}
else if (randomNumber2>randomNumber1){
    document.getElementsByTagName("h3")[0].innerHTML=" 💖 Happy new year beautifull   ";
}