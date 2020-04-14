let imgs = []

window.onload = () => {
  imgs = getImagesArray()
}

function showImageSources () {
  let sources = ``
  setImageLabel(sources)

  for (let i = 0, len = document.images.length; i < len; i++) {
    sources += (document.images[i].src + `<br>`)
  }

  setImageLabel(sources)
}

function setImageLabel (sources) {
  document.getElementById(`images_label`).innerHTML = sources
}

function getImagesArray () {
  let imgs = []

  for (let i = 0; i < 5; i++) {
    imgs[i] = new Image()
    imgs[i].src = `../img/image_scroll/pic_${i + 1}.jpg`
    imgs[i].name = `pic${i + 1}`
  }

  return imgs
}

function scrollImage (direction) {
  let img = document.getElementById(`scrolled_image`)
  let j = imgs.length
  let n = getImagPosition(img, j)
  n = (direction === 1 ? (n === j - 1 ? 0 : n + 1) : (n === 0 ? j : n) - 1)
  img.src = imgs[n].src
  img.name = imgs[n].name
}

function getImagPosition (img, j) {
  for (let i = 0; i < j; i++) {
    if (img.name === imgs[i].name) {
      return i
    }
  }
  return false
}