function showImageSources () {
  let sources = ``

  for (let i = 0, len = document.images.length; i < len; i++) {
    sources += (document.images[i].src + `<br>`)
  }

  document.getElementById(`images_label`).innerHTML = sources
}