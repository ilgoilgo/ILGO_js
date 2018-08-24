console.log('Your are at ' +window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Сколько тебе лет?");

var reload = answer;

answer = parseInt(answer);
console.log('ответил ' + answer);

if (answer < 18) {
	Image.style.backgroundImage = "url(img/school.png)";
	console.log('возраст меньше 18');
} else if (answer <= 25) {
	console.log('меньше или равно 25');
	Image.style.backgroundImage = "url(img/study.png)";
} else if (answer <= 50) {
	Image.style.backgroundImage = "url(img/pub.png)";
} else {
	Image.style.backgroundImage = "url(img/home.png)";
}