//timer function
function timerM(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				generateLevel1QuestionsforMul();
    }
}

function timer2M(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				generateLevel2QuestionsforMul();
    }
}

//generates Multiplication levels

function levelsM(){
	var stage = createDiv();
	stage.setAttribute('id','levels');
	document.body.appendChild(stage);
	var lvl1 = createDivBut("Level 1");
	lvl1.setAttribute('id',"levelwrap1");
	lvl1.setAttribute("tooltip", "level 1 has a 5 second chance to answer the questions");
	stage.appendChild(lvl1);
	var lvl2 = createDivBut("Level 2");
	lvl2.setAttribute('id',"levelwrap2");
	lvl2.setAttribute("tooltip", "level 2 has a 3 second chance to answer the questions");
	stage.appendChild(lvl2);
	lvl1.addEventListener('click', forMul);
	lvl2.addEventListener('click', forMul2);
	backToMain = createDivBut("Back to HP");
	backToMain.setAttribute('id',"back");
	backToMain.addEventListener('click', displayInterface);
	stage.appendChild(backToMain);

}

//generates level1 questions

function generateLevel1QuestionsforMul() {
	if(upToQuestion < multiplication.length){
  console.log("how much shit is in there " + upToQuestion);
	currentEquation = multiplication[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	var answer = currentEquation.a;
	questionElement.textContent = "The Equation to be answered is: " + currentEquation.q ;
	//sets the clock
	clock = 5;
	//activates the timer
	time = window.setInterval(timerM,1000);

	}else {
		//displays how many wrong or right questions there are and resets the upToQuestion counter
		questionElement.textContent = "there are no more Questions " + correctA + " answers correctly and " + wrongA + " done wrong";
		upToQuestion = 0;
		var lvl2 = createDivBut('On to level 2');
		lvl2.setAttribute('id','lvl2Cont');
		boxIn.appendChild(lvl2);
		lvl2.addEventListener('click', forMul2);
		change();

	}
	//clears answer result
	answerElement.textContent = "";
	//clear user textBox
	textBoxElement.value = "";


}

//generates level 2 questions
function generateLevel2QuestionsforMul() {
	if(upToQuestion < multiplication2.length){
  console.log("how much shit is in there " + upToQuestion);
	currentEquation = multiplication2[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	var answer = currentEquation.a;
	questionElement.textContent = "The Equation to be answered is: " + currentEquation.q ;
	//sets the clock
	clock = 3;
	//activates the timer
	time = window.setInterval(timer2M,1000);
	}else {

		questionElement.textContent = "there are no more Questions " + correctA + " answers correctly and " + wrongA + " done wrong";
		time = window.setInterval(function () {
			console.log('its starting');
			clearInterval(time);
			finalPage();

		}, 2000);

	}
	//clears answer result
	answerElement.textContent = "";
	//clear user textBox
	textBoxElement.value = "";


}


function forMul(){
	document.body.innerHTML = '';
	boxIn = createDiv();
	boxIn.setAttribute('id', 'QuestionContainer');
	document.body.appendChild(boxIn);
  questionElement = createParagraph("Question is:", "question");
  boxIn.appendChild(questionElement);
  createParagraph("Put your answer here:", "answerIt");
	textBoxElement = createTextBox();
  boxIn.appendChild(textBoxElement);
  var checkAnswerButton = createButton("Answer" , "answerMe")
  boxIn.appendChild(checkAnswerButton);
	// create an answer text field
	answerElement = createParagraph("", "answer");
  boxIn.appendChild(answerElement);
	nextQuestionButton = createButton("Next Question");
	nextQuestionButton.setAttribute('id','nextQuest');
  boxIn.appendChild(nextQuestionButton);
	nextQuestionButton.onclick = generateLevel1QuestionsforMul;
	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForMul;
  generateLevel1QuestionsforMul();

}
function forMul2(){
	document.body.innerHTML = '';
	wrongA = 0;
	correctA = 0;
	boxIn = createDiv();
	boxIn.setAttribute('id', 'QuestionContainer');
	document.body.appendChild(boxIn);
  questionElement = createParagraph("Question is:", "question");
  boxIn.appendChild(questionElement);
  createParagraph("Put your answer here:", "answerIt");
	textBoxElement = createTextBox();
  boxIn.appendChild(textBoxElement);
  var checkAnswerButton = createButton("Answer" , "answerMe")
  boxIn.appendChild(checkAnswerButton);
	// create an answer text field
	answerElement = createParagraph("", "answer");
  boxIn.appendChild(answerElement);
	nextQuestionButton = createButton("Next Question");
  boxIn.appendChild(nextQuestionButton);
	nextQuestionButton.onclick = generateLevel2QuestionsforMul;
	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForMul2;
  generateLevel2QuestionsforMul();

}


//checks wrong and right answers then increments on either one depending on which
//condition is met
function checkAnswerForMul(){
 if(upToQuestion < multiplication.length){
 //get the Text from the TextBox
 var userText = textBoxElement.value;
 console.log(userText);
 //get the correct answer for the question
 var realAnswer = currentEquation.a;
 //check the answer and then output
 if (userText == realAnswer){
   answerElement.textContent = "Correct!";
	 correctA++;
	 tallyCorrect++;
	 tallyQuestionsAnswered++;
 }
 else{
   answerElement.textContent = "Wrong the answer is " + realAnswer;
	 wrongA++;
	 tallyWrong++;
	 tallyQuestionsAnswered++;
 }

 upToQuestion++;

 }

}


function checkAnswerForMul2(){
 if(upToQuestion < multiplication2.length){
 //get the Text from the TextBox
 var userText = textBoxElement.value;
 console.log(userText);
 //get the correct answer for the question
 var realAnswer = currentEquation.a;
 //check the answer and then output
 if (userText == realAnswer){
   answerElement.textContent = "Correct!";
	 correctA++;
	 tallyCorrect++;
	 tallyQuestionsAnswered++;
 }
 else{
   answerElement.textContent = "Wrong the answer is " + realAnswer;
	 wrongA++;
	 tallyWrong++;
	 tallyQuestionsAnswered++;
 }

 upToQuestion++;

 }

}
