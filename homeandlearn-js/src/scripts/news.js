let news_added = false
let inserted = 0

function latestNews () {
  let p = document.createElement(`p`)
  p.id = `news_p${inserted}`

  let text = (news_added ? `Some more news...` : `New news goes here`)
  p.appendChild(document.createTextNode(text))

  let id = (news_added ? `news_p${inserted - 1}` : `footer`)
  document.body.insertBefore(p, document.getElementById(id))

  news_added = true
  inserted++
}