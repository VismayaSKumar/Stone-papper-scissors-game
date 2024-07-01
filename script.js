let userScore=0;
let compScore=0;
let allChoice=document.querySelectorAll("img");
let us=document.getElementById("user-score");
let cs=document.getElementById("comp-score");
let msg=document.getElementById("play");
let generate =() =>{
    let options =["Rock","Paper","Scissors"];
    let compChoice =Math.floor(Math.random()*3);
    return options[compChoice];
};

function game()
{
    let user="";
    let comp="";
allChoice.forEach((myChoice)=>
{
    myChoice.addEventListener("click",()=>
        {
            user=myChoice.getAttribute("id"); 
            console.log(`My choice = `+user);
            comp=generate(); 
            console.log(`Computer's chooce = `+comp);
            let win=playGame(user,comp);
            if(win==true)
                {
                    userScore++;
                    msg.innerText=`You Won!. ${user} beats your ${comp}`;
                }
            else if(win==false)
               {
                    compScore++;
                    msg.innerText=`You Lost. ${comp} beats your ${user}`;
               }
            us.innerText=userScore;
            cs.innerText=compScore;
        });
});
}
let userWin=null;
let playGame=(user,comp)=>
    {
        if(user===comp)
           { 
            userWin=null;
            msg.innerText="Game was draw";
           }

        else if(user==="Rock")
            {
                userWin= (comp==="Scissors")? true:false;
            }
        else if(user=="Paper")
            {
                userWin=(comp=="Rock")? true:false;
            }
        else if(user=="Scissors")
            {
                userWin=(comp=="Paper")? true:false;
            }
        console.log(userWin);
        return (userWin);
    }

msg.addEventListener("click",()=>
{
    resetGame();
});
function resetGame()
{
    msg.innerHTML="Game started. Make you choice."
    userScore=0;
    compScore=0;
    us.innerText=userScore;
    cs.innerText=compScore;
    game();
}

