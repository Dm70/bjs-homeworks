'use strict'
// Задача 2.1.1
function getSolutions( a, b, c ) {
	let D = Math.pow(b, 2) - 4 * a * c; // Вычисление дискриминанта
	/*let valEquation = {
		D: D,
		roots: [],
	};*/
	let x1; // Первый корень квадратного уравнения при D = 0
	let x2; // Второй корень квадратного уравнения при D > 0

	if (D < 0) {
		return {
			D: D,
			roots: []
		};
	} else if (D === 0) {
		x1 = -b / (2 * a);
		return {
			D: D,
			roots: [x1]
		}
	} else if (D > 0) {
		x1 = ((-b + Math.sqrt(D)) / (2 * a));
		x2 = ((-b - Math.sqrt(D)) / (2 * a));
		return {
			D: D,
			roots: [x1, x2]
		}
	}
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b, c );
	if (result.D < 0) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${result.D}\n Уравнение не имеет вещественных корней`;
	} else if (result.D === 0) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${result.D}\n Уравнение имеет один корень X₁ = ${result.roots [0]}`;
	} else if (result.D > 0) {
		return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n Значение дискриминанта: ${result.D}\n Уравнение имеет два корня. X₁ = ${result.roots [0]}, X₂ = ${result.roots [1]}`;
	}

	return result;
}
showSolutionsMessage(1, 2, 4);

// Задача 2.1.2
function getAverageMark(marks) {
	let sumMarks = 0;
	let averageMark = 0;

	if (marks.length === 0) {

		return 0;
	}

	for (let i = 0; i < marks.length; i++) {
		if (!marks[i]) continue;    // Пропустить null, undefined и не существующие элементы массива
		sumMarks += marks[i];
	}
	averageMark = sumMarks / marks.length;

	return averageMark;
}

function getAverageScore(data) {
	let averageScore = {};
	for (let subject in data) {
		averageScore[subject] = getAverageMark(data[subject]);
	}

	let averageScoreArray = [];
	for (let subject in averageScore) {
		averageScoreArray.push(averageScore[subject])
	}

	averageScore.average = getAverageMark(averageScoreArray);

	return averageScore;
}

// Задача 2.1.3
function getPersonData(secretData){
	let firstName = getDecodedValue(secretData.aaa);
	let lastName = getDecodedValue(secretData.bbb);

	return {
		firstName,
		lastName,
	}
}

function getDecodedValue(secret) {
	const secretName = {
		0: 'Родриго',
		1: 'Эмильо',
	};
	return secretName[secret];
}