//console.log("Hello Todo Application")

//console.log(document)

//Acess elements by classname
// let listItems = docuemt.getElementsByClassName('list-group-items');
// for (const listItem of listItems){
//     console.log(listItem.innerText)
// };
// let listItems = document.getElementsByClassName('list-group-item')  //returns collection object
// for (const listItem of listItems){
//     // listItem.innerHTML = `<strong>${ listItem.innerHTML} </strong>`
//     // console.log(listItem);

//     listItem.innerHTML = `
//     <p>
//         <strong>
//                 ${listItem.innerHTML} 
//                 <span class= float-right> This is a Test </span>            
//         </strong>`
//     console.log(listItem)

// }

//Access an element

let listItems = document.querySelectorAll('.list-group-item')

//Access element by ID
let titelElement = document.getElementById('title');
//console.log(titelElement.innerText);

//set an attribute of an element
//titelElement.innerText = 'TESTING';

//Access element by element name
let horizontalRules = document.getElementsByTagName('hr')


// Access elements using a wildcard method

// console.log(form)


// console.log(todoInputField.value)

//let listItems = document.querySelectorAll('.list-group-item'); //returns node list
// //console.log(listItems)
// listItems.forEach(function(listItem, index) {
//     console.log(index, listItem)
// });
let form = document.querySelector('#todoForm');
let todoInputField = document.querySelector('#todo-input-field');
form.addEventListener('submit', function (e) {
    // turn off form submission
    e.preventDefault();
    // console.log(e);
    console.log(e.target.todoItemInput.value);
})