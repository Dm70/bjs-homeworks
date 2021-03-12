'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
	// Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита,
	// P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
	// Необходимо вывести: сумму, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)

	if (!percent || percent <= 0 || percent === '')
		return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`
	if (!contribution || contribution < 0 || contribution === '')
		return `Параметр 'Первоначальный взнос' содержит неправильное значение ${contribution}`
	if (!amount || amount <= 0 || amount === '')
		return `Параметр 'Сумма кредита' содержит неправильное значение ${amount}`
	if (!date || date === 0 || date === '')
		return `Параметр 'Количество выплачиваемых месяцев' содержит неправильное значение ${date}`

	let creditBody = amount - contribution; // Тело кредита
	let amountMonth = (date.getFullYear() - new Date().getFullYear()) * 12;   // Количество выплачиваемых месяцев

	if (!amountMonth || amountMonth < 0)
		return `Параметр 'Количество выплачиваемых месяцев' содержит неправильное значение ${amountMonth}`

	let persentRate = (percent / 12) /100;  //1/12 процентной ставки
	let paymentMonth = creditBody * (persentRate + persentRate / (((1 + persentRate) ** amountMonth) - 1));   // Ежемесячный платёж по кредиту
	let totalAmount = (paymentMonth * amountMonth).toFixed(2);

	console.log(creditBody);
	console.log(amountMonth);
	console.log(paymentMonth);
	console.log(totalAmount);

	return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
	if (!name || name === '') {
		name = 'Аноним';
	}
	let greeting;
	greeting = `Привет Мир! Меня зовут ${name}!`;
	console.log(greeting);

	return greeting;
}