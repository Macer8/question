const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{		
		this.type = type;
		this.questions = questions;
		this.results = results;
		this.score = 0;
		this.result = 0;
		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value;
		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1) correct = index;
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}
		this.Next();
		return correct;
	}

	Next()
	{
		this.current++;
		if(this.current >= this.questions.length) this.End();
	}

	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score)) this.result = i;
		}
	}
} 

class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value) return true;
		else return false;
	}
}

const results = 
[
	new Result("Вам многому нужно научиться", 0),
	new Result("Вы уже неплохо разбираетесь", 5),
	new Result("Ваш уровень выше среднего", 6),
	new Result("Вы в совершенстве знаете тему", 8)
];

//Массив с вопросами
const questions = 
[
	new Question("Оператор && - это", 
	[
		new Answer("и", 1),
		new Answer("или", 0),
		new Answer("не", 0),
		new Answer("равно", 0)
	]),

	new Question("Оператор || - это", 
	[
		new Answer("и", 0),
		new Answer("или", 1),
		new Answer("не", 0),
		new Answer("равно", 0)
	]),

	new Question("Что такое ECMAScript?", 
	[
		new Answer("Чей то скрипт", 0),
		new Answer("Таблица стилей", 0),
		new Answer("База данных", 0),
		new Answer("Язык программирования", 1)
	]),

	new Question("Что НЕ является принципом ООП?", 
	[
		new Answer("Уникальность", 1),
		new Answer("Полиморфизм", 0),
		new Answer("Инкапсуляция", 0),
		new Answer("Абстракция", 0)
	]),

	new Question("Кто зарегистрировал JS ?", 
	[
		new Answer("IBM", 0),
		new Answer("Oracle", 1),
		new Answer("Apple", 0),
		new Answer("Microsoft", 0)
	]),

	new Question("Что делает оператор ** ?", 
	[
		new Answer("Инкремент", 0),
		new Answer("Умножает число само на себя", 0),
		new Answer("Возводит в степень", 1),
		new Answer("Нет такого оператора", 0)
	]),

	new Question("Переменные apple и Apple (с большой буквы) – это одна и та же или разные ?", 
	[
		new Answer("Нельзя называть с большой буквы", 0),
		new Answer("Разные", 1),
		new Answer("Одна и та же", 0),
		new Answer("Нельзя использовать apple", 0)
	]),

	new Question("null == undefined ?", 
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),
		new Answer("Разные типы данных", 0),
		new Answer("Ответ NULL", 0)
	]),

	new Question("Что будет результатом ? "+ '\n' + " let arr = [1, 2, 3]" + '\n' + "arr.something = 5" + '\n' + "alert(arr.something)", 
	[
		new Answer("Ошибка", 1),
		new Answer("5", 0),
		new Answer("undefined", 0),
		new Answer("NaN", 0)
	]),

	new Question("Яблоко стоит 1.15, апельсин стоит 2.30." + '\n' + "Сколько стоят они вместе – чему равна сумма 1.15 + 2.30" + '\n' + "с точки зрения JavaScript?", 
	[
		new Answer("345", 0),
		new Answer("3.45", 0),
		new Answer("3,45", 0),
		new Answer("Ни один из вариантов", 1)
	])
];

const quiz = new Quiz(1, questions, results);
Update();

function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;
		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";
			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
			btn.setAttribute("index", i);
			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
		Init();
	}
	else
	{
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	let btns = document.getElementsByClassName("button");
	for(let i = 0; i < btns.length; i++)
	{
        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
    }
}

function Click(index) 
{
	let correct = quiz.Click(index);
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	if(quiz.type == 1)
	{
		if(correct >= 0) btns[correct].className = "button button_correct";
		if(index != correct)  btns[index].className = "button button_wrong";
	}
	else btns[index].className = "button button_correct";
	
	setTimeout(Update, 1000);
}