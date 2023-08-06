choiceList=["rock","paper","scissor"]; //global choices array

function getComputerChoice(){
let choice=Math.floor((Math.random()*100)%3);
return (choiceList[choice]);
}

function getUserChoice(){
    let userChoice=prompt("Enter your choice");
    return userChoice.toLowerCase();
}

function inputValidator(){
    let userChoice=getUserChoice();
    for(let i=0;i<choiceList.length;i++){
        if(choiceList[i]==userChoice){
            return true;
        }
    }
    return false;
}

function game(userInput,computerInput,rounds){
    let wins=0;
    for(let i=0;i<rounds;i++){
        let result=2;
        let userChoice=userInput();
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
        console.log("User Chose : "+userChoice+"\n");
        console.log("Computer Chose: "+computerChoice+"\n");
        if(result===1){
            console.log("User Won!\n");
            wins+=1;
        }
        else if(result===0){
            console.log("Computer Won!\n");
        }
        else{
            console.log("Stalemate\n");
        }
    }
    console.log("\nTotal user wins are : "+wins+'\n');
}

game(getUserChoice,getComputerChoice,5)