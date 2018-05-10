//timer function
function timerS(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				generateLevel1QuestionsforSub();
    }
}

function timer2S(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				generateLevel2QuestionsforSub();
    }
}

function levelsS(){
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
	lvl1.addEventListener('click', forSub);
	lvl2.addEventListener('click', forSub2);
	backToMain = createDivBut("Back to HP");
	backToMain.setAttribute('id',"back");
	backToMain.addEventListener('click', displayInterface);
	stage.appendChild(backToMain);

}

function generateLevel1QuestionsforSub() {
	//counts the length of the database and generates questions with the counter
	if(upToQuestion < subtraction.length){
  console.log("how much shit is in there " + upToQuestion);
	//current Equation catches the array from the database and uses it
	currentEquation = subtraction[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	var answer = currentEquation.a;
	//question Element takes the current equation and displays it
	questionElement.textContent = "The Equation to be answered is: " + currentEquation.q ;
	//sets the clock
	clock = 5;
	//activates the timer
	time = window.setInterval(timerS,1000);

	}else {

		questionElement.textContent = "there are no more Questions " + correctA + " answers correctly and " + wrongA + " done wrong";

		upToQuestion = 0;
		var lvl2 = createDivBut('On to level 2');
		lvl2.setAttribute('id','lvl2Cont');
		boxIn.appendChild(lvl2);
		lvl2.addEventListener('click', forSub2);
		change();

	}
	//clears answer result
	answerElement.textContent = "";
	//clear user textBox
	textBoxElement.value = "";


}

function generateLevel2QuestionsforSub() {
	if(upToQuestion < subtraction2.length){
  console.log("how much shit is in there " + upToQuestion);
	currentEquation = subtraction2[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	questionElement.textContent = "The Equation to be answered is: " + question ;
	//sets the clock
	clock = 5;
	//activates the timer
	time = window.setInterval(timer2S,1000);
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



function forSub(){
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
	nextQuestionButton.onclick = generateLevel2QuestionsforSub;
	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForSub;
  generateLevel1QuestionsforSub();

}
//reset the wrong and right answer counters and then generates new questions
function forSub2(){
	//clearing out the wrong and correct answers counter for the next level
	wrongA = 0;
	correctA = 0;
	//clear document
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
	nextQuestionButton.onclick = generateLevel1QuestionsforSub;
	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForSub2;
  generateLevel2QuestionsforSub();

}

function checkAnswerForSub(){
 if(upToQuestion < subtraction.length){
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

function checkAnswerForSub2(){
 if(upToQuestion < subtraction2.length){
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
