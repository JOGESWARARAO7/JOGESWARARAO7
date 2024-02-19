function submit(){
    var ema=document.getElementById("a").value.trim();
    var email=ema.length;
    if(email==0 || email==" ")
    {
        document.getElementById("a").style.border="3px solid red"
    }
    else if(email>=0 && email<7)
    {
        document.getElementById("a").style.border="3px solid red"
    }
    else if(email>=8)
    {
        document.getElementById("a").style.border="3px solid green"
    }
}