console.log('Your are at ' +window.location);

const form = document.forms[0];
console.log(form);

const resault = document.querySelector('.resault');

form.onsubmit = function(e) {
	e.preventDefault();
	resault.innerHTML = Math.sin(Math.abs(form.elements.gradus.value)) + ' – такой вот синус';
}


