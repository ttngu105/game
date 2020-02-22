let passcode = Math.floor(Math.random() *1000);
let tries = 10;

function guessNumber(guess){
	tries--;
	if (guess == passcode}{
	printGameOver("WIN");
	}
	else if(tries<=0){
	printGameOver("LOSE");
	}