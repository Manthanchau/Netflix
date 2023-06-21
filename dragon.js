// Variable Declaration
let start = document.querySelector(".start");
start.innerHTML = "Start";
let sad = new Audio("sad.mp3");
let startAudio = new Audio("stranger.mp3");
let secondAudio = new Audio("mid.mp3");
let count = new Audio("fight.mp3");
let dino, obstacle;
let countDown = 3;
let score = 0;
let cross = true;
let timerun = 1;
// Logic Of a Start and GameOver
setTimeout(()=>{
  document.querySelector("p").innerHTML = "Press Enter Key to Start The Game"
},100);
setTimeout(()=>{
  document.querySelector("p").style.display = "none";
},4000);
start.addEventListener("click", () => {
  nowStart();
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    nowStart();
  }
});
function nowStart() {
  setTimeout(() => {
    count.play();
  }, 1000);
  setInterval(() => {
    start.innerHTML = countDown--;
    if(countDown>=3){
      clearInterval();
    }
  }, 1000);
  setTimeout(() => {
    start.innerHTML = "FIGHT";
  }, 4000);
  setTimeout(() => {
    startAudio.play();
    start.style.visibility = "hidden";
    aniDino();
    document.querySelector(".obstacle").classList.add("obstacleAni");
    headTohead();
  }, 5000);
}
// Give Controls to Dino
function aniDino() {
  document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp" || e.key == "w") {
      document.querySelector(".dino").classList.add("animateDino");
      setTimeout(() => {
        document.querySelector(".dino").classList.remove("animateDino");
      }, 700);
    }
    if (e.key == "ArrowRight" || e.key == "d" ) {
      dino = document.querySelector(".dino");
      dinoLeft = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
      dino.style.left = dinoLeft + 112 + "px";

    }
    if (e.key == "ArrowLeft" || e.key == "a") {
      dino = document.querySelector(".dino");
      dinoLeft = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
      dino.style.left = (dinoLeft -112)+ "px";
    }
  });
}
// Give Controls to Obstacle and Score
function headTohead(){
  setInterval(()=>{
    dino = document.querySelector(".dino");
    obstacle = document.querySelector(".obstacle");
   let dx = parseInt(window.getComputedStyle(dino , null).getPropertyValue("left"));
   let dy = parseInt(window.getComputedStyle(dino , null).getPropertyValue("bottom"));
   let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
   let oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue("bottom"));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    if(offsetX < 93 && offsetY < 100){
      document.querySelector(".obstacle").classList.remove("obstacleAni");
      document.querySelector(".over").style.visibility = "visible";
      startAudio.pause();
      document.querySelector(".obstacle").classList.remove("fastob");
      document.querySelector(".obstacle").classList.remove("fasterob");
      sad.play();
      setTimeout(()=>{
        sad.pause();
      },1500);
    }
// Explaination of the below else if code:
// When the code block is first executed, the value of cross is assumed to be truthy, so the else if statement is evaluated. If the conditions in the else if statement are met, the code block executes,
// which includes incrementing the score, updating the score display, and setting the value of cross to false.
// Once cross is set to false, the if statement will not evaluate to true again until the value of cross is set back to true. The setTimeout() function is used to accomplish this by setting the value of cross back to true after a delay of 1000 milliseconds.
// So, if the user performs multiple actions that meet the conditions specified in the else  if statement in quick succession, the code block will execute once for each action,
// but with a delay of 1000 milliseconds between each execution. This is done to prevent the score from being incremented multiple times for a single user action.
    else if(offsetX < 145 && cross){
      score = score+=1;
      document.querySelector(".score").innerHTML =  "Your Score is :" + score;
      // localStorage.setItem("Score" , score);
      cross = false;
      setTimeout(()=>{
        cross = true;
      },1000);
      if(score >= 5){
        document.querySelector(".obstacle").classList.add("fastob");
      }
       if(score >= 13){
        document.querySelector(".obstacle").classList.add("fasterob");
      }
    }
  },100);
}
