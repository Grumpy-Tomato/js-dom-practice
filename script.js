// container where work is going to be displayed
const container = document.querySelector('#container');

// create the red paragraph object
const redP = document.createElement('p');
redP.classList.add('red-paragraph');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

// create blue h3 object
const blueH3 = document.createElement('h3');
blueH3.classList.add('blue-heading-3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue'

// create pink div with black border
const pinkDiv = document.createElement('div');
pinkDiv.classList.add('pink-div');
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.borderColor = "black";
pinkDiv.style.borderWidth = "10px";
pinkDiv.style.borderStyle = "solid"

// create h1 that says "I'm in a div"
const inDivH1 = document.createElement('h1');
inDivH1.textContent = "I'm in a div"

// create p that says "ME TOO!"
const meTooP = document.createElement('p');
meTooP.textContent = "ME TOO!";

container.appendChild(redP);
container.appendChild(blueH3);
container.appendChild(pinkDiv)
pinkDiv.appendChild(inDivH1);
pinkDiv.appendChild(meTooP);

// alert function
let alertFunction = () => alert("HELLO WORLD!");

// create hello world functionality for button
const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

// create hello world functionality for button 2
const btn2 = document.querySelector('#btn-2');
btn2.addEventListener('click', alertFunction)

btn2.addEventListener('click', function(e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {

    if (e.target.style.backgroundColor == 'blue') {
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'blue';
    }
});

// add new event to all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        e.target.style.color = 'pink';
    });
});