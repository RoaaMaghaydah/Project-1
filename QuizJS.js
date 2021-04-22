
const body1=document.querySelector("body")

const quastion=document.createElement("div");
quastion.innerHTML = "";
quastion.id="div1";
quastion.style.color="green";
body1.append(quastion);



let array_quastion=["q1hhhhhhhhhhhhh","q2ddddddd","q3","q4","tttttttttt"];

 const func_quadtion=()=>{

     if(array_quastion.length!==0){
     document.getElementById("div1").innerHTML="";
     const quastion_f=document.createElement("p");
     quastion_f.innerHTML=array_quastion[0];
     quastion_f.id="quastion_f";
     quastion_f.style.color="red";
     quastion.append(quastion_f);
     array_quastion.splice(0,1)
    // array_quastion=array_quastion.slice(1);
     }
     }

     button1=document.createElement("button")
     button1.id="button";
     button1.innerText="Next";
     button1.style.height="40px";
     button1.style.width="60px";
     body1.append(button1);


     document.getElementById("button").addEventListener("click" ,function(){
     return func_quadtion();
   })

