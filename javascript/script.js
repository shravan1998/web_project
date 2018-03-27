var timer;
var hour;
var minute;
var second;
function start() {
	timer = setInterval(function(){
		hour = parseInt(document.getElementById("hour"));
		minute = parseInt(document.getElementById("minute"));
		second = parseInt(document.getElementById("second"));
		document.getElementById("timer").innerHTML = hour + ":" + minute + ":" +second--;
		},1000);
	}
function stop(){
	document.getElementById("timer").innerHTML = "00:00:00";
	}