
const body=document.querySelector("body")

const quastion=document.createElement("div");
quastion.innerHTML = "";
quastion.id="div1";
body.append(quastion);

const array_quastion=["q1","q2","q3","q4"];

 const func_quadtion=()=>{
     if(array_quastion.length!==0)
    const quastion_f=document.createElement("p");
    quastion.innerHTML=array_quastion[0];
    quastion.append(quastion_f);
    array_quastion=array_quastion.slice(1);

     }


     button1=document.createElement("button")
     button1.id="button";
     button1.innerText="Add";
     body.append(button1);

     document.getElementById("button").addEventListener("click" ,function(){
     return func_quadtion();
   })

