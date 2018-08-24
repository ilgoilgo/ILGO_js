console.log('Your are at ' +window.location);

const container = document.querySelector('ul');

for (i = 0; i <= 50; i++) {
	if (i % 6 == 0) 
		container.innerHTML += '<li>'+i+'</li>';
	
}