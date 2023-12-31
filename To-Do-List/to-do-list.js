document.querySelector('.js-add-button')
.addEventListener('click', () =>{
  addToDoList();
})
  const inputArray = 
  [   {
        name: 'make dinner',
        dueDate: '2022-12-22'
    },{
        name: 'wash dishes',
        dueDate: '2022-12-22'
      },

  ];
renderToDoList();

//go through input array and add p tag around every input(loop)
//add all the p tagged html in a string and show it in a div
function renderToDoList(){
  let allHTML = ''; // collecting all generated html in a string
//  can use for loop as well instead of for
  inputArray.forEach((todoobject, i)=>{
    // console.log(inputArray[i]);
    // const name = todoobject.name;
    // const dueDate = todoobject.dueDate;
      const {name, dueDate} = todoobject;

    //Generating HTML using JS:
    let html = `
            <div>${name}</div>
            <div>${dueDate}</div>               
            <button class ="delete-button" 
   //         onclick="
  // inputArray.splice(${i},1);  
  // renderToDoList();
            "> Delete</button>`;
            // adding input on page 1 by 1 in p tag

    allHTML += html;
  });

  console.log(allHTML);
  document.querySelector('.js-list').innerHTML = allHTML;
//for all delete buttons: querrySelectorAll, foreach for each button event
document.querySelectorAll('.delete-button')
  .forEach((deleteButtonValue, index)=>{
      deleteButtonValue.addEventListener('click', ()=>{
      inputArray.splice(index,1);  
      //deleting the todo item and redispaying the updated list
      renderToDoList();
      })
      })


   
}
//just add input in array and make it empty
 function addToDoList()
 {
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-input-date');
  const dueDate = dateInputElement.value;

  inputArray.push({name, dueDate});
  //console.log(inputArray);
  inputElement.value = ''; // empty input box after add button press
 
  renderToDoList();

}