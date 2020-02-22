/*Generate one random number between 1 to 20
Now take input from the user as number 
if both match user input generated number
user win else user loose*/

var $numb1 = Math.round((Math.random()*(20-1))+1);
var _num2 = prompt('Enter a number inbetween 1 to 20');

if($numb1==_num2) {
    alert("Congrats😅 You Won!");
}
else {
    alert('Lose 🙄! Try Again');
}