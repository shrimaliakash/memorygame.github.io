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
			winnerDisplay.textContent = 'Congratulations! You them all!';
			// var head = document.getElementsByTagName('head')[0];
			// var newScript = document.createElement('script');
			// newScript.src = 'level2.js';
			// newScript.charset = 'text/javascript';
			// head.appendChild(newScript);
			location.reload();

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
