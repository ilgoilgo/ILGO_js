console.log('Your are at ' +window.location);

function moduleSquare(num) {
	return Math.abs(num) / 2;
}

console.log(moduleSquare(-3));
console.log(moduleSquare(3));

console.log(Math.floor(2.456)); //отбрасываем после точки
console.log(Math.round(2.845)); //округление

console.log(Math.random());

console.log(Math.random() * (10 - 5) + 5);

console.log(Math.floor(Math.random() * (10 - 5) + 5));