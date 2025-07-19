let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll('.choices button');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const computerChoice = () => {
    let computerChoices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];    
}
const userwin = () => {
    userscore++;
    document.getElementById("user-score").innerHTML = userscore;
    }

const playgame=(userChoice) => {
    console.log("User choice: " + userChoice);
    //genrate computer choices}
    const computerChoices = computerChoice();
    console.log("Computer choice: " + computerChoices);
    document.getElementById("user").innerHTML =  userChoice;
    document.getElementById("computer").innerHTML =computerChoices;
    if(userChoice === computerChoices) {
        document.getElementById("result-text").innerHTML = "It's a draw!";
    }else if(
        (userChoice === "rock" && computerChoices === "scissors") ||
        (userChoice === "paper" && computerChoices === "rock") ||
        (userChoice === "scissors" && computerChoices === "paper")
    ) {
        userscore++;
        document.getElementById("result-text").innerHTML = "You win!";
        console.log("User score: " + userscore);
        document.getElementById("user-score").innerHTML =  userscore;
    } else {
        computerscore++;
        document.getElementById("result-text").innerHTML = "Computer wins!";
        console.log("Computer score: " + computerscore);
        document.getElementById("computer-score").innerHTML =  computerscore;        
    }
}
choices.forEach(choice => {
    choice.addEventListener('click', function() {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    }); 
})
