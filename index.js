
var random1=Math.random();

random1=random1*6;
random1=Math.floor(random1)+1;

var randomdiceimage="images/dice" + random1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);

var random2=Math.random();

random2=random2*6;
random2=Math.floor(random2)+1;

var randomdiceimage2="images/dice" + random2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);
if(random1>random2)
{
   document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(random1<random2)
{
       document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
         document.querySelector("h1").innerHTML="Draw";
}
