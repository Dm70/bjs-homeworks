function getResult(a,b,c){
    'use strict'
	// код для задачи №1 писать здесь   //2x^2+4x-3=0, D = b² - 4ac
	let D = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (D < 0) {
    	return x;
    } else if (D === 0) {
    	x.push((-b + Math.sqrt(D)) / (2 * a));
    	return x;
    } else if (D > 0) {
	    x.push((-b + Math.sqrt(D)) / (2 * a));
	    x.push((-b - Math.sqrt(D)) / (2 * a));
	    return x;
    }

    // return x;
}

function getAverageMark(marks){
	'use strict'
    // код для задачи №2 писать здесь
	let sumMarks = 0;
	let averageMark = 0;

	if (marks.length === 0) {
		return 0;
	} else if (marks.length > 5) {
		alert('Вы ввели количество оценок больше 5!');
		marks.splice(5);
	}
	for (let i = 0; i < marks.length; i++) {
		if (!marks[i]) continue;    // Пропустить null, undefined и не существующие элементы массива
		sumMarks += marks[i];
	}
		averageMark = sumMarks / marks.length;

        return averageMark;
}

function askDrink(name,dateOfBirthday){
	'use strict'
    // код для задачи №3 писать здесь
	let myName = name;
	let fullYears = dateOfBirthday.getFullYear();
	let currentDate = new Date().getFullYear();
	let result = currentDate - fullYears;

	return (result > 18) ? alert('Не желаете ли олд-фэшн ' + myName +'?') : alert('Сожалею, ' + myName + ', но' +
		' я не' +
		' могу' +
		' вам' +
		' продать алкоголь. Могу предложить вам замечательный клюквенный компот!');
    // return result;
}