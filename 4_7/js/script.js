let yourCash = null;
let yourApple = null;
let yourBread = null;

yourCash = prompt('Сколько у вас с собой денег?');
yourApple = prompt('Сколько яблок вы купили?');
yourBread = prompt('Сколько батонов хлеба вы купили?');

let appleCoast = 0;
appleCoast = prompt('Сколько стоит одно яблоко?');
let allAppleCoast = appleCoast * yourApple;

let breadCoast = 0;
breadCoast = prompt('Сколько стоит один батон хлеба?');
let allBreadCoast = breadCoast * yourBread;

let yourSpend = allAppleCoast + allBreadCoast;

yourCash > yourSpend;

let haveEnough = function (youhave, spend){
	if (spend > youhave) {
		alert('Вам не хватает денег');
	}
		else {
			alert('Вам хватает денег');
		}
}

haveEnough (yourCash, yourSpend)