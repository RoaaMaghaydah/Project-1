
      const body1=document.querySelector("body")

      const quastion=document.createElement("div");
      quastion.innerHTML = "";
      quastion.id="div1";
      quastion.style.color="green";
      body1.append(quastion);

     //////////////////////////////////////////////////
     
      let array_quastion=["==> ( 4 , 8 , 16 , ? )"," `6=30`    `3=15`   ` 7=35`  `2=??` ","==> ( 4 , 11, 18 , ?? )",
      "==>(1783 , 3178 , 8317 , ???) " ,"`83=40`    `27=12`   ` 19=8`  `91=?`", "`4,2=36`  `3,7=100`  `5,4=81`  `1,6=?`", "`3,6=27`  `5,2=17`  `4,1=9`  `2,7=?`",
     "32=25`    `47=18`   ` 23=52`  `74=??`","`9,16=7`  `4,36=8`  `121,81=20`  `25,49=?`","`624=513`  `282=171`  ` 547=436`  `271=??`"];
      let option_a=["32","15","20","1783","45",'49',"10","74","12","271"];
      let option_b=["30","30","24","7831","44","25","9","81","74","382"];
      let option_c=["18","10","4","3178","18","36","23","25","5","171"];
      let option_d=["4","5","25","8817","40","50","19","47","21","160"];
      let correct_answer=["32","10","25","7831","44","49","23","81","12","160"];
      const arr_len=array_quastion.length;
      let score=0;
      let i;


      const eee=document.querySelector("#cloud")
      const option_1=document.querySelector("#cloud_1")
      const option_2=document.querySelector("#cloud_2");
      const option_3=document.querySelector("#cloud_3");
      const option_4=document.querySelector("#cloud_4");
    
  //////////////////////////////////////////////
    
      const Q=document.createElement("p");
      Q.innerHTML="Choose the correct ansswer";
      Q.id="Q";
      eee.append(Q);
      
      i=Math.floor(Math.random() *array_quastion.length) 
      console.log("i",i ,"lenght",array_quastion.length)


      const quastion_f=document.createElement("p");
      quastion_f.innerHTML=array_quastion[i];
      quastion_f.id="quastion_f";
      eee.append(quastion_f);

      
      array_quastion.splice(i,1)
      const think=document.createElement("img");
      think.src="https://as2.ftcdn.net/jpg/02/02/91/77/500_F_202917771_veXHcATm4A0UJS3FhioRVlcbyHqPPwHB.jpg";
      think.style.height="180px"
      think.style.width="180px";
      think.id="think";
      eee.append(think);
      
      const func_quadtion=()=>{   
      if(array_quastion.length!==0){
////////////random///////////////////
       i=Math.floor(Math.random() *array_quastion.length) 
      console.log("i",i ,"lenght",array_quastion.length)
/////////////////////////////////////

      document.getElementById("cloud").innerHTML="";
      const quastion_f=document.createElement("p");
      quastion_f.innerHTML=array_quastion[i];
      quastion_f.id="quastion_f";
      eee.append(Q);
      eee.append(quastion_f);
      eee.append(think);
      array_quastion.splice(i,1)
     }
     else 
     {
        document.getElementById("new_page").innerHTML="";

        const div_perant=document.createElement("div");
        div_perant.id="new_perant";
        body1.append(div_perant);
        const div_child1=document.createElement("div");
        div_child1.id="new_child1";
        div_perant.append(div_child1);
        const div_child2=document.createElement("div");
        div_child2.id="new_child2";
        div_perant.append( div_child2);

        const new_button=document.createElement("button");
        new_button.innerHTML="Try Again";
        new_button.id="new_cloud";

    
        const page=document.createElement("p");
        const img=document.createElement("img");

        if(score>=arr_len/2)
        {
         page.innerHTML="      Your Score :"+score;
         page.style.textShadow="yellow 2px 2px";
         body1.style.background="black";
         img.src="https://image.freepik.com/free-vector/you-win-neon-text-sign_118419-1005.jpg";
         img.style.height="500px";
         img.style.width="500px"
        }
        else{
         page.innerHTML="      Your Score :"+score;
         page.style.textShadow="yellow 2px 2px";
         body1.style.background="black";
         img.src="https://www.pngkey.com/png/full/239-2391210_game-over-game-over-pixel-transparent.png";
        }
       
        const link=document.createElement("a");
        link.href="quizHTML.html";
       
        
        page.id="page_00";
        div_child2.append(page)
       // div_child2.append(new_button);
       div_child2.append(link);
       link.append(new_button)
        div_child1.appendChild(img);
    
     }
    }

     //////////////////////////////////////////////////

      option_1.innerHTML=option_a[i];
      //option_a.splice(0,1)
     
      const option_A=()=>{
      if(option_a.length!==0){
      document.getElementById("cloud_1").innerHTML="";
      option_1.innerHTML=option_a[i];
      //option_a.splice(0,1)
    } }
     //////////////////////////////////////////////////

    option_2.innerHTML=option_b[i];
   // option_b.splice(0,1)
    const option_B=()=>{
    if(option_b.length!==0){
    document.getElementById("cloud_2").innerHTML="";
    option_2.innerHTML=option_b[i];
    //option_b.splice(0,1)
  } }
  //////////////////////////////////////////////////
  option_3.innerHTML=option_c[i];
  //option_c.splice(0,1)
  const option_C=()=>{
  if(option_c.length!==0){
  document.getElementById("cloud_3").innerHTML="";
  option_3.innerHTML=option_c[i];
  //option_c.splice(0,1)
} }
  //////////////////////////////////////////////////

  option_4.innerHTML=option_d[i];
 // option_d.splice(0,1)
  const option_D=()=>{
  if(option_d.length!==0){
  document.getElementById("cloud_4").innerHTML="";
  option_4.innerHTML=option_d[i];
  //option_d.splice(0,1)
  }}
   //////////////////////////////////////////////////

  const correct_A=()=>
{
    console.log(option_a);
    if(option_a[i]===correct_answer[i]){
        console.log("wiiin");
        score++;
        console.log("wiiin","score="+score);      
        alert("correct answer")
        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)

    }
    else {
        console.log("lost");
        alert(`wrong answer`);
        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)
    }
   
}
   //////////////////////////////////////////////////

const correct_B=()=>
{
    console.log(option_b);
    if(option_b[i]===correct_answer[i]){
        console.log("wiiin");
        score++;
        console.log("wiiin","score="+score);
        alert("correct answer");

        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)

    }
    else {
        console.log("lost");
        alert("wrong answer");

        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)
    }
}  
//////////////////////////////////////////////////
const correct_C=()=>
{
    console.log(option_c);
    if(option_c[i]===correct_answer[i]){
        console.log("wiiin");
        score++;
        console.log("wiiin","score="+score);
        alert("correct answer");

      correct_answer.splice(i,1)
      option_a.splice(i,1)
      option_b.splice(i,1)
      option_c.splice(i,1)
      option_d.splice(i,1)
    }
    else {
        console.log("lost");
        alert("wrong answer");
        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)
    }
}
 //////////////////////////////////////////////////
const correct_D=()=>
{
       console.log(option_d);
       if(option_d[i]===correct_answer[i]){
        score++;
        alert("correct answer");
        console.log("wiiin","score="+score);
        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)
    }
    else {
        console.log("lost");
        alert("wrong answer");
        correct_answer.splice(i,1)
        option_a.splice(i,1)
        option_b.splice(i,1)
        option_c.splice(i,1)
        option_d.splice(i,1)
    }
}
    //////////////////////////////////////////////////

    /* button1=document.createElement("button")
     button1.id="button";
     button1.innerText="Next";
     button1.style.height="40px";
     button1.style.width="60px";
     body1.append(button1);*/

    //////////////////////////////////////////////////

     /*document.getElementById("button").addEventListener("click" ,function(){
     return func_quadtion();})
   
     document.getElementById("button").addEventListener("click" ,function(){
     return option_A();})
   
     document.getElementById("button").addEventListener("click" ,function(){
     return option_B();})

     document.getElementById("button").addEventListener("click" ,function(){
     return option_C();})

     document.getElementById("button").addEventListener("click" ,function(){
     return option_D();})*/
   
    //////////////////////////////////////////////////

    //////////////////////////////////////////////////////
      
       document.getElementById("cloud_1").addEventListener("click" , function(){
        return func_quadtion();})
      
        document.getElementById("cloud_1").addEventListener("click" ,function(){
        return option_A();})
      
        document.getElementById("cloud_1").addEventListener("click" ,function(){
        return option_B();})
   
        document.getElementById("cloud_1").addEventListener("click" ,function(){
        return option_C();})
   
        document.getElementById("cloud_1").addEventListener("click" ,function(){
        return option_D();})
   
    
         
       document.getElementById("cloud_2").addEventListener("click" ,function(){
        return func_quadtion();})
      
        document.getElementById("cloud_2").addEventListener("click" ,function(){
        return option_A();})
      
        document.getElementById("cloud_2").addEventListener("click" ,function(){
        return option_B();})
   
        document.getElementById("cloud_2").addEventListener("click" ,function(){
        return option_C();})
   
        document.getElementById("cloud_2").addEventListener("click" ,function(){
        return option_D();})


         
       document.getElementById("cloud_3").addEventListener("click" ,function(){
        return func_quadtion();})
      
        document.getElementById("cloud_3").addEventListener("click" ,function(){
        return option_A();})
      
        document.getElementById("cloud_3").addEventListener("click" ,function(){
        return option_B();})
   
        document.getElementById("cloud_3").addEventListener("click" ,function(){
        return option_C();})
   
        document.getElementById("cloud_3").addEventListener("click" ,function(){
        return option_D();})

           
       document.getElementById("cloud_4").addEventListener("click" ,function(){
        return func_quadtion();})
      
        document.getElementById("cloud_4").addEventListener("click" ,function(){
        return option_A();})
      
        document.getElementById("cloud_4").addEventListener("click" ,function(){
        return option_B();})
   
        document.getElementById("cloud_4").addEventListener("click" ,function(){
        return option_C();})
   
        document.getElementById("cloud_4").addEventListener("click" ,function(){
        return option_D();})