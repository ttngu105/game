let passcode = Math.floor(Math.random()*1000);
let tries  = 10;
let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "numberof attempts left: "+tries;
let clueText = document.getElementById("clue");

let button = document.getElementById("guess-button");
let number = document.getElementById("guess-text");
button.addEventListener("click",guessnumber)

function guessnumber(){
	console.log("you have "+tries+" guesses left");
	let guess = number.value;
	tries--;
	if(guess == passcode){
		document.body.innerHTML = "<h1>you win !!!!</h1>"+"<p>you got it in "+tries+" guesses</p>" ;
	}
	else if(tries == 0){
		document.body.innerHTML = "<h1>you lost ;-;</h1>"+"<p>the number was " +passcode+"</p>";
	}
	else{
		attemptsText.innerHTML = "Number of attempts left: "+tries;
		clue(guess);
	}
}

function clue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>"+guess+" is too high!</li>";
	}
	else{
		clueText.innerHTML += "<li>"+guess + " is to low!</li>";
	}
}
