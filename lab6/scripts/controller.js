let button = document.getElementById("guess-button");
button.addEventListener("click",buttonEvent);
function buttonEvent(){
	let number = guess.toString();
	gurssNumber(number)
}
	let up100s = document.getElementById("digits-100s");
	let up10s = document.getElementById("digits-10s");
	let up1s = document.getElementById("digits-1s");

	up100s.addEventListener("click",function(){ incrementEvent("hundreds")});
	up10s.addEventListener("click",function(){ incrementEvent("tens")});
	up1s.addEventListener("click",function(){ incrementEvent("ones")});

	function incrementEvent(key){
		guess.increment(key);
		printDigits();
	}
