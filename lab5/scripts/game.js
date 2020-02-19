let passcode = Math.floor(Math.random()*1000);
let tries  = 10;
var guess;
while(tries > 0 && guess != passcode){
	console.log("you have "+tries+"guesses left");
	guess = prompt("Guess a number:");
	tries--;
	if(guess == passcode){
		console.log("you win !!!! you got it in "+tries+" guesses");
	}
	else if(tries == 0){
		console.log("you lost ;-; the number was " +passcode);
	}
	else{
		clue();
	}
}

function clue(guess){
	if(guess > passcode){
		console.log(guess + "it is to high");
	}
	else{
		console.log(guess + "it is to low");
	}
}
