let city = '';
const APIKey = '95878813c7487f29627cecdc760e3a89';


const form = document.forms[0];
const button = form.elements.button;
const resault = document.querySelector('div')



form.onsubmit = function(e) {
	e.preventDefault();
	city = form.elements.city.value;
	let cityNum = city.length;
	const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	if (cityNum > 0) {
		let xhr = new XMLHttpRequest();

		xhr.open('GET', url, false);

		xhr.send();

		if (xhr.status != 200) {
			resault.innerHTML = 'Ошибка '+xhr.status + ' '+xhr.statusText;
		} else {
			var DATA = JSON.parse(xhr.responseText);
			console.log(DATA);
			resault.innerHTML = 'Температура в городе '+city+' сейчас '+Math.floor(DATA.main.temp - 273)+' С&#176;';
		}
	} 
	else {
			resault.innerHTML = 'Введите название города';
		}
	}