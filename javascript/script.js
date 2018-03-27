var difference;
var h;
var m;
var s;

/*function update()
{
setInterval(function(){now=now+1;},1000);
}*/

function start()
{	
	var timer = setInterval(function()										/*Timer to update information and perform operations every 1 second*/
	{
		acceptTime();
		document.getElementById("SOSC").innerHTML = "Counting down...";
		if(difference==1)
		{
			clearInterval(timer);										  /*To Stop Timer when countdown is complete*/
		     
		}
		if(difference!=0)
		difference--;
		h = Math.floor(difference/(60*60));                  			  /*To Round Hour to lowest integer value*/
		m = Math.floor((difference/60-h*60));							  /*To Round Minute to lowest integer value*/
		s = Math.floor((difference-h*60*60-m*60));						  /*To Find Seconds Remaining*/

		document.getElementById("hour").value = h;
		document.getElementById("minute").value = m;
		document.getElementById("second").value = s;	
		if(difference < 0){
		document.getElementById("hour").value = 00;
		document.getElementById("minute").value = 00;
		document.getElementById("second").value = 00;
		}
	},1000);
	
}

function stop()																/*Function to stop countdown and set input boxes to 0:0:0*/
{
		document.getElementById("hour").value = 00;
		document.getElementById("minute").value = 00;
		document.getElementById("second").value = 00;	
}

function acceptTime()														/*Function To Receive the countdown time remaining from input boxes*/
{	h=(document.getElementById("hour").value);
	difference = Math.round((document.getElementById("hour").value))*60*60 + Math.round((document.getElementById("minute").value))*60 + Math.round((document.getElementById("second").value));

}