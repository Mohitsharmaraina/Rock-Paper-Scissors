let userScoreMsg = document.querySelector("#user-score");
let compScoreMsg = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

let userScore = 0;
let compScore =  0;

const choices  = document.querySelectorAll(".choice");

// generate computer choice
const compChoice = ()=>{
    const choices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    //console.log("Computer choice=", choices[index]);
    return choices[index];

}
// get user choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (user)=>{
   
    const comp = compChoice();
    
    if(user===comp){
        msg.innerText = "Same choices! It is a draw.";
        msg.style.backgroundColor = "gray";
    }
    else if(user==="rock" && comp==="scissors" || user==="paper" && comp ==="rock" || user==="scissors" && comp==="paper"){
        userScore++;
        userScoreMsg.innerText = userScore;
        msg.innerText = `You win! Your ${user} beats computer's ${comp}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreMsg.innerText = compScore;
        msg.innerText = `You loose! Computer's ${comp} beats Your ${user}`;
        msg.style.backgroundColor = "red";
    }


}