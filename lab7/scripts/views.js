function printAttemptsRemaining(tries){
	let attemptsText = document.getElementById("attempts");
	attemptsText.innerHTML = `time left: ${timeleft}`;
}
function printClue(status,guess){
	let [digit100,digits10,digit1] = status == 'HI' ?['H','I','-'] :['L','O','-'];
	document.getElementById("digits-100s").src = `./images/${digit100}.png`;
	document.getElementById("digits-10s").src = `./images/${digits10}.png`;
	document.getElementById("digits-1s").src = `./images/${digit1}.png`;
	then = Date.now();
}
function printGameOver(status){
	if(status === 'WIN'){
		var message = `<h1>You Win !!!</h1><p>Got it in ${30-timeleft} seconds</p>`;
	}
	else{
		var message = `<h1>You Lose ;-;</h1><p>The number was ${passcode}</p>`
	}
	document.body.innerHTML = message;
}
function printDigits(){
	document.getElementById("digits-100s").src = `./images/${guess.hundreds}.png`;
	document.getElementById("digits-10s").src = `./images/${guess.tens}.png`;
	document.getElementById("digits-1s").src = `./images/${guess.ones}.png`;
}