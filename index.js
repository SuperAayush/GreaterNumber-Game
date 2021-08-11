var toChange=Math.floor((Math.random()*6)+1);
var change=document.querySelector(".container1 .nothin1").innerHTML=toChange;
var yes = Math.floor((Math.random()*6)+1);
var changed = document.querySelector(".nothin").innerHTML=yes;
if(toChange>yes)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(toChange<yes)
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML="DRAW";
}
