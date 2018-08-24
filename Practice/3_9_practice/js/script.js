console.log('Your are at ' +window.location)

const body = document.body;
console.log(body);

//body.style.backgroundColor = prompt("Какой будет фон у страницы?");

const page = document.querySelector('.page');
console.log(page);
//page.style.color = prompt("Какой будет фон у страницы?");


const poligon = document.querySelector('.poligon')
//poligon.innerHTML = ('<span class="name">' + prompt("Как зовут человека, который вас вдохновляет?") + "</span>");

const image = document.querySelector('img');
image.setAttribute('src', 'img/google.png');

const shortBio = document.querySelector('.shortBio');
shortBio.innerHTML = prompt("Введите текст страницы");

console.log(shortBio.className);
shortBio.className += ' animated'