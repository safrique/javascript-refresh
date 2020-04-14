let news_added = false
let inserted = 0

function latestNews () {
  let p = document.createElement(`p`)
  p.id = `news_p${inserted}`

  if (!news_added) {
    p.appendChild(document.createTextNode(`New news goes here`))
    document.body.insertBefore(p, document.getElementById(`footer`))
    news_added = true
  } else {
    p.appendChild(document.createTextNode(`Some more news...`))
    document.body.insertBefore(p, document.getElementById(`news_p${inserted - 1}`))
  }

  inserted++
}