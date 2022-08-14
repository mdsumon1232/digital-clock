function time(){
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let second = d.getSeconds();
    if(hours==0){
        hours=12;
    }
    else if(hours>0){
        hours=hours-12;
    }
    
    let clock = hours+":"+minutes+":"+second;
    document.getElementById("colck").innerHTML=clock;
    if(hours=>12){
        document.getElementById("ap").innerHTML="PM";
    }
   else if(hours=>0){
    document.getElementById("ap").innerHTML="AM";
   }   
}
setInterval(time, 1000);


