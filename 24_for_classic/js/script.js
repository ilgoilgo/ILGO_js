console.log('Your are at ' +window.location);

const divs = document.querySelectorAll('div');
console.log(divs);

for (let i = 0; i < divs.lenght; i++) {
	divs[i].style.backgroundImage = 'linear-gradient('+(45+i*5)+'deg, red, yellow)'
}