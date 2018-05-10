function createButton(buttonText) {

	var element = document.createElement("BUTTON");
	var t  = document.createTextNode(buttonText);
	element.appendChild(t);
	//document.body.appendChild(element);

	return element;

}
	//creates a div
function createDiv(){

	var element = document.createElement("div");
	return element;
}
//creates a div button
function createDivBut(text){
	var element = document.createElement("div");
	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}

function createParagraph(text, className){
	// console.log('this is working now ' + typeof className);
	//create a Ptag
	var element = document.createElement("p");
	//check if classname is dfined
	if(typeof className !== 'undefined'){
		element.classList.add(className);
	}
	//append the paragraph to document.body
	//document.body.appendChild(element);

	var textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}

function createTextBox(){

	//create an input box
	var element = document.createElement("INPUT");
	//document.body.appendChild(element);
	element.setAttribute("type", "text");
	element.setAttribute("maxlength", "5");

	return element;



}
