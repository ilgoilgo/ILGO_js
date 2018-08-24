console.log('Your are at ' +window.location);

const items = document.getElementsByClassName('item');
console.log(items);
let counter = 0;
while (counter < items.lenght) {
	items[counter].innerHTML = counter + 1;
	counter++;
}