//caculate two random numbers between 1-6 both inclusive


//dice 1
var rn1 =  Math.floor(Math.random()*6)+1;
//images are named as dice1----6.png
var randomImage1 = "dice"+rn1+".png";
//defining the source path of images
var randomSource1 = "images/"+randomImage1;
//changing the images
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSource1);


//dice 2
var rn2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice"+rn2+".png";
var randomSource2 = "images/" + randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSource2);
//document.querySelectorAll("img")[1].setAttribute("src", randomSource2);



//winner code
if(rn1 > rn2)
{
	document.querySelector("h1").innerHTML="PLayer 1 wins 🚩️";
}
else if(rn2 > rn1)
{
	document.querySelector("h1").innerHTML="PLayer 2 wins 🚩️";
}
else
{
	document.querySelector("h1").innerHTML="It is a Draw ☮️";
}
