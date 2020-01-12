window.addEventListener("load",init);
//available levels (object)
const levels = {
  easy:5,
  medium:3,
  hard:2
};
const current_level;
//global variables
let time = current_level;
let score = 0;
let isPlaying;

//DOM Elements
const wordinput = document.querySelector(".word-input");
const currentword = document.querySelector(".current-word");
const message = document.querySelector(".message");
const timedisplay = document.querySelector(".time_display");
const scoredisplay = document.querySelector(".score_display");
const seconds = document.querySelector(".seconds");
const selectbox = document.querySelector(".select-box");

//Hardcoded words array
const words = [ameliorate,translucent,spectacular,materialistic,detrimental,benevolent,sedimentary,
miraculous,exaccerbate,quarantine,automysophobia,brobdingnagian,abstentious,anomalist,calipygian,circumlocution,
desideratum,fortuitous,idiosyncratic,parsimonious];

//initialize game
function init(e)
{ selectbox.addEventListener("input",selectlevel);
  seconds.innerHTML=current_level;
  setInterval(gamestatus,50);
  //start matching word_input
  wordinput.addEventListener("input",startmatch);
  //load word from array
  showword(words);
  //call countdown every second
  setInterval(countdown,1000);
}

function showwords(words)
{
  let wordindex = Math.floor(Math.random()*words.length);
  currentword.innerHTML =  words[wordindex];
}

function countdown()
{
  if(time>0)
  time--;
  else if(time===0)
  {
    isPlaying = false;
  }
  timedisplay.innerHTML=time;
}
function gamestatus()
{ if(!isPlaying && time===0)
  {
    message.innerHTML = "GAME OVER!!!";
    score = -1;
  }
}
function startmatch()
{
  if(wordmatches())
  {
    score++;
    isPlaying = true;
    time = current_level + 1;
    showwords(words);
    wordinput.value="";

  }
  if(score===-1)
  {
     scoredisplay.innerHTML = 0;
  }
  else {
    scoredisplay.innerHTML = score;
  }
  }
  function wordmatches()
  {  if(wordinput.value===currentword.innerHTML)
    {
      message.innerHTML="MATCHED!!!";
      return true;
    }
    else
      {
        message.innerHTML="";
        return false;
      }
  }
  function selectlevel()
  {
    if(selectlevel.value===easy)
    {
      current_level = levels.easy;
    }
    else if(selectlevel.value===medium)
    {
      current_level = levels.medium;
    }
    if(selectlevel.value===hard)
    {
      current_level = levels.hard;
  }
