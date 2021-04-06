'use strict'
// Задача 2.2.1
//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function() {
	// const newString = this.toLowerCase().split('').filter(element => element != ' ').join('');
	// На основе замечаний преподавателя Нуруллина Эд. let в этой задаче заменил на const.
	// Вместо метода filter() применил метод replace(/\s/g, ‘’). Действительно. это намного лучше.
	const newString = this.toLowerCase().replace(/\s/g, '');
	const reverseString = newString.split('').reverse().join('');
	return newString === reverseString;
};

// Задача 2.2.2
function getAverageMark(marks) {
    // код для задачи №2 писать здесь
	let sumMarks = 0;           // Сумма всех оценок
	let averageMark = 0;        // Средняя оценка
	let roundedAverage = 0;     // Округление среднего балла до ближайшего целого

	if (marks.length === 0) {
		return 0;
	} /*else if (marks.length > 5) {
		alert('Вы ввели количество оценок больше 5!');
		marks.splice(5);
	}*/
	for (let i = 0; i < marks.length; i++) {
		if (!marks[i]) continue;    // Пропустить null, undefined и не существующие элементы массива
		sumMarks += marks[i];
	}
		averageMark = sumMarks / marks.length;
		roundedAverage = Math.round(averageMark);

		return roundedAverage;
}

// Задача 2.2.3
function checkBirthday(birthday) {
    let now = Date.now();
	birthday = new Date(birthday).getTime();
	let diff = now - birthday;
	let age = Math.floor(diff / 31536000000);

	return age >= 18;

	// return verdict
}