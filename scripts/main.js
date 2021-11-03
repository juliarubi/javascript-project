let rose = document.querySelector("#rose");



rose.onclick = () => {
  if (rose.getAttribute('src') === 'images/rose.jpg')
  {
      rose.setAttribute('src', 'images/sunflower.jpg');
  } else {
      rose.setAttribute('src', 'images/rose.jpg');
  }
}


// designate elements to be used
let dog = document.querySelector('#dog');
let rotate = document.querySelector('#rotate');

//
const text1 = "Roll your mouse over the image to see it rotate!";
const text2 = "Now mouse out to return the image to its first position!";

// NOTE that two CLASSES are defined in the CSS:
// .rotate-right
// .rotate-left
// these make the code below work

rotate.onmouseenter = (e) => {
	// change image tilt by changing a CSS class
   e.target.classList.remove('rotate-right');
   e.target.classList.add('rotate-left');
   // change text
   dog.textContent = text2;
};
rotate.onmouseleave = (e) => {
// change image tilt back by changing a CSS class
   e.target.classList.add('rotate-right');
   e.target.classList.remove('rotate-left');
   // change text back
   dog.textContent = text1;
};
