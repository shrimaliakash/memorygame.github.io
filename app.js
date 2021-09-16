document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'apple',
			img: 'apple.jpg'
		},
		{
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'watermelon.jpg'
		},
		{
			name:'banana',
			img: 'banana.jpg'
		},
	]

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	const winnerDisplay = document.querySelector('#winner');
	var cardsChoosen  = [];
	var cardsChoosenId = [];
	var cardsWon = [];

	var card_image= document.createElement('img');
	card_image.setAttribute('src', 'blank.jpg');

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'blank.jpg');
			card.setAttribute('data-id', i);
			card.style.margin = "20px";
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChoosenId[0];
		const optionTwoId = cardsChoosenId[1];
		if(cardsChoosen[0] === cardsChoosen[1]) {
			cards[optionOneId].setAttribute('src', 'white.jpg');
			cards[optionTwoId].setAttribute('src', 'white.jpg');
			cardsWon.push(cardsChoosen);
			cards[optionOneId].setAttribute("disabled","disabled");
			cards[optionTwoId].setAttribute("disabled","disabled");
		} else {
			cards[optionOneId].setAttribute('src', 'blank.jpg');
			cards[optionTwoId].setAttribute('src', 'blank.jpg');
		}
		cardsChoosen  = [];
		cardsChoosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = cardsWon.length;
			//winnerDisplay.textContent = 'Congratulations! You them all!';
			// var head = document.getElementsByTagName('head')[0];
			// var newScript = document.createElement('script');
			// newScript.src = 'level2.js';
			// newScript.charset = 'text/javascript';
			// head.appendChild(newScript);
			//location.reload();
			
			const cardArray1 = [
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'dog',
			img: 'dog.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'fox',
			img: 'fox.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
		},
		{
			name:'elephant',
			img: 'elephant.jpg'
		},
	]

	cardArray1.sort(() => 0.5 - Math.random());

	const grid1 = document.querySelector('.grid');
	const resultDisplay1 = document.querySelector('#result');
	var cardsChoosen1  = [];
	var cardsChoosenId1 = [];
	var cardsWon1 = [];

	var card_image1= document.createElement('img');
	card_image1.setAttribute('src', 'blank.jpg');

	function createBoard1() {
		for (let i = 0; i < cardArray1.length; i++) {
			var card1 = document.createElement('img');
			card1.setAttribute('src', 'blank.jpg');
			card1.setAttribute('data-id', i);
			card1.style.margin = "20px";
			card1.addEventListener('click', flipCard1);
			grid1.appendChild(card1);
		}
	}

	function checkForMatch1() {
		var cards1 = document.querySelectorAll('img');
		const optionOneId1 = cardsChoosenId1[0];
		const optionTwoId1 = cardsChoosenId1[1];
		if(cardsChoosen1[0] === cardsChoosen1[1]) {
			cards1[optionOneId1].setAttribute('src', 'white.jpg');
			cards1[optionTwoId1].setAttribute('src', 'white.jpg');
			cardsWon1.push(cardsChoosen1);
			cards1[optionOneId1].setAttribute("disabled","disabled");
			cards1[optionTwoId1].setAttribute("disabled","disabled");
		} else {
			cards1[optionOneId1].setAttribute('src', 'blank.jpg');
			cards1[optionTwoId1].setAttribute('src', 'blank.jpg');
		}
		cardsChoosen1  = [];
		cardsChoosenId1 = [];
		resultDisplay1.textContent = cardsWon1.length;
		if(cardsWon1.length === cardArray1.length/2) {
			resultDisplay1.textContent = cardsWon1.length;
			windows.location.href = 'level2.js';
		}
	}

	function flipCard1() {
		var cardId = this.getAttribute('data-id');
		cardsChoosen1.push(cardArray1[cardId].name);
		cardsChoosenId1.push(cardId);
		this.setAttribute('src', cardArray1[cardId].img);
		if(cardsChoosen1.length == 2) {
			setTimeout(checkForMatch1, 500);
		}
	}

		}
	}

	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChoosen.push(cardArray[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		document.getElementById('sound1').play();
		if(cardsChoosen.length == 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
