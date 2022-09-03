let btn = document.getElementById('DayNight');
let msg = document.getElementById('msg');

btn.addEventListener('click',function(){
	let day = new Date().getHours();
	let text = '';

	if (day<6) {
		text = "Good Morning!";
	}else if (day<12) {
		text = "Good Day!";
	}else if (day<18) {
		text = "Good Afternoon!";
	}else if(day<20){
		text = "Good Evening";
	}
	else{
		text="Good Night";
	}
	document.getElementById('msg').innerHTML = text;
});


