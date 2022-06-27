$(document).ready(function(){
  document.getElementById('timerBox').innerHTML  ="00:00";
  let m=$("#stime").val()-1;
  let s=60;
  let pomo;
  let breaktime;
  let beep=document.getElementById('beep'); 
  
  $("#start").click(function(){
    breaktime=false;
    if(m===24 && s===60|| m===44 && s===60|| m=== 59 && s===60){
      m=$("#stime").val()-1;
      s=60;
    }
    function countdown(){
     
      if(parseInt(s)>0){
          s--;
         s=add0(s);
         document.getElementById('timerBox').innerHTML  = m+ ":" +s;
      }
      else if(parseInt(s) == 0 && parseInt(m) >0){
          m--;
          m=add0(m);
         s=add0(s);
         s= parseInt(s) +60;
         s--;
         document.getElementById('timerBox').innerHTML  = m+ ":" +s;
      }
      else{
          clearInterval(pomo);
          beep.play();
          if(breaktime ==false){
            document.getElementById('timerBox').innerHTML  = "Break Time"; 
            breaktime=true;
            m=$("#btime").val()-1;
            s=60;
            setTimeout(countdown,5000);
            pomo = setInterval(countdown,1000);
          }
          else{
            document.getElementById('timerBox').innerHTML  = "Back to Work"; 
            breaktime=false;
            m=$("#stime").val()-1;
            s=60;
            setTimeout(countdown,5000);
            pomo = setInterval(countdown,1000);
          }
           
      }
      
      }
     
    function add0(i){
      if(i < 10){i = "0" + parseInt(i)};
      return i
  }
    pomo= setInterval(countdown,1000); 
    });

    $("#pause").click(function(){
      clearInterval(pomo); 
    })

    $("#clear").click(function(){
      clearInterval(pomo);
      document.getElementById('timerBox').innerHTML  ="00:00";
      m=$("#stime").val()-1;
      s=60;
    });
  
});  

//This is my clock

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

