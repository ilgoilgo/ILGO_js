console.log('Your are at ' +window.location);

class Person {
	constructor (name) {
		this.name = name;
		this.happines = 0;
	}
	hasCat() {
		this.happines+1;
	}
	hasRest() {
		this.happines+1;
	}
	hasMoney() {
		this.happines+1;
	}
	isSunny() {
		const city = 'Moscow';
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
				var temper = Math.floor(DATA.main.temp - 273);
			}

		if (temper > 15) {
				this.happines+1;
				return this.happines;
			}
		}
	}

const form = document.forms[0];


form.onsubmit = function(e) {
	e.preventDefault();
	
	var answerCat = false;
	var answerRest = false;
	var answerMoney = false;

	if (form.elements.cat.value == 'yes') {
			answerCat = true;
		} else { 
			answerCat = false;
		}

	if (form.elements.rest.value == 'yes') {
			answerRest = true;
		} else {
			answerRest = false;
		}

	if (form.elements.money.value == 'yes') {
			answerMoney = true;
		} else {
			answerMoney = false;
		}


	let nameOnsubmit = new Person(form.elements.name.value);
	if (answerCat = false) {

}
}

