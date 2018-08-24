console.log('Your are at ' +window.location);

const heading = document.getElementsByTagName('h1');
const line = document.getElementsByTagName('p');
const lineColor = document.querySelectorAll('.line');

console.log(lineColor);


let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]


for (i=0; i<3; i++) {
	heading[i].innerHTML += crypto[i].name;
	line[i].innerHTML += crypto[i].price;
	lineColor[i].style.width = crypto[i].price / 2.5 +'px';
}

	lineColor[0].style.backgroundColor = '#CF021B';
	lineColor[1].style.backgroundColor = '#4990E2';
	lineColor[2].style.backgroundColor = '#4FE3C2';