function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    let rand = Math.random();
    rand *= options.length;
    rand = Math.floor(rand);
    return options[rand];
}

function round(player, npc){
    player = player.toUpperCase();
    npc = npc.toUpperCase();

    if (player === npc){
        return `Draw! both players chose ${player}`;
    }
    else if (player === "ROCK" && npc === "SCISSORS"){
        return `You win! ${player} beats ${npc}`;
    }
    else if (player === "ROCK" && npc == "PAPER"){
        return `You lose! ${player} loses to ${npc}`;
    }
    else if (player === "PAPER" && npc == "ROCK"){
        return `You win! ${player} beats ${npc}`;
    }
    else if (player === "PAPER" && npc === "SCISSORS"){
        return `You lose! ${player} loses to ${npc}`;
    }
    else if (player === "SCISSORS" && npc === "PAPER"){
        return `You win! ${player} beats ${npc}`;
    }
    else if (player === "SCISSORS" && npc === "ROCK"){
        return `You lose! ${player} loses to ${npc}`;
    }
}

function game(choice, playerScore, computerScore) {
    
    const result = document.getElementById("result");
    result.textContent = "Result: " + round(choice, computerPlay());

    let plyrScore = document.getElementById("playerScore");
    let compScore = document.getElementById("computerScore");

    if (playerScore < 5 && computerScore < 5){
        if (result.innerText.includes('win!')){
            playerScore = parseInt(playerScore) + 1;
            plyrScore.textContent = playerScore;
        
        }
        else if (result.innerText.includes('lose!')){
            computerScore = parseInt(computerScore) + 1;
            compScore.textContent = computerScore;
        }
    }
    if (playerScore === 5){
        result.textContent = "PLAYER WINS! GAME OVER!";
    }
    if (computerScore === 5){
        result.textContent = "COMPUTER WINS! GAME OVER!";
    }
}

function resetGame() {
    let plyrScore = document.getElementById("playerScore");
    let compScore = document.getElementById("computerScore");

    const result = document.getElementById("result");
    result.textContent = "Result: ";

    plyrScore.textContent = 0;
    compScore.textContent = 0;
}