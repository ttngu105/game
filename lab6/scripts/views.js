function printAttemptsRemaining(tries){
	let attemptsText = document.getElementById("attempts");
	attemptsText.innerHTML =  `snumber of attempts left: ${tries}`
}
function printClue(status,guess){
	let clueText = document.getElementById("clue");
	let clue = status== 'HI' ? `<li>${guess} is to high</li>`:`<li>${guess} is to low</li>`
	clueText.innerHTML +=clue;
}
function printGameOver(status){
	if(status === 'WIN'){
		var message = `<h1>You Win !!!</h1><p>Got it in ${10-tries} tries</p>`;
	}
	else{
		var message = `<h1>You Lose ;-;</h1><p>The number was ${passcode}</p>`
	}
	document.body.innerHTML = message;
}
function printDigits(){
	document.getElementById("digits-100s").value = guess.hundreds;
	document.getElementById("digits-10s").value = guess.tens;
	document.getElementById("digits-1s").value = guess.ones;
}