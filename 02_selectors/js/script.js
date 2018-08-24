console.log('Your are at ' +window.location)
const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelector = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(allBySelector);
console.log(firstBySelector);

const quest = prompt('Что написать на странице?');

byId.innerHTML = '<h2>'+ quest + '</h2>';
firstBySelector.innerHTML = "<h2>Hello! I'm first div!</h2>";