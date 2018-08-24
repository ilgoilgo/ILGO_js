console.log('Your are at ' +window.location);

const form = document.querySelector('form');

form.onsubmit = function(e) {
	e.preventDefault();
	console.log('Sibmitted');
}