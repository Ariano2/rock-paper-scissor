choiceList=["rock","paper","scissor"]; //global choices array

function getComputerChoice(){
let choice=Math.floor((Math.random()*100)%3);
return (choiceList[choice]);
}

function getUserChoice(event){
    game((event.target.getAttribute('id')),getComputerChoice);
}

function finalWinnerDisplay(){
    const finale=document.createElement('div');
    const userScore=document.createElement('div');
    const computerScore=document.createElement('div');
    const winner=document.createElement('div');
    userScore.innerText='User Wins : '+userWin;
    computerScore.innerText='Computer Wins : '+(5-userWin);
    if(userWin>(5-userWin)){winner.innerText="User Has Won";}
    else if(userWin<(5-userWin)){winner.innerText="Computer Has Won";}
    else{winner.innerText="Match Drawn";}
    finale.appendChild(userScore);
    finale.appendChild(computerScore);
    finale.appendChild(winner);
    const body=document.querySelector('body');
    userScore.classList.add('box');
    computerScore.classList.add('box');
    winner.classList.add('box');
    body.insertBefore(finale,resetBtn);
    finale.classList.add('finale');
}

function game(userInput,computerInput,rounds){
    if(roundCount>=5){
        finalWinnerDisplay();
        buttons.forEach((btn)=>btn.removeEventListener('click',getUserChoice));
        let beat=new Audio("./audio/game-over.mp3");
        beat.play();
        return;
    }
    roundCount+=1;
        let result=2;
        let userChoice=userInput;
        let computerChoice=computerInput();
        switch(userChoice){
            case "rock":
                switch(computerChoice){
                    case "rock":
                        result=2;
                        break;
                    case "scissor":
                        result=1;
                        break;
                    default:
                        result=0;
                        break;
                }
                break;
            case "paper":
                switch(computerChoice){
                    case "rock":
                        result=1;
                        break;
                    case "scissor":
                        result=0;
                        break;
                    default:
                        result=2;
                        break;
                    }
                break;
            //scissor =user
            default:
                switch(computerChoice){
                    case "rock":
                        result=0;
                        break;
                    case "paper":
                        result=1;
                        break;
                    default:
                        result=2;
                        break;
                }
                break;
        }
        
        //proper output format
        const output=document.querySelectorAll('.result > div > span');
        output[0].innerText=userChoice;
        output[1].innerText=computerChoice;
        let message;
        console.log("User Chose : "+userChoice+"\n");
        console.log("Computer Chose: "+computerChoice+"\n");
        if(result===1){
            message="User Won!";
            userWin+=1;
        }
        else if(result===0){
            message="Computer Won!";
    
        }
        else{
            message="Stalemate";
        }
        output[2].innerText=message;
    const rnd=document.querySelector('#round p');
    rnd.innerText='Round : '+roundCount;
    let beat=new Audio("./audio/coin.mp3");
    beat.play();
}

let roundCount=0;
let userWin=0;
const buttons=document.querySelectorAll('.gameChoice > button');
buttons.forEach((btn)=>btn.addEventListener('click',getUserChoice));
const resetBtn=document.querySelector('.reset');
resetBtn.addEventListener('click',()=>{
    alert('Page is Reloading');
    location.reload();
});