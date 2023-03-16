
var p1=Math.random();
var p2=Math.random();
p1= Math.floor(p1*6);
p2=Math.floor(p2*6);
p1++;p2++;
// p1=6;
// p2=6;
// alert(p1);
// alert(p2);
if(p1>p2){
    document.querySelector("h1").textContent="Player 1 wins";
}else if(p1<p2){
    document.querySelector("h1").textContent="Player 2 wins";
}else{
    document.querySelector("h1").textContent="DRAW";
}
if(p1===1){
   var x= document.querySelectorAll(".ci1,.ci2,.ci3,.ci5,.ci6,.ci7");
   for(var i=0;i<x.length;i++){
    x[i].classList.add("vis");
   }
}else if(p1===2){
    var x=document.querySelectorAll(".ci4,.ci2,.ci3,.ci5,.ci6");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p1===3){
    var x=document.querySelectorAll(".ci2,.ci3,.ci5,.ci6");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p1===4){
    var x=document.querySelectorAll(".ci3,.ci5,.ci4");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p1===5){
    var x=document.querySelectorAll(".ci3,.ci5");
    for(var i=0;i<x.length;i++){
        x[i].classList.add("vis");
    }
}else{
    var x=document.querySelectorAll(".ci4");
    for(var i=0;i<x.length;i++){
        x[i].classList.add("vis");
    }

}
if(p2===1){
   var x= document.querySelectorAll(".ci8,.ci9,.ci10,.ci12,.ci13,.ci14");
   for(var i=0;i<x.length;i++){
    x[i].classList.add("vis");
   }
}else if(p2===2){
    var x=document.querySelectorAll(".ci9,.ci10,.ci11,.ci12,.ci13");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p2===3){
    var x=document.querySelectorAll(".ci9,.ci10,.ci12,.ci13");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p2===4){
    var x=document.querySelectorAll(".ci10,.ci11,.ci12");
    for(var i=0;i<x.length;i++){
     x[i].classList.add("vis");
    }
}else if(p2===5){
    var x=document.querySelectorAll(".ci10,.ci12");
    for(var i=0;i<x.length;i++){
        x[i].classList.add("vis");
    }
}else{
    var x=document.querySelectorAll(".ci11");
    for(var i=0;i<x.length;i++){
        x[i].classList.add("vis");
    }

}