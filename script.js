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

