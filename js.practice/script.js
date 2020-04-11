$(document).ready(function(){
	
	
	
	
	/*------------------------------------------------------*/
	
	
	
	//Калькулятор секунд
	var sec = 1;
	var minute = sec * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var week = day * 7;
	var month = week * 4;
	var year = month * 12;
	
	//Минуты
	function countSecInMin(){
		var askMin = +prompt('Кол-во минут?','');
		var secInMin = askMin * 60;
		alert('В ' + askMin + ' минутах ' + secInMin + ' секунд.');
	}
	
	var minBut = document.querySelector('.minutes');
	
	minBut.addEventListener('click', function(){
		countSecInMin();
	});
	
	//Часы
	function countSecInHour(){
		var askHour = +prompt('Кол-во часов?','');
		var secInHour = askHour * hour;
		alert('В ' + askHour + ' часах ' + secInHour + ' секунд.');
	}
	
	var hoursBut = document.querySelector('.hours');
	
	hoursBut.addEventListener('click', function(){
		countSecInHour();
	});
	
	//Дни
	function countSecInDay(){
		var askDay = +prompt('Кол-во дней?','');
		var secInDay = askDay  * day;
		alert('В ' + askDay  + ' днях ' + secInDay  + ' секунд.');
	}
	
	var dayBut = document.querySelector('.days');
	
	dayBut.addEventListener('click', function(){
		countSecInDay();
	});
	
	//Недели
	function countSecInWeek(){
		var askWeek = +prompt('Кол-во недель?','');
		var secInWeek = askWeek  * week;
		alert('В ' + askWeek  + ' неделях ' + secInWeek + ' секунд.');
	}
	
	var weekBut = document.querySelector('.weeks');
	
	weekBut.addEventListener('click', function(){
		countSecInWeek();
	});
	
	//Месяцы
	function countSecInMonth(){
		var askMonth = +prompt('Кол-во месяцев?','');
		var secInMonth = askMonth  * month;
		alert('В ' + askMonth  + ' месяцах ' + secInMonth + ' секунд.');
	}
	
	var monthBut = document.querySelector('.months');
	
	monthBut.addEventListener('click', function(){
		countSecInMonth();
	});
	
	//Года
	function countSecInYear(){
		var askYear = +prompt('Кол-во лет?','');
		var secInYear = askYear  * year;
		alert('В ' + askYear  + ' годах ' + secInYear + ' секунд.');
	}
	
	var yearBut = document.querySelector('.years');
	
	yearBut.addEventListener('click', function(){
		countSecInYear();
	});
	
	
	
	/*------------------------------------------------------*/
	
	
	//Комбинаторика
	function initComb(){
		var elemCount = +prompt('Область комбинаций','');
		if(elemCount){
			var combCount = +prompt('Кол-во цифр в комбинации','');
			if(combCount){
				var result= 1;
				for(var i = 0; i < combCount; i++ ){
					result = elemCount * result;
				}
				alert('В области из ' + elemCount + ' чисел возможны '+ result + ' комбинаций, по ' + combCount + ' числа в каждой.');
			}
		}
	}
	
	var combBut = document.querySelector('.combBut');
	
	combBut.addEventListener('click', function(){
		initComb();
	});
	
	
	
	/*------------------------------------------------------*/
	
	
	//ВИСЕЛИЦА
	function initGameNormal(){
		
	var libArr = ['дельфин','медведь','жираф','слон','волк','лемур','кенгуру','ленивец','обезьяна','тигр','лев','морж','кролик','заяц','лиса'];
	var ranLibWord = libArr[Math.floor(Math.random()*libArr.length)];
	var hidWord = [];
	
	for(var i = 0; i < ranLibWord.length; i++){
		hidWord[i] = '_';
	}
		var remainingLetters = ranLibWord.length;
		var tries = ranLibWord.length * 2;

		while(remainingLetters > 0 && tries > 0){
			alert(' Какое животное живет в зоопарке? Это ' + hidWord.join(' '));
			var ask = prompt('Буква','').toLowerCase();
			if(ask == null){
				break;
			} else if (ask.length !== 1){
				alert('Одну букву за раз','');
			} else {
				for(var i = 0; i < ranLibWord.length; i++){
					if( ask == ranLibWord[i] && hidWord [i] == '_'){
						hidWord[i] = ask;
						remainingLetters--;
					} 
				}
				tries--;
				alert(tries + ' попыток осталось');
				if(tries == 0){
					alert(' Попытки кончились :( Вы не угадали животное ' + ranLibWord.toUpperCase());
				}
			}
			if(remainingLetters == 0 ){
					alert('Ура!!! ' + hidWord.join('').toUpperCase() + ' живет в Зоопарке!');
			}
		}	
	}
	
	var normHangBut = document.querySelector('.normHangBut');
	
	normHangBut.addEventListener('click',function(event){
		event.preventDefault();
		initGameNormal();
	});
	

	/*------------------------------------------------------*/
	

	//Виселица функциями
	function initGameFun(){
		
		function getRandomWord (){
			var wordArray = ['one','two','thre','four','five','six','seven','eight','nine','ten'];
			return wordArray[Math.floor(Math.random() * wordArray.length)];
		}

		var randomWord = getRandomWord();//генератор случайного слова

		function getAnswerArray(randomWord){
			var answer = [];
			for( var i = 0; i < randomWord.length; i++){
				answer[i] = '_';
			}
			return answer;
		}

		var answerWord = getAnswerArray(randomWord);//прячет случайное слово

		function showProgress(answerWord){//отображает прогресс игры
			return alert('Guess '+answerWord+' number');
		}

		function askLetter(){
			return prompt(' Enter a letter','').toLowerCase();//запрашивает букву
		}

		var guesedLetters = randomWord.length;
		var guessTries = guesedLetters * 2;

			while(guesedLetters > 0){
				showProgress(answerWord.join(' '));
				var letter = askLetter();
				if (letter == null){
					break;
				} else if (letter.length !== 1){
					alert(' Pease enter one simbol at a time','');
				} else {
					for ( var i = 0; i < randomWord.length; i++ ){
						if (letter === randomWord[i] && answerWord[i] === '_'){
							answerWord[i] = letter;
							guesedLetters--;
						}
					}
					guessTries--;
					alert(guessTries + ' tries left');
					if(guessTries == 0){
						alert('U lose');
						break;
					}
				}

				if(guesedLetters == 0){
					alert(' U won! The number is ' + randomWord.toUpperCase() + '!');
				}
			}
	}
	
	var funHangBut = document.querySelector('.funHangBut');
	
	funHangBut.addEventListener('click',function(event){
		event.preventDefault();
		initGameFun();
	});
	

	/*------------------------------------------------------*/

	//array comparison
	var firstArr = ['1','2','3','5','5','6'];
	var secondArr = ['1','2','3','4','5','6'];
	
	function compareArr(a,b){
		
		if (a.length !== b.length){
			return alert('Разный размер массивов');
		}
		
		for(var i = 0; i < a.length; i++){
			if (a[i] !== b[i]) {
				return alert('Массивы не равны. Отличаются ' + (i + 1) + ' элементы массивов. В массиве "a" значение = '+ a[i] + '. В массиве "b" = ' + b[i] + '.');	
			}//без else тк он выдает результат только первой итерации
		}
		
		return alert('Массивы равны');
	};
	
	//compareArr(firstArr,secondArr);


	/*------------------------------------------------------*/
	$('body').hide().fadeIn(2000);
	
	var inter = 1000;
	for(var i = 0; i < 5; i++){
		$('h1').fadeTo(inter,0).fadeTo(inter,1);
		inter += inter;
	}
	
	//Добавлялка
	function adder(){
	var addVal = prompt(' Что добавим?','');
		if(addVal == ''){
			addVal = null;
		}else{
			$('.adding .area').append('<li>' + addVal + '</li>');
		}
	}
	
	var addBtn = document.querySelector('.addBtn');
	addBtn.addEventListener('click', function(event){
		event.preventDefault();
		adder();
	});
	
	/*------------------------------------------------------*/
	
	//Таймаут
	function inintTimeOut(){
		alert('Проснись и пой');
	}
	var timeOut = setTimeout(inintTimeOut, 5000);
	clearTimeout(timeOut);
	
	//Интервал
	var sec = 1;
	function initInterval(){
		alert(sec);
		sec++;
	}
	
	var interval = setInterval(initInterval,1000);
	clearInterval(interval);
	
	//Клик координаты
	
	/*function xY(event){
		alert(event.pageX + event.pageY);
	}*/
	
	//Выдает координаты body в блок xy-field
	$('body').click(function(event){
		$('.x-field').text(event.pageX);
		$('.y-field').text(event.pageY);
	});
	
	//Двигает методами .mousemove и .click,folow-item за курсором
	
	/*$('.click-reactions').mousemove(function(event){
		$('.folow-item').offset({
			left:event.pageX,
			top:event.pageY});
	});*/
	
	//Игра с шариком
	var direction = 'right';
	var offset = 0;
	
	$('.click-ball').offset({left:offset, top:offset});
	
	var initBallGame = function(){
		if(direction === 'right'){
			$('.click-ball').offset({left:offset});
			offset++;
			if(offset > 200){
				offset = 0;
				direction='down';
			}
		} else if (direction === 'down'){
			$('.click-ball').offset({top:offset});
			offset++;
			if(offset > 200){
				offset = 200;
				direction = 'left';
			}
		} else if (direction ==='left'){
			$('.click-ball').offset({left:offset});
			offset--;
			if (offset <= 0){
				offset = 200;
				direction = 'up';
			}
		} else if (direction ==='up'){
				$('.click-ball').offset({top:offset});
			offset--;
			if(offset <=0){
				offset = 0;
				direction = 'right';
			}
		}
	};
	var intervalLength = 30;
	var ballGameId = setInterval(initBallGame,intervalLength);
	var ballClickCount = 0;
	
	$('.click-ball').click(function(){
		clearInterval(ballGameId);
		intervalLength / 2;
		ballClickCount++;
		$('.click-ball').text(ballClickCount);
		if( ballClickCount === 3){
			$('.click-ball').text('Хватит');
		} else {
			var ballGameId = setInterval(initBallGame,intervalLength);
		}
	});
	
	
	//----------------------------------------------------//
	//Рекурсия
	
	 function recursion(itemsNumber){
		 itemsNumber--;
		 console.log(itemsNumber);
		 
		 if( itemsNumber > 0){
			 recursion(itemsNumber);// Вызов фунукии в самой себе.
			 
		 } 
		 
	 }
	
	recursion(10);
	
	//Игра найди клад
	
	//Случайная точка на карте
	var mapWidth = 400;
	var mapHeight = 400;
	var treasureClick = 0;
	
	var treasureLocation = {
		x:Math.floor(Math.random() * mapWidth),
		y:Math.floor(Math.random() * mapHeight)
	};
	//Вычисления дистанции от евента до случайной точки(гипотенуза)
	var getDistance = function(event,treasureLoacation){
		var diffX = event.offsetX - treasureLocation.x;
		var diffY = event.offsetY - treasureLocation.y;
		return Math.floor(Math.sqrt((diffX * diffX)+(diffY * diffY)));
	};
	//Подсказка о расстоянии для игрока
	var distanceHint = function(distance){
		if(distance <= 30){
			return 'В яблочко';
		}else if (distance <= 50){
			return 'Очень близко';
		} else if (distance <= 100){
			return 'Ближе';
		} else if ( distance <= 200){
			return 'Далеко';
		} else if (distance <= 300){
			return 'Очень далеко';
		} else{
			return 'Дальше некуда';
		}
	};
	
	$('.treasure-map').click(function(){
		treasureClick++;
		var distance = getDistance(event,treasureLocation);
		var hint = distanceHint(distance);
		$('.plr-interact').text(hint + ' и ' + treasureClick + ' кликов сделанно.');
	});
	
	//----------------------------------------------//
	//Функция шаблон для обьектов cat и dog
	var talk = function(){
		console.log('My name is ' + this.name + ' i am ' + this.gender + ' ' + this.years +' years old, '+ this.says);
	}
	
	var cat = {
		name:'Tom',
		gender:'male',
		years:5,
		says:'meow',
		talk:talk
	}
	
	var dog = {
		name:'Spike',
		gender:'male',
		years:8,
		says:'woff',
		talk:talk
	}
	

	//Вызов функции для одного из обьектов 
	cat.talk();//dog.talk();
	
	//Конструктор
	var Car = function (x, y,color){
		this.x = x;
		this.y = y;
		this.color = color;
	}
	//создаем обьекты с помощью Конструктора передавая в них аргументы
	var tesla = new Car(50,50,'blue');
	var porche = new Car(200,100,'red');
	var toyota = new Car(450,50,'black');
	var honda = new Car(700,100,'#f2f2f2');
	
	//Отображение обьектов на странице
	var drawCar = function(car){
		
		var carHtml = '<div>'+ car.color +'</div>';// разметка
		
		var carElement = $(carHtml);// преобразование в JQuery
		
		//Описание
		carElement.css({
			position:'absolute',
			width: 50,
			height: 50,
			borderRadius:50,
			background:car.color,
			color:'#f2f2f2',
			top:car.y,
			left:car.x
		});
		//добавление на страницу
		$('.oop-fun').append(carElement);
	};
	
	//Вызов вункции отрисовкb
	drawCar(tesla);
	drawCar(porche);
	drawCar(toyota);
	drawCar(honda);
	
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
	
	//То-же самое но используя прототип
	
	//конструктор
	var Block = function(x,y,color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.build();// Вызов прототипа отображения непосредственно в теле конструктора.
	}
	
	//прототип отображения
	Block.prototype.build = function(){
		
		var blockHtml = '<div></div>';
		
		this.blockElem = $(blockHtml);
		
		this.blockElem.css({
			position:'absolute',
			width:50,
			height:50,
			top:this.y,
			left:this.x,
			background:this.color
		});
		
		$('.oop-prot').append(this.blockElem);	
	};
	
	//прототипы движения
	Block.prototype.moveRight = function(dist){
		this.x += dist;
		
		this.blockElem.css({
			top:this.y,
			left:this.x
		});
	};
	
	Block.prototype.moveLeft = function(dist){
		this.x -= dist;
		
		this.blockElem.css({
			top:this.y,
			left:this.x
		});
	};
	
	Block.prototype.moveDown = function(dist){
		this.y += dist;
		
		this.blockElem.css({
			top:this.y,
			left:this.x
		});
	};
	
	Block.prototype.moveUp = function(dist){
		this.y -= dist;
		
		this.blockElem.css({
			top:this.y,
			left:this.x
		});
	};
	
	//Создаем блоки
	var red = new Block(100,100,'red');
	var black = new Block(250,50,'black');
	var green = new Block(500,100,'green');
	var orange = new Block(600,0,'orange');
	
	
	//Функции анимации блоков
	$('.move-blocks').click(function(event){
		event.preventDefault();
		
		$('.move-blocks').css({display:'none'});
		$('.return-blocks').css({display:'block'});
		
		var blockInterForward = setInterval(function(){
			black.moveLeft(Math.floor(Math.random() * 15));
			red.moveUp(Math.floor(Math.random() * 25));
			green.moveDown(Math.floor(Math.random() * 35));
			orange.moveRight(Math.floor(Math.random() * 45));
		}, 20);
		
		
		$('.stop-blocks').click(function(event){
			event.preventDefault();

			clearInterval(blockInterForward);
		});
		
	});
	
	$('.return-blocks').click(function(event){
		event.preventDefault();
		
		$('.move-blocks').css({display:'block'});
		$('.return-blocks').css({display:'none'});
		
		var blockInterBackward = setInterval(function(){
			black.moveRight(Math.floor(Math.random() * 5));
			red.moveDown(Math.floor(Math.random() * 5));
			green.moveUp(Math.floor(Math.random() * 5));
			orange.moveLeft(Math.floor(Math.random() * 5));
		}, 20);
		
		$('.stop-blocks').click(function(event){
			event.preventDefault();

			clearInterval(blockInterBackward);
		});
		
	});
	
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//Рекурсия

	function factorial(n){
		if(n == 1) return 1;
		return n * factorial(n-1);
		
	};
	console.log(factorial(5)); 

	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//Перебор ключей в обьекте

	var names = {
		a: 50,
		b: 35,
		c: 65,
		d: 70
	};

	//Найти сумму всех значений ключей
	function findSum(){
		var sumNum = 0;
		for(key in names){
			sumNum += names[key];
		}
		return 'Сумма ключей равна : ' + sumNum;
	}

	console.log(findSum(names));


	//Найти максимальное значение ключа
	function findMax(){
		var maxNum = 0;
		var maxName = '';
		for(key in names){
			if(maxNum < names[key]){
				maxNum = names[key];
				maxName = key;
			}
		}
		return 'Имя ' + maxName + ', номер ' + maxNum;

	};

	console.log(findMax(names));

	//Найти минимальное значение ключа
	function findMin(){
		var minNum = Infinity;
		var minName = '';
		for(key in names){
			if(minNum > names[key]){
				minNum = names[key];
				minName = key;
			}
		}
		return 'Имя ' + minName + ', номер ' + minNum;
	};

	console.log(findMin(names));



	console.log(Object.keys(names));//Представить ключи обьекта в виде массива.

	console.log(Object.keys(names).length);//Определить длинну обьекта/массива по ключам.


	//Перемножить значение каждого ключа на 2
	var numVal ={
		width: 100,
		height: 300
	};

	function multVal (){
		for (key in numVal){
			numVal[key] *= 2;
			console.log(key + ': ' + numVal[key]); 
		}
	};

	multVal(numVal);

	//Массивы.Фильтр диапазона.Возвращает значения массива 'arr' больше 'a' и меньше 'b'

	var filterArr = [4,6,3,1,5,2,9,8,7,10];

	function findRange (arr,a,b){
		var range =[];

		for(var i = 0; i<arr.length; i++){
			if(arr[i] >= a && arr[i] <= b){
				range.push(arr[i]);
			}	
		}

		function sortNum(a,b){
			if(a > b) return 1;
			if(a < b) return -1;
		}
		return range.sort(sortNum) + ' Диапазон от ' + a + ' до ' + b ;
	}

	console.log(findRange(filterArr,4,9));

	//split('') - join наоборот
	var splitArr = 'abcdefg'.split('');//Делит строку разделителем ('') преобразуя в массив.
	console.log(splitArr);

	//slice
	var filterArrSliced = filterArr.slice(0,3);//Копирует часть массива (от 0, до 3) в новый не меняет оригинальный массив
	console.log(filterArrSliced);

	//splice
	filterArr.splice(3,1,'inserted');/* Вырезает с 3й позиции массива 1 элемент, заменяет его "inserted".
	(Если кол-во удаляемых элементов 0 то просто вставит на след позицию 'inserted')*/
	console.log(filterArr);

	/*sort(fn) 
	Методу необходима функция определяющая способ сравнения элементов.
	По умолчанию сортирует как строковые элементы*/
	function compareNum(a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
	  }
	filterArr.sort(compareNum);
	
	console.log(filterArr);
	
	//reverse меняет порядок элеметров массива на обратный
	var reverseFilterArr = filterArr.reverse();
	console.log(reverseFilterArr);

	//Object.keys(obj) возвращает ключи обьекта в виде массива
	var namesArr = Object.keys(names);
	console.log(namesArr);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Добавляем значение в ключ className 
	var clsObj = {
		className:'open menu menu open'
	}

	function addClass(obj,cls){/*Функция добавления класса*/
		var objArr = obj.className.split(' ');//преобразование строки в массив
		for(var i = 0; i < objArr.length; i++){//проверка на наличие такого-же элемента массива
			if(objArr[i] == cls) return;//выход из функции в случае совпадения элементов массива и cls
		}
		objArr.push(cls);//добавление элемента прошедшего проверку в массив 
		obj.className = objArr.join(' ');//преобразование массива к строке с разделителем (' ')
	};

	function removeClass(obj,cls){/*Функция удаления класса*/
		var objArr = obj.className.split(' ');
		for(var i = 0; i < objArr.length; i++){
			if(objArr[i] == cls){
				objArr.splice(i,1);/*после splice след элемент  встает на место удаленного и цикл перескакивает
				через него*/ 
				i--;//Декримент возращает цикл на шаг назад.
			}
		}
		obj.className = objArr.join(' ');
	};

	addClass(clsObj,'new');
	addClass(clsObj,'old');
	addClass(clsObj,'menu');
	addClass(clsObj,'open');
	removeClass(clsObj,'menu');


	console.log(clsObj);

// Преобразование строки в верблюда.
	function camelizeStr(str){
		var strArr = str.split('-');
		for(var i = 1; i < strArr.length; i++){
			strArr[i] = strArr[i].charAt(0)/*Выберает в строке символ с индексом 0*/.toUpperCase() + strArr[i].slice(1);
		}
		return strArr.join('');
	};

	console.log(camelizeStr('les-les-les-les-miserables-'));


//Поиск по значению во вложенных обьектах
	var objList = {

		catty:{
			name: 'Catherine',
			age:'35',
			gender:'female'
		},

		henry:{
			name: 'Henry',
			age:'30',
			gender:'male'	
		},

		richard:{
			name: 'Richard',
			age:'29',
			gender:'male'	
		},

		billy:{
			name: 'Billy',
			age:'12',
			gender:'male'	
		},
		rosemary:{
			name: 'Rosemary',
			age:'17',
			gender:'female'	
		},
		jack:{
			name: '',
			age:'',
			gender:''	
		}
   }
   
   function findOldestDude (list){//Находит обьект с наибольшим значением age 
	   var result = 0;
	   var dudeName = '';
	   for(key in list){
		   if(list[key].age > result){
			   result = list[key].age;
			   dudeName = list[key].name;
			}
		}

		return dudeName+ ' is the oldest from the list, '+result+' years old'
	}
	console.log(objList);
	console.log(findOldestDude(objList));

//Фильтр по полу
	function genderFilter(list){
		var females = [];
		var males = [];
		for(key in list){
			if(list[key].gender == 'female'){
				females.push(list[key].name);
			} else {
				males.push(list[key].name);
			}
		}
		return females.join(' and ') + ' are girls. ' + males.join(', ') + ' are boys.'
	};

	console.log(genderFilter(objList));


//Полное клонирование обьекта
	function cloneObj(obj){
		var clone = {};
		for(key in obj){
			clone[key] = obj[key];
		}

		return clone;
	};
/*После клонирования, изменения в ключах richardObj не повлияют на objList.richard
Клонирование обьекта objList скопирует его, но вложенные обьекты останутся ссылками*/
	var richardObj = cloneObj(objList.richard);
	richardObj.age = 99;
	console.log(richardObj.age.toString());//Клон
	console.log(objList.richard.age);//Оригинал

	//Фильтрация массива на месте 

	var inPlaceArr = [1,2,3,4,5,6,7,8,9,10];

	function filterInPlace (arr,a,b){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < a || arr[i] > b){
				arr.splice(i,1);
				i--;
			}
		}
	};

	filterInPlace(inPlaceArr,3,6);
	console.log(inPlaceArr);

//Односвязный список

	var list = {
		value:1,
		next:{
			value:2,
			next:{
				value:3,
				next:{
					value:4,
					value: null
				}
			}
		}
	}

/*Перебор значений Односвязного списка циклом*/
	function prtintList(obj){
		var temp = obj;
		while(temp){
			console.log('value ' + temp.value);
			temp = temp.next;
			if(temp.next == null) return;
		};
	};

	prtintList(list);


/*Перебор значений Односвязного списка рекурсией*/
	function printRecursion (obj){

		if(obj.value != null){
			console.log(obj.value);
		}
		if(obj.next){
			printRecursion(obj.next);
		}
	};

	printRecursion(list);


// !!!!!!!!!!!!!!!!!!!!ПЕРЕБИРАЮЩИЕ МЕТОДЫ!!!!!!!!!!!!!!!!!!!


// forEach перебор каждого элемента, вернет сам элемент, его позицию в массиве, и сам массив.

	firstArr.forEach(function(item,i,arr){
		console.log(item,i,arr);
	});

// filter вернет только те элементы массива для которых функция вернет true

	var filterMethod = firstArr.filter(function(item){
		return item > 2 && item < 6;
	});

	console.log(filterMethod);

// map вернет новый масиив состоящий из результата callback для каждого элемента

	var mapCallback = ['HTML','CSS','JavaScript'];

	var mapResult = mapCallback.map(function(element){
		return element.length;
	});

	console.log(mapResult);

// every/some

//Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.

	var everyArr = firstArr.every(function(element){
		return element > 0;
	});

	console.log(everyArr);

//Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.

	var someArr = firstArr.some(function(element){
		return element == 2;
	});

	console.log(someArr);

//reduce/reduceRight

	var simpleNumArr = [1,2,3,4,5];

	var reduceVar = simpleNumArr.reduce(function(sum,current){
		return sum + current;
	}, 0);

	console.log(reduceVar);

	/*Задачки*/
	
	var arr = ["Есть", "жизнь", "на", "Марсе"];

	var arrLength = arr.map(function(item){
  	return item.length;
	});


	console.log( arrLength ); // 4,5,2,5


	function getMidSum (arr){
		var result = [];

		 arr.reduce(function (prev,current){
			result.push(prev + current);
			return prev + current;
		},0);
		
		return result;
	};

	console.log(getMidSum(simpleNumArr));
	console.log(getMidSum([-2,-1,0,1]));
////////////////////////////////////////////
// Деконструкция обьекта
	const LOCAL_FORECAST = {
		today: { min: 72, max: 83 },
		tomorrow: { min: 73.3, max: 84.6 }
	};

	function getLocalForecast(forecast){
		let {today: {min: todayMinTemp}, //ссылки на значение значений обьекта в новые переменные
		today:{max:todayMaxTemp},
		tomorrow:{min: tomorrowMinTemp},
		tomorrow:{max:tomorrowMaxTemp}} = forecast;//указание исходного обьекта

		let temp = [todayMinTemp,todayMaxTemp,tomorrowMinTemp,tomorrowMaxTemp];//массив из назначенных переменых
		return temp;
	}

	console.log(getLocalForecast(LOCAL_FORECAST));

// Rest оператор
	const decArr = [1,2,3,4,5,6,7,8,9];

	function copyDecArr (arr){
		let newDecArr = [...arr];//Копирование массива с помощью rest оператора на месте
		arr[0] = 5;
		console.log(`${arr} измененный входящий массив`);
		console.log(`${newDecArr} скопированный входящий массив`);
	};

	copyDecArr(decArr);


	function removeFirst(arr){
		let [,,,,,...result] = arr;//удаление элементов массива с помощью rest оператора
		return result;
	}

	console.log(removeFirst(decArr));

//
	let obj1 = {
		width:1,
		height:2,
		weight:3,
		setParams (width,weight,height){// Литералы функции в обьекте в ES6
			this.width = width;
			this.height = height;
			this.weight = weight;
		},
		logParams (){// Литералы функции в обьекте в ES6
			console.log(`width: ${this.width}`,`height: ${this.height}`,`weight: ${this.weight}`)
		}
	};

	obj1.setParams(447,500,323);
	obj1.logParams();


	let initYolo = ({width,height,weight}) => width + height + weight;/*функция принимает ключи обьекта  в виде
	агрументов и использует их на месте*/
	console.log(initYolo(obj1))


//Regular Expressions/Regex проверка строки на наличие совпадения
	
	let rexString = 'Somwere in the mountains goat screams can be heard';


	let rexArr = rexString.split(' ');//старый способ
	for( let i = 0; i < rexArr.length; i++ ){
		if (rexArr[i] == 'goat'){
			console.log(`found a ${rexArr[i]}`);
		}
	}


	let goatCheck = /goat/;//Новый способ метод .test() вернет true/false
	console.log(goatCheck.test(rexString));

	let rexAnimals = 'cat and fish';
	let animalCheckOr = /goat|dog|cat|deer/ // оператор "или" вернет true если хотябы один из вариантов верен
	console.log(animalCheckOr.test(rexAnimals));

	let diffCase  = 'Cats Go to thE  FoResT TO HUNt';
	let caseCheck = /caTs|foREST/i;// метка "i" игнорирует разницу заглавных и прописных букв в проверке regex 
	console.log(caseCheck.test(diffCase));

	let checkFish = /fish/;
	let extRegex = rexAnimals.match(checkFish);//метод .match() ищет в строке совпадение и возвращает его
	console.log(extRegex);

	let starStr = 'twincle,TWINCLE little star 1234678';
	let twinCheck = /twincle/gi;/* метка 'g' проверит regex на все совпадения в строке и вернет их массив, 
	('i') проверит независио от регистра*/ 
	console.log(starStr.match(twinCheck));

	console.log(starStr.match(/[a-z1-9]/gi));/*проверит на наличние все символы от a до z и от 1 до 9 (10 это уже два 
	символа проверка пойдет на 1 и 0)*/

	console.log(starStr.match(/[^abctiw0-5]/gi))// вернет все кроме указанных символов


	

});


