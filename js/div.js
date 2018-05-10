
//timer function May 1
function timerD(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				generateLevel1QuestionsforDiv();
    }
}

function timer2D(){
	console.log(clock);
	clock--;
	if(clock == -1) {
		//clears and stope interval function
        clearInterval(time);
				textBoxElement.value = -1;
				upToQuestion++;
				wrongA++;
				tallyWrong++;
				console.log(wrongA);
				generateLevel2QuestionsforDiv();
    }
}

//end of function





//creates a level for the users to choose from
function levelsD(){
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
	lvl1.addEventListener('click', forDiv);
	lvl2.addEventListener('click', forDiv2);
	backToMain = createDivBut("Back to HP");
	backToMain.setAttribute('id',"back");
	backToMain.addEventListener('click', displayInterface);
	stage.appendChild(backToMain);

}
//end of function

//this function is used to generate questions and activates the timer function for level1

function generateLevel1QuestionsforDiv() {
	if(upToQuestion < division.length){
  console.log("how much shit is in there " + upToQuestion);
	currentEquation = division[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	var answer = currentEquation.a;
	questionElement.textContent = "The Equation to be answered is: " + currentEquation.q ;
	//sets the clock
	clock = 5;
	//activates the timer
	time = window.setInterval(timerD,1000);

	}else {

		questionElement.textContent = "there are no more Questions " + correctA + " answers correctly and " + wrongA + " done wrong";
		upToQuestion = 0;
		var lvl2 = createDivBut('On to level 2');
		lvl2.setAttribute('id','lvl2Cont');
		boxIn.appendChild(lvl2);
		lvl2.addEventListener('click', forDiv2);
		change();

	}
	//clears answer result
	answerElement.textContent = "";
	//clear user textBox
	textBoxElement.value = "";




}

function generateLevel2QuestionsforDiv() {

	if(upToQuestion < division2.length){
  console.log("how much shit is in there " + upToQuestion);
	currentEquation = division2[upToQuestion];
  console.log(currentEquation);
	var question = currentEquation.q;
	var answer = currentEquation.a;
	questionElement.textContent = "The Equation to be answered is: " + currentEquation.q ;
	//sets the clock
	clock = 3;
	//activates the timer
	time = window.setInterval(timer2D,1000);

	}else {

		questionElement.textContent = "there are no more Questions " + correctA + " answers correctly and " + wrongA + " done wrong";
		//shows final tally of page May 7

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

//end of function




//base function for each level
function forDiv(){
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
	nextQuestionButton.onclick = check;

	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForDiv;
  generateLevel1QuestionsforDiv();


}

function forDiv2(){
	wrongA = 0;
	correctA = 0;
	document.body.innerHTML = '';
	var boxIn = createDiv();
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
	var nextQuestionButton = createButton("Next Question");
  boxIn.appendChild(nextQuestionButton);
	nextQuestionButton.onclick = check2;
	//add a click event handler to check answer
	checkAnswerButton.onclick = checkAnswerForDiv2;
  generateLevel2QuestionsforDiv();

}

//end of function

//checks if the textBox has an input if there is nothing it will not generate a new question May 8
function check(){
	if(textBoxElement == ''){
	}
	else {
		generateLevel1QuestionsforDiv;
	};

}
function check2(){
	if(textBoxElement == ''){
	}
	else {
		generateLevel2QuestionsforDiv;
	};

}

//checking if the answers are correct and if not April 23
function checkAnswerForDiv(){
 if(upToQuestion < division.length){
 //get the Text from the TextBox
 userText = textBoxElement.value;
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

function checkAnswerForDiv2(){
 if(upToQuestion < division2.length){
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
//end of function
