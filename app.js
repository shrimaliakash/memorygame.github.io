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
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
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
			name:'banana',
			img: 'banana.jpg'
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
			name:'grapes',
			img: 'grapes.jpg'
		},
		{
			name:'monkey',
			img: 'monkey.jpg'
		},
		{
			name:'orange',
			img: 'orange.jpg'
		},
		{
			name:'snake',
			img: 'snake.jpg'
		},
		{
			name:'stobarry',
			img: 'stobarry.jpg'
		},
		{
			name:'tiger',
			img: 'tiger.jpg'
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
			name:'banana',
			img: 'banana.jpg'
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
			name:'grapes',
			img: 'grapes.jpg'
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
			name:'grapes',
			img: 'grapes.jpg'
		},
	]

	cardArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	const winnerDisplay = document.querySelector('#winner');
	const game_over = document.querySelector('#game_over');
	const level_text = document.querySelector('#level_text');
	const score_text = document.querySelector('#score_text');
	var cardsChoosen  = [];
	var cardsChoosenId = [];
	var cardsWon = [];
	const level = document.querySelector('#level');
	let j = 1;
	
	game_over.style.display = "none";
	var card_image= document.createElement('img');
	card_image.setAttribute('src', 'blank.jpg');


	const startingMinutes = 2;
	let time = startingMinutes * 60;

	const countdownEl = document.getElementById("countdown");

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			var card = document.createElement('img');
			card.setAttribute('src', 'blank.jpg');
			card.setAttribute('id', i);
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

		setTimeout(timer, 100);
		var cardId = this.getAttribute('id');
		cardsChoosen.push(cardArray[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].img);
		document.getElementById('sound1').play();

		if(cardsChoosen.length == 2) {
			// if(cardArray[cardId].name != cardArray[cardId].name) {
			// 	setTimeout(checkForMatch, 500);
			// } else {
			// 	cardsChoosen.style.pointerEvents = "none";
			// 	this.setAttribute('src', 'blank.jpg')
			// }
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
	setTimeout(timer, 100);

	function timer() {
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		countdownEl.innerHTML = `${minutes}: ${seconds}`;
		time--;
		if(time == '-1') {
			game_over.style.display = "inline";
			grid.style.display = "none";
			resultDisplay.style.display = "none";
			countdownEl.style.display = "none";
			level_text.style.display = "none";
			score_text.style.display = "none";
			setTimeout(function () {
				location.reload(true);
			}, 5000)
		} 
	}

        function gameOver() {
			window.location.reload();
        }


});
