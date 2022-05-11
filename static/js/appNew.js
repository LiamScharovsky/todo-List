// < !-- < li class = "list-group-item active" > Active Item</li >
//     <li class= list-group-item>Item</li>    -->



let form = document.querySelector('#todoForm'); //target your form
console.log(form); //verify it works
let ul = document.querySelector('#todoList'); //target list for making a new list

            //MAKING A NEW LIST
form.addEventListener('submit', e => {
e.preventDefault();   //prevent page refresh


let li = document.createElement('li'); //create the element first
li.classList.add('list-group-item');  //add a class to list element
li.innerText = e.target.todoInput.value; // puts value given
//li.addEventListener('mouseenter', (e) => li.classList.add('active')); // arrow function equivalent of below
li.addEventListener('mouseenter', function(e){  //add an eventlistener to the element
    li.classList.add('active');         //puts active class when hovering over element
});
//li.addEventListener('mouseleave', e => li.classList.remove('active')); // arrow function equivalent of below 
li.addEventListener('mouseleave', function (e) {  //add an eventlistener to the element
    li.classList.remove('active');         //takes away active when not hovering over the element
});

li.addEventListener('click', function (e) {  
    li.classList.remove('active');          //remove active after clicking
    li.classList.toggle('disabled');       //adds disabled if it's not there or removes it if it's there
    if (li.classList.contains('disabled')){
        li.style.textDecoration = 'line-through'
    }
    else {
        li.style.textDecoration = 'none'
    };
    
});
    
ul.appendChild(li);                      //append a node object to the parent

    e.target.todoInput.value = '';
})

let button = document.querySelector('#clearAll'); //select element
console.log(button)                            //check that is working
button.addEventListener('click', function (e) {  //if button is clicked
    ul.innerHTML = '';                          //everything inside HTML gets cleared

})