console.log('Your are at ' +window.location);

const Image = document.querySelector('.imageBlock');
let answer = prompt("Сколько тебе лет?");
answer = parseInt(answer);

console.log(answer);

(answer >= 18) ? Image.style.backgroundImage = 'url(img/pub.png)' : Image.style.backgroundImage = 'url(img/school.png)';