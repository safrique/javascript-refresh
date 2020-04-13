window.addEventListener('load', () => {
  let resource_location = `./homeandlearn-js/src`
  let main_container_div_id = `main_container_div`
  let parts = []
  let menu_id = `menu`
  let name_added = false

  let main_container_div = setMainContainerDiv(main_container_div_id)
  document.body.appendChild(main_container_div)
  main_container_div.appendChild(setH1(`main_h1`))
  main_container_div.appendChild(setGreetingField())
  setGreetingNameField()
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
        i.style.color = `white`
        let a = document.createElement(`a`)
        a.innerHTML = part.text
        a.href = `#`
        a.onclick = () => buildElementForMenu(part.id, part.text)
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

  function buildElementForMenu (id, text) {
    removeElement(menu_id)

    switch (id) {
      case `welcome_popup_div`:
        document.getElementById(main_container_div_id).appendChild(setWelcomePopupLink(id, text))
        break
      default:  // `height_div`
        document.getElementById(main_container_div_id).appendChild(setScreenHeightDiv(id))
    }

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

  function getGreetingText () {
    let id = `greeting_input`
    let i = document.getElementById(id)

    if (i !== null) {
      if (i.value !== ``) {
        document.getElementById(`greeting_span`).innerHTML = `Hi ${i.value}`
        removeElement(id)
        removeElement(`greeting_button`)
        setGreetingNameField()
      } else {
        alert(`Please enter a name to add to the greeting`)
      }
    } else {
      setGreetingNameField()
      removeElement(`greeting_button`)
    }
  }

  function setGreetingNameField () {
    let d = document.createElement(`d`)
    d.id = `greeting_field_div`
    d.style.textAlign = `center`
    d.style.display = `block`
    d.style.marginTop = `1em`
    document.getElementById(`greeting_div`).appendChild(d)

    if (!name_added) {
      let i = document.createElement(`input`)
      i.type = `text`
      i.id = `greeting_input`
      i.placeholder = `Enter your name`
      i.style.padding = `0.5em`
      i.style.borderRadius = `5px`
      i.style.marginRight = `0.5em`
      document.getElementById(`greeting_field_div`).appendChild(i)

      document.getElementById(`greeting_span`).innerHTML = `Hi stranger`
    }

    let b = document.createElement(`button`)
    b.id = `greeting_button`
    b.innerHTML = (name_added ? `Change name` : `Add name`)
    b.onclick = () => getGreetingText()
    b.style.backgroundColor = `#4CAF50` // Green
    b.style.border = `true`
    b.style.borderColor = `black`
    b.style.color = `white`
    b.style.padding = `0.5em`
    b.style.textAlign = `center`
    b.style.textDecoration = `none`
    b.style.display = `inline-block`
    b.style.marginBottom = `2em`
    b.style.borderRadius = `5px`
    b.style.cursor = `pointer`

    document.getElementById(`greeting_field_div`).appendChild(b)
    name_added = !name_added
  }

  function setGreetingField () {
    let d = document.createElement(`div`)
    d.id = `greeting_div`
    d.style.paddingLeft = `1em`
    d.style.textAlign = `center`
    d.style.marginBottom = `0.5em`

    let s = document.createElement(`span`)
    s.id = `greeting_span`
    s.style.background = `blue`
    s.style.color = `white`
    s.style.padding = `0.5em`
    s.style.borderRadius = `5px`
    s.style.border = `true`
    s.style.borderColor = `black`
    s.innerHTML = `Hi stranger`
    s.style.fontSize = `150%`
    d.appendChild(s)

    return d
  }
})