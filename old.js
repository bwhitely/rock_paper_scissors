// function computerPlay(){
//     let options = ["Rock", "Paper", "Scissors"];
//     let rand = Math.random();
//     rand *= options.length;
//     rand = Math.floor(rand);
//     return options[rand];
// }

// function round(player, npc){
//     player = player.toUpperCase();
//     npc = npc.toUpperCase();

//     if (player === npc){
//         return `Draw! both players chose ${player}`;
//     }
//     else if (player === "ROCK" && npc === "SCISSORS"){
//         return `You win! ${player} beats ${npc}`;
//     }
//     else if (player === "ROCK" && npc == "PAPER"){
//         return `You lose! ${player} loses to ${npc}`;
//     }
//     else if (player === "PAPER" && npc == "ROCK"){
//         return `You win! ${player} beats ${npc}`;
//     }
//     else if (player === "PAPER" && npc === "SCISSORS"){
//         return `You lose! ${player} loses to ${npc}`;
//     }
//     else if (player === "SCISSORS" && npc === "PAPER"){
//         return `You win! ${player} beats ${npc}`;
//     }
//     else if (player === "SCISSORS" && npc === "ROCK"){
//         return `You lose! ${player} loses to ${npc}`;
//     }
// }

// function game() {
//     for (let i = 0; i < 5; i++){
//         let player = prompt("Choose rock, paper, or scissors");
//         console.log(round(player, computerPlay()));
//     }
// }