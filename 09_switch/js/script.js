console.log('Your are at ' +window.location);

let answer = prompt('Введите имя музыканта');
answer = answer.toLowerCase();

switch (answer) {
	case 'dr. dre':
		console.log('Рэп');
		break;
	case 'jimmy hendrix':
		console.log('Рок');
		break;
	case 'britney spears':
		console.log('Поп');
		break;
	default:
		console.log('Хз чё это!');
		break;
}