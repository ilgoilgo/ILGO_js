console.log('Your are at ' +window.location);

const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Выбери: 0 - камень, 1 - ножницы, 2 - бумага'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);


console.log('Ты выбрал: ' + player + ' А комп выбрал: ' + computer);
// опишем все условия и будем выводить в консоль 'computer win' или 'player win'

if (player==0 && computer==1 || player==1 && computer==2) {
	console.log("Ты выиграл!");
} else if (player==computer) {
	console.log('Ничья!');
}
else {
	console.log('Комп выиграл!');
}

