window.addEventListener('load', () => {
  let resource_location = `./homeandlearn-js/src`
  let main_container_div_id = `main_container_div`
  let parts = []
  let menu_id = `menu`

  let main_container_div = setMainContainerDiv(main_container_div_id)
  document.body.appendChild(main_container_div)
  main_container_div.appendChild(setH1(`main_h1`))

  setElements()
  setMenu()
  setBackGround()

  function setElements () {
    parts.push({ 'id': `welcome_popup_div`, 'text': `Click me for welcome popup` })
    parts.push({ 'id': `height_div`, 'text': `Show screen height div` })
    parts.push({ 'id': `show_menu_button`, 'text': `` })
  }

  function setMenu () {
    for (let i = 0, j = parts.length; i < j; i++) {
      removeElement(parts[i].id)
    }

    let l = document.createElement(`ol`)
    l.id = menu_id

    for (let j = 0, k = parts.length; j < k; j++) {
      if (parts[j].id !== `show_menu_button`) {
        let part = parts[j]
        let i = document.createElement(`li`)
        i.style.marginBottom = `25px`
        let a = document.createElement(`a`)
        a.innerHTML = part.text
        a.href = `#`
        a.onclick = () => buildElement(part.id, part.text)
        a.style.background = `silver`
        a.style.padding = `10px`
        a.style.borderRadius = `5px`
        i.appendChild(a)
        l.appendChild(i)
      }
    }

    document.getElementById(main_container_div_id).appendChild(l)
  }

  function setMenuButton (id) {
    let b = document.createElement(`button`)
    b.id = id
    b.innerHTML = `Show Menu`
    b.onclick = () => setMenu()
    b.style.backgroundColor = `#4CAF50` /* Green */
    b.style.border = `none`
    b.style.color = `white`
    b.style.padding = `15px 32px`
    b.style.textAlign = `center`
    b.style.textDecoration = `none`
    b.style.display = `inline-block`
    b.style.marginTop = `2em`
    b.style.borderRadius = `5px`
    b.style.cursor = `pointer`
    return b
  }

  function removeElement (id) {
    let element = document.getElementById(id)
    if (element !== null) {
      console.log(`id=${id}`, element)
      element.parentNode.removeChild(element)
    }
  }

  function setMainContainerDiv (id) {
    let body = document.createElement(`div`)
    body.id = id
    body.style.padding = `1em 2em`
    body.style.padding = `1em 2em`
    return body
  }

  function setH1 (id) {
    let h1 = document.createElement(`h1`)
    h1.id = id
    h1.innerHTML = `JavaScript Review`
    h1.style.background = `cornflowerblue`
    h1.style.textAlign = `center`
    h1.style.padding = `0.5em`
    h1.style.borderRadius = `10px`
    return h1
  }

  function setBackGround () {
    document.body.style.backgroundImage = `url('${resource_location}/img/reef.jpg')`
    document.body.style.backgroundSize = `cover`
    document.body.style.backgroundRepeat = `no-repeat`
  }

  function buildElement (id, text) {
    removeElement(menu_id)

    if (id === `welcome_popup_div`) {
      document.getElementById(main_container_div_id).appendChild(setWelcomePopupLink(id, text))
    }

    if (id === `height_div`) {
      document.getElementById(main_container_div_id).appendChild(setScreenHeightDiv(id))
    }

    id = `show_menu_button`
    parts.push({ 'id': id, 'text': `` })
    document.getElementById(main_container_div_id).appendChild(setMenuButton(`show_menu_button`))
  }

  function setWelcomePopupLink (id, text) {
    let d = document.createElement(`div`)
    d.id = id

    let s = document.createElement(`span`)
    s.id = `${id}_span`
    s.style.background = `silver`
    s.style.padding = `0.3em`
    s.style.borderRadius = `5px`

    let a = document.createElement(`a`)
    a.id = `${id}_a`
    a.innerHTML = text
    a.title = `Welcome popup`
    a.href = '#'
    a.onclick = () => setWelcomePopup()

    s.appendChild(a)
    d.appendChild(s)
    return d
  }

  function setWelcomePopup () {
    window.open(`${resource_location}/popup/start_popup.html`, `Popup`, `height=100,width=500`)
  }

  function setScreenHeightDiv (id) {
    let d = document.createElement(`div`)
    d.id = id
    d.innerHTML = `Screen Height=` + window.screen.height
    d.style.marginTop = `1em`
    d.style.color = `white`
    return d
  }
})