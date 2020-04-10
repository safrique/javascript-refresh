document.addEventListener(`DOMContentLoaded`, () => {
  //card options
  const cardArray = [
    {
      name: `blank`,
      img: `images/blank.png`
    },
    {
      name: `white`,
      img: `images/white.png`
    },
    {
      name: `bunny`,
      img: `images/bunny.png`
    },
    {
      name: `fish`,
      img: `images/fish.png`
    },
    {
      name: `dolphin`,
      img: `images/dolphin.png`
    },
    {
      name: `giraffe`,
      img: `images/giraffe.png`
    },
    {
      name: `tortoise`,
      img: `images/tortoise.png`
    },
    {
      name: `pig`,
      img: `images/pig.png`
    },
    {
      name: `duck`,
      img: `images/duck.png`
    },
    {
      name: `goat`,
      img: `images/goat.png`
    },
    {
      name: `peacock`,
      img: `images/peacock.png`
    },
    {
      name: `lion`,
      img: `images/lion.png`
    },
  ]

  const grid = document.querySelector(`.grid`)

  // create
  function createBord () {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement(`img`)
      card.setAttribute(`src`, `images.blank.png`)
      card.setAttribute(`data-id`, i)
      // card.addEventListener(`click`,flipcard)
      grid.appendChild(card)
    }
  }
})