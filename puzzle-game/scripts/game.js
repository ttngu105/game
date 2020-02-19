let passcode = Math.floor(Math.random()*1000);
let tries  = 10;
while(tries > 0 && guess != passcode){
	console.log("you have "+tries+"guesses left");
	let guess = prompt("Guess a number:");
	tries--;
	if(guess == passcode){
		console.log("you win !!!! you got it in "+tries+" guesses");
	}
	else if(tries == 0){
		console.log("you lost ;-; the number was " +passcode);
	}
	else{
		console.log("WRONG! Try again.")
	}
}
