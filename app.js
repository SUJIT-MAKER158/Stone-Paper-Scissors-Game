let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");
const genCompChoice= ()=>
{
   //rock,paper,sissor
    const options=["rock","paper","scissors"];
     const randIdx=Math.floor(Math.random()*3);
     return options[randIdx];
}
const drawGame= ()=>
{
    msg.innerText="Game Draw! Play Again";
    msg.style.backgroundColor="orange";
}
const showWinner=(userWin,userChoice,compChoice)=>
{
if(userWin)
{
    msg.innerText=`You Win! Your  ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    uscore.innerText=userScore;
}
else
{
    
    msg.innerText=`You Lose! ${compChoice} beats  Your ${userChoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    cscore.innerText=compScore;
}
}
const playGame=(userChoice)=>
{
    //to generate Computer Choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        //draw
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice ==="rock")
        {
            //scissor,paper
          userWin =  compChoice==="paper"?false:true;
        }
      else  if(userChoice ==="paper")
      {
        //rock,scissors
        userWin=compChoice==="scissors"?false:true;
      }
      else
      {
        //rock,paper
        userWin=compChoice==="rock"?false:true;
      }
      showWinner(userWin,userChoice,compChoice);

    }

}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
      const userChoice=choice.getAttribute("id");
    //   console.log("choice was clicked",userChoice)
      playGame(userChoice);
    })
})