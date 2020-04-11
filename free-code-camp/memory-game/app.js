document.addEventListener(`DOMContentLoaded`, () => {
  //card options
  const cardArray = [
    { name: `bunny`, img: `images/bunny.png` },
    { name: `dolphin`, img: `images/dolphin.png` },
    { name: `duck`, img: `images/duck.png` },
    { name: `fish`, img: `images/fish.png` },
    { name: `giraffe`, img: `images/giraffe.png` },
    { name: `goat`, img: `images/goat.png` },
    { name: `lion`, img: `images/lion.png` },
    { name: `peacock`, img: `images/peacock.jpg` },
    { name: `pig`, img: `images/pig.png` },
    { name: `tortoise`, img: `images/tortoise.png` },
  ]

  for (let i = 0, j = cardArray.length; i < j; i++) {
    cardArray.push(cardArray[i])
  }

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(`.grid`)
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement(`img`)
      card.setAttribute(`src`, `images/blank.png`)
      card.setAttribute(`data-id`, i.toString())
      card.addEventListener(`click`, flipCard)
      grid.appendChild(card)
    }
  }

  // check for matches
  function checkForMatch () {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (cardsChosen[0] === cardsChosen[1]) {
      alert(`You found a match`)
      cards[optionOneId].setAttribute(`src`, `images/white.png`)
      cards[optionTwoId].setAttribute(`src`, `images/white.png`)
      cardsWon.push(cardsChosen)
    } else {
      alert(`Sorry, try again`)
      cards[optionOneId].setAttribute(`src`, `images/blank.png`)
      cards[optionTwoId].setAttribute(`src`, `images/blank.png`)
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = `Congratulations! You found them all!`
    }
  }

  function flipCard () {
    var cardId = this.getAttribute(`data-id`)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute(`src`, cardArray[cardId].img)

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})