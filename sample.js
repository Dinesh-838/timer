
function btnClick(){
        // To get selected hour
       var hours=document.getElementById('hr');
       var hrText=hours.options[hours.selectedIndex].text;
   
       // To get selected Minutes
       var minutes=document.getElementById('min');
       var minText=minutes.options[minutes.selectedIndex].text;
   
       // To get selected Seconds
       var seconds=document.getElementById('sec');
       var secText=seconds.options[seconds.selectedIndex].text;


       var timeInSeconds = (hrText * 60 * 60) +
        (minText * 60) +
        (secText*1);

        // console.log(timeInSeconds);

        var displayTime = () => {
            var displayHours = Math.floor(timeInSeconds / (60 * 60));
            var remainder = timeInSeconds - (displayHours * 60 * 60);
            var displayMinutes = Math.floor(remainder / 60);
            var displaySeconds = remainder - (displayMinutes * 60);
            document.getElementById("msg").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
        };
        interval = setInterval(() => {
            displayTime();
            timeInSeconds -= 1;
            if (timeInSeconds < 0) {
                clearInterval(interval);
                document.getElementById('msg').innerHTML="Timer Terminated";
            }
        }, 1000);
    
     
}
