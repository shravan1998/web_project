var difference;
var h;
var m;
var s;

function start()
{
	if(document.getElementById("start").innerHTML == "START")
		{
			document.getElementById("start").innerHTML = "PAUSE";
			document.getElementById("start").src = "images/pause.png";
			difference=1;
			var timer = setInterval(function()										/*Timer to update information and perform operations every 1 second*/
			{
				
				
		
				if(difference>0)
				{
				acceptTime();
				difference--;
				h = Math.floor(difference/(60*60));                  			  /*To Round Hour to lowest integer value*/
				m = Math.floor((difference/60-h*60));							  /*To Round Minute to lowest integer value*/
				s = Math.floor((difference-h*60*60-m*60));						  /*To Find Seconds Remaining*/
				document.getElementById("SOSC").innerHTML ="Counting down...";
				document.getElementById("hour").value = h;
				document.getElementById("hour").disabled = true;
				document.getElementById("minute").value = m;
				document.getElementById("minute").disabled = true;
				document.getElementById("second").value = s;	
				document.getElementById("second").disabled = true;
				
				}

				if(difference==0)
				{
					clearInterval(timer);										  /*To Stop Timer when countdown is complete*/
				     
					document.getElementById("hour").disabled = false;	
					document.getElementById("minute").disabled = false;
					document.getElementById("second").disabled = false;

					document.getElementById("start").innerHTML = "START";
				}
				if(difference<0)
				{
					document.getElementById("hour").value = 00;	
					document.getElementById("minute").value = 00;	
					document.getElementById("second").value = 00;

					document.getElementById("hour").disabled = false;
					document.getElementById("minute").disabled = false;
					document.getElementById("second").disabled = false;
				}
				
			},1000);
		}
	else if (document.getElementById("start").innerHTML == "PAUSE") 
	{	
		document.getElementById("start").innerHTML = "START";
		difference=0;
		document.getElementById("SOSC").innerHTML ="PAUSED";
		

	}
	
}

function reset()																/*Function to stop countdown and set input boxes to 0:0:0*/
{
		difference=0;
		document.getElementById("hour").value = 00;	
		document.getElementById("minute").value = 00;	
		document.getElementById("second").value = 00;

		document.getElementById("hour").disabled = false;
		document.getElementById("minute").disabled = false;
		document.getElementById("second").disabled = false;

		
}

function acceptTime()														/*Function To Receive the countdown time remaining from input boxes*/
{	h=(document.getElementById("hour").value);
	m=document.getElementById("minute").value;
	s=document.getElementById("second").value;
	if(s >= 60 && m >= 60) {
		document.getElementById("second").value = 00;
		document.getElementById("minute").value = 00;
		alert("Invalid");
		document.getElementById("start").innerHTML="START";
		difference=0;
		document.getElementById("hour").disabled = false;
		document.getElementById("minute").disabled = false;
		document.getElementById("second").disabled = false;
		}
		
	difference = Math.round((document.getElementById("hour").value))*60*60 + Math.round((document.getElementById("minute").value))*60 + Math.round((document.getElementById("second").value));

}