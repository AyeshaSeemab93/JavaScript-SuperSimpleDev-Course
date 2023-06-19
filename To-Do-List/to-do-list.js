
const inputArray = [];
renderToDoList();

//go through input array and add p tag around every input(loop)
//add all the p tagged html in a string and show it in a div
function renderToDoList(){
  let allHTML = ''; // adding all html in a string
 
   for(let i = 0; i<inputArray.length; i++){
    console.log(inputArray[i]);
  let html = `<p>${inputArray[i]}</p>`; // adding input on page 1 by 1 in p tag
  allHTML += html;
}
  console.log(allHTML);
  document.querySelector('.js-list').innerHTML = allHTML;
   
}
//just add input in array and make it empty
 function addToDoList(){
  const inputElement = document.querySelector('.js-input-name');
  inputArray.push(inputElement.value);
  //console.log(inputArray);
  inputElement.value = ''; // empty input box after add button press
 
  renderToDoList();

}