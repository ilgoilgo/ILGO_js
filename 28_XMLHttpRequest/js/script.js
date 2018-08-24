const form = document.forms[0];


const city = 'Khabarovsk';
const APIKey = '95878813c7487f29627cecdc760e3a89';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false);

	xhr.send();

	if (xhr.status != 200) {
		console.log(xhr.status + ' '+xhr.statusText);
	} else {
		var DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		document.write(Math.floor(DATA.main.temp - 273));
	}