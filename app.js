document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name:'apple',
			img: 'images/apple.jpg'
		},
		{
			name:'banana',
			img: 'images/banana.jpg'
		},
		{
			name:'orange',
			img: 'images/orange.jpg'
		},
		{
			name:'grapes',
			img: 'images/grapes.jpg'
		},
		{
			name:'stobarry',
			img: 'images/stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'images/watermelon.jpg'
		},
		{
			name:'apple',
			img: 'images/apple.jpg'
		},
		{
			name:'grapes',
			img: 'images/grapes.jpg'
		},
		{
			name:'orange',
			img: 'images/orange.jpg'
		},
		{
			name:'stobarry',
			img: 'images/stobarry.jpg'
		},
		{
			name:'watermelon',
			img: 'images/watermelon.jpg'
		},
		{
			name:'banana',
			img: 'images/banana.jpg'
		},
	]

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	var cardsChoosen  = [];
	var cardsChoosenId = [];
	var cardsWon = [];

	var card_image= document.createElement('img');
	card_image.setAttribute('src', 'images/blank.jpg');

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.jpg');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	function checkForMatch() {
		var cards = document.querySelectorAll('img');
		const optionOneId = cardsChoosenId[0];
		const optionTwoId = cardsChoosenId[1];
		if(cardsChoosen[0] === cardsChoosen[1]) {
			alert('You find a match');
			cards[optionOneId].setAttribute('src', 'images/white.jpg');
			cards[optionTwoId].setAttribute('src', 'images/white.jpg');
			cardsWon.push(cardsChoosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.jpg');
			cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
			alert('Sorry, try again');
		}
		cardsChoosen  = [];
		cardsChoosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if(cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congratulations! You them all!';
		}
	}

	function flipCard() {
		var cardId = this.getAttribute('data-id');
		cardsChoosen.push(cardArray[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		if(cardsChoosen.length == 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
