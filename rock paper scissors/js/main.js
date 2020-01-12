const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const score = document.getElementById('score');
const restart = document.getElementById('restart-btn');
const modal = document.querySelector('.modal');
const score_board = {
  player:0,
  computer:0
};


function play(e)
{
  const playerChoice = e.target.id;
  const computerChoice = get_computer_choice();
  const winner = get_winner(playerChoice,computerChoice);
  show_winner(winner,computerChoice)


}

function get_computer_choice()
{
  const x = Math.random();
  if(x < 0.34)
  {
    return "rock";
  }
  else if(x <= 0.67)
  {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function get_winner(p,c)
{
  if(p===c)
  {
    return 'draw';
  }
  else if(p=='rock')
  {
    if(c=='paper')
    {
      return 'computer';
    }
    else {
      return 'player';
    }
  }
  else if(p=='paper')
  {
    if(c=='scissors')
    {
      return 'computer';
    }
    else {
      return 'player';
    }
  }
  else if(p=='scissors')
  {
    if(c=='rock')
    {
      return 'computer'
    }
    else {
      return 'player'
    }
  }
}

function show_winner(winner,computerChoice)//score upgrade + show modal
{
  //score upgrade
  if(winner==='player')
  {
    score_board.player++;
  }
  else if(winner==='computer')
  {
    score_board.computer++;
  }
  else {
    return;
  }
  score.innerHTML = '<p>Player : {$score_board.player}</p>
  <p>Computer : {$score_board.computer}</p>';

  //show modal

  if(winner === player)
  {result.innerHTML = '<h1> You win!</h1>
  <img src="images/${computerChoice}.png"/>
  <p>Computer chose ${computerChoice}.</p>';
  }
  else if(winner === computer)
  {result.innerHTML = '<h1> Computer wins!</h1>
  <img src="images/${computerChoice}.png"/>
  <p>Computer chose ${computerChoice}.</p>';
  }
  else
  {result.innerHTML = '<h1> Its a Draw!</h1>
  <img src="images/${computerChoice}.png" alt="rock"/>
  <p>Computer chose ${computerChoice}.</p>';
  }
  result.style.display = block-inline;
}

function hide_modal(e)
{
  if(modal.style.display == block-inline)
  {
    modal.style.display = None;
  }
}

function restart_button(e)
{
  score_board.player = 0;
  score_board.computer = 0;
  score.innerHTML = '<p>Player : 0</p>
  <p>Computer : 0</p>';
}



//event listeners
choices.forEach(choice -> choice.addEventListener('click',play));
window.addEventListener('click',hide_modal);
restart.addEventListener('click',restart_button);
