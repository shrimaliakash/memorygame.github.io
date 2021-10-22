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
		}
	]

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	const winnerDisplay = document.querySelector('#winner');
	var cardsChoosen  = [];
	var cardsChoosenId = [];
	var cardsWon = [];
	const level = document.querySelector('#level');
	let j = 1;

	var card_image= document.createElement('img');
	card_image.setAttribute('src', 'blank.jpg');

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'blank.jpg');
			card.setAttribute('id', i);
			card.style.margin = "5px";
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
			cards[optionOneId].style.pointerEvents = "none";
			cards[optionTwoId].style.pointerEvents = "none";
		} else {
			cards[optionOneId].setAttribute('src', 'blank.jpg');
			cards[optionTwoId].setAttribute('src', 'blank.jpg');
		}
		cardsChoosen  = [];
		cardsChoosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length === 18 * j) {
			resultDisplay.textContent = cardsWon.length;
			for (let i = 0; i < cardArray.length; i++) {
				var card = document.querySelector('img');
				grid.removeChild(card);
			}
			j++;
			level.innerHTML = j;
			createBoard();
		}
	}

	function flipCard() {
		var cardId = this.getAttribute('id');
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
