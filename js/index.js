var currentEquation = null;
var answerElement;
var questions;
var randomNumber;
var arithOp;
var upToQuestion = 0;
var questionElement;
var counter;
var clock;
var time;
var userText;
var correctA = 0;
var wrongA = 0;
var boxIn;
var nextQuestionButton;
//may 7
var end;
var backToMain;

//variables needed to tally the scores for the final page
var tallyCorrect = 0;
var tallyWrong = 0;
var tallyQuestionsAnswered = 0;

document.body.style.backgroundColor = "#F3F7F6";

function home(){
  //create a start page
  document.body.innerHTML = '';

  introD = createDiv();
  introD.setAttribute('id', 'home');
  document.body.appendChild(introD);
  var start = createDivBut("Start");
  start.setAttribute('id', 'home1');
  var welcome = createParagraph("Mathletics");
  introD.appendChild(welcome);
  introD.appendChild(start);
  start.addEventListener("click", displayInterface);
}

function displayInterface() {
  //clears the body of any content
  document.body.innerHTML = '';

  headerDiv = createDiv();
  headerDiv.setAttribute("id","div1");
  guessTheAnswer = createParagraph("Lets practice on!?");
  guessTheAnswer.setAttribute("id","jello");
	headerDiv.appendChild(guessTheAnswer);
  document.body.appendChild(headerDiv);

  var additionButton = createDivBut("ADDITION");
  additionButton.setAttribute("id","wrapMe");
  headerDiv.appendChild(additionButton);
  additionButton.onclick = additionFunction;

  var subtractionButton = createDivBut("SUBTRACTION");
  subtractionButton.setAttribute("id","wrapMe1");
  headerDiv.appendChild(subtractionButton);
  subtractionButton.onclick = subtractionFunction;

  var mutiplicationButton = createDivBut("MULTIPLICATION");
  mutiplicationButton.setAttribute("id","wrapMe2");
  headerDiv.appendChild(mutiplicationButton);
  mutiplicationButton.onclick = multiplicationFunction;

  var divisionButton = createDivBut("DIVISION");
  divisionButton.setAttribute("id","wrapMe3");
  headerDiv.appendChild(divisionButton);
  divisionButton.onclick = divisionFunction;

  //resets the variables in the event that the user wants to continue to play in the event that
  //he or she has finished a math equation
  wrongA = 0;
  correctA = 0;
  upToQuestion = 0;
  tallyWrong = 0;
  tallyWrong = 0;
  tallyQuestionsAnswered = 0;
}

function additionFunction(){
  //clears the whole html so we can start on the gaming functionality
  document.body.innerHTML = '';

  //display displayquestions
  levelsA();

  //create input box

  //create check answer and next question
}
function subtractionFunction(){
  //clears the whole html so we can start on the gaming functionality
  document.body.innerHTML = '';

  //display displayquestions
  levelsS();

  //create input box

  //create check answer and next question
}
function multiplicationFunction(){
  //clears the whole html so we can start on the gaming functionality
  document.body.innerHTML = '';

  //display displayquestions
  levelsM();

  //create input box

  //create check answer and next question
}

function divisionFunction(){
  //clears the whole html so we can start on the gaming functionality
  document.body.innerHTML = '';

  //display displayquestions
  levelsD();

  //create input box

  //create check answer and next question

}

//added may 3
function change(){
	console.log("it changed");
	var changeIt = document.getElementById("nextQuest");
	changeIt.style.opacity = "0";
	return changeIt;
}

//end of function

//displays the final page where the number of answers and items answered are on created on May 5 finished on may 7
function finalPage(){
	document.body.innerHTML = '';
	var congratulationsDiv = createDiv();
	congratulationsDiv.setAttribute('id', 'finPage');
	document.body.appendChild(congratulationsDiv);
	var congratulatePlayer = createParagraph("Congratulations!");
	congratulatePlayer.textContent = "Congratulations!!! youve answered " + tallyQuestionsAnswered + ".";
	var tallying = createParagraph();
	tallying.textContent = "You have answered " + tallyCorrect + " correctly and " + tallyWrong + " mistakes.";
	congratulationsDiv.appendChild(backToMain);
	congratulationsDiv.appendChild(congratulatePlayer);
	congratulationsDiv.appendChild(tallying)

}




function appload(){
  console.log("starting application");
  // displayInterface();
  home();

}
window.onload = appload();
