
      const body1=document.querySelector("body")

      const quastion=document.createElement("div");
      quastion.innerHTML = "";
      quastion.id="div1";
      quastion.style.color="green";
      body1.append(quastion);



      let array_quastion=["quastion_1","quastion_2","quastion_3","quastion_4"];
      let option_a=["a:1","a:2","a:3","a:4"];
      let option_b=["b:1","b:2","b:3","b:4"];
      let option_c=["c:1","c:2","c:3","c:4"];
      let option_d=["d:1","d:2","d:3","d:4"];
      let correct_answer=["a:1","c:2","d:3","b:4"];


      const eee=document.querySelector("#cloud")
      const option_1=document.querySelector("#cloud_1")
      const option_2=document.querySelector("#cloud_2");
      const option_3=document.querySelector("#cloud_3");
      const option_4=document.querySelector("#cloud_4");
     



      const quastion_f=document.createElement("p");
      quastion_f.innerHTML=array_quastion[0];
      quastion_f.id="quastion_f";
      eee.append(quastion_f);
      array_quastion.splice(0,1)


      const func_quadtion=()=>{
      if(array_quastion.length!==0){
      document.getElementById("cloud").innerHTML="";
      const quastion_f=document.createElement("p");
      quastion_f.innerHTML=array_quastion[0];
      quastion_f.id="quastion_f";
      eee.append(quastion_f);
      array_quastion.splice(0,1)
     }}

      option_1.innerHTML=option_a[0];
      //option_a.splice(0,1)
     
      const option_A=()=>{
      if(option_a.length!==0){
      document.getElementById("cloud_1").innerHTML="";
      option_1.innerHTML=option_a[0];
      //option_a.splice(0,1)
    } }

    option_2.innerHTML=option_b[0];
   // option_b.splice(0,1)
    const option_B=()=>{
    if(option_b.length!==0){
    document.getElementById("cloud_2").innerHTML="";
    option_2.innerHTML=option_b[0];
    //option_b.splice(0,1)
  } }

  option_3.innerHTML=option_c[0];
  //option_c.splice(0,1)
  const option_C=()=>{
  if(option_c.length!==0){
  document.getElementById("cloud_3").innerHTML="";
  option_3.innerHTML=option_c[0];
  //option_c.splice(0,1)
} }


  option_4.innerHTML=option_d[0];
 // option_d.splice(0,1)
  const option_D=()=>{
  if(option_d.length!==0){
  document.getElementById("cloud_4").innerHTML="";
  option_4.innerHTML=option_d[0];
  //option_d.splice(0,1)
  }}

  const correct_A=()=>
{
    console.log(option_a);
    if(option_a[0]===correct_answer[0]){
        console.log("wiiin");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)

    }
    else {
        console.log("lost");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)
    }
}

const correct_B=()=>
{
    console.log(option_b);
    if(option_b[0]===correct_answer[0]){
        console.log("wiiin");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)

    }
    else {
        console.log("lost");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)
    }
}

const correct_C=()=>
{
    console.log(option_c);
    if(option_c[0]===correct_answer[0]){
        console.log("wiiin");
      correct_answer.splice(0,1)
      option_a.splice(0,1)
      option_b.splice(0,1)
      option_c.splice(0,1)
      option_d.splice(0,1)
    }
    else {
        console.log("lost");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)
    }
}

const correct_D=()=>
{
    console.log(option_d);
    if(option_d[0]===correct_answer[0]){
        console.log("wiiin");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)
    }
    else {
        console.log("lost");
        correct_answer.splice(0,1)
        option_a.splice(0,1)
        option_b.splice(0,1)
        option_c.splice(0,1)
        option_d.splice(0,1)
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
   
    document.getElementById("button").addEventListener("click" ,function(){
    return option_A();})
   
   document.getElementById("button").addEventListener("click" ,function(){
    return option_B();})

    document.getElementById("button").addEventListener("click" ,function(){
    return option_C();})

    document.getElementById("button").addEventListener("click" ,function(){
    return option_D();})

