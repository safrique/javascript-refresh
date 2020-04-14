window.addEventListener('load', () => {
  let resource_location = `./homeandlearn-js/src`
  let main_container_div_id = `main_container_div`
  let parts = []
  let menu_id = `menu`
  let name_added = false
  let main_container_div = setMainContainerDiv(main_container_div_id)

  setDefaults()

  function setDefaults () {
    document.body.appendChild(main_container_div)
    main_container_div.appendChild(setHeading(`main_h1`))
    main_container_div.appendChild(setDateField())
    main_container_div.appendChild(setGreetingField())

    setGreetingNameField()
    setElements()
    setMenu()
    setBackGround()
  }

  function setDateField () {
    let d = document.createElement(`d`)
    d.style.margin = `2em`
    d.style.textAlign = `center`
    d.style.color = `white`
    let dt = new Date()
    d.innerHTML = dt.toString()
    return d
  }

  function setElements () {
    parts.push({ 'id': `welcome_popup_div`, 'text': `Click me for welcome popup` })
    parts.push({ 'id': `height_div`, 'text': `Show screen height div` })
    parts.push({ 'id': `credit_card_form`, 'text': `Show credit card form` })
    parts.push({ 'id': `news`, 'text': `Show news page` })
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
        a.onclick = () => buildMenuElement(part.id, part.text)
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
    let b = getBaseButton()
    b.id = id
    b.innerHTML = `Show Menu`
    b.onclick = () => setMenu()
    b.style.border = `none`
    b.style.padding = `15px 32px`
    b.style.marginTop = `2em`
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
    return body
  }

  function setHeading (id) {
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
    document.body.style.backgroundImage = `url('${resource_location}/img/reef-mirror.jpg')`
    document.body.style.backgroundSize = `cover`
    document.body.style.backgroundRepeat = `no-repeat`
    document.body.style.overflow = `visible`
  }

  function buildMenuElement (id, text) {
    removeElement(menu_id)
    let link

    switch (id) {
      case `welcome_popup_div`:
        link = buildLink(id, text, followWelcomePopupLink, `Open welcome popup`)
        break
      case `credit_card_form`:
        link = buildLink(id, text, followCreditCardFormLink, `Open credit card form`)
        break
      case `news`:
        link = buildLink(id, text, followNewsPageLink, `Open news form`)
        break
      default:  // `height_div`
        link = setScreenHeightDiv(id)
    }

    let main_container = document.getElementById(main_container_div_id)
    main_container.appendChild(link)
    main_container.appendChild(setMenuButton(`show_menu_button`))
  }

  function buildLink (id, text, link_function, title) {
    let d = document.createElement(`div`)
    d.id = id
    let s = getBaseSpan(id)
    s.appendChild(getBaseLink(id, text, link_function, title))
    d.appendChild(s)
    return d
  }

  function setScreenHeightDiv (id) {
    let d = document.createElement(`div`)
    d.id = id
    d.innerHTML = `Screen Height=` + window.screen.height
    d.style.marginTop = `1em`
    d.style.color = `white`
    return d
  }

  function followNewsPageLink () {
    window.open(`${resource_location}/popup/news.html`, `Popup`)
  }

  function followCreditCardFormLink () {
    window.open(`${resource_location}/popup/credit_card_form.html`, `Popup`)
  }

  function followWelcomePopupLink () {
    window.open(`${resource_location}/popup/start_popup.html`, `Popup`, `height=100,width=500`)
  }

  function getBaseSpan (id) {
    let s = document.createElement(`span`)
    s.id = `${id}_span`
    s.style.background = `silver`
    s.style.padding = `0.3em`
    s.style.borderRadius = `5px`
    return s
  }

  function getBaseLink (id, text, onclick, title = ``) {
    let a = document.createElement(`a`)
    a.id = `${id}_a`
    a.innerHTML = text
    a.title = title
    a.href = '#'
    a.onclick = () => onclick()
    return a
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
    setGreetingFieldDiv()

    if (!name_added) {
      setGreetingInput()
    }

    document.getElementById(`greeting_field_div`).appendChild(setGreetingButton())
    name_added = !name_added
  }

  function setGreetingFieldDiv () {
    let d = document.createElement(`d`)
    d.id = `greeting_field_div`
    d.style.textAlign = `center`
    d.style.display = `block`
    d.style.marginTop = `1em`
    document.getElementById(`greeting_div`).appendChild(d)
  }

  function setGreetingButton () {
    let b = getBaseButton()
    b.id = `greeting_button`
    b.innerHTML = (name_added ? `Change name` : `Add name`)
    b.onclick = () => getGreetingText()
    b.style.border = `true`
    b.style.borderColor = `black`
    b.style.padding = `0.5em`
    b.style.textDecoration = `none`
    b.style.marginBottom = `2em`
    return b
  }

  function setGreetingInput () {
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

  function getBaseButton () {
    let b = document.createElement(`button`)
    b.style.backgroundColor = `#4CAF50` // Green
    b.style.textAlign = `center`
    b.style.color = `white`
    b.style.display = `inline-block`
    b.style.cursor = `pointer`
    b.style.borderRadius = `5px`
    b.style.textDecoration = `none`

    return b
  }

  function setGreetingField () {
    let d = setGreetingDiv()
    d.appendChild(setGreetingSpan())
    return d
  }

  function setGreetingDiv () {
    let d = document.createElement(`div`)
    d.id = `greeting_div`
    d.style.paddingLeft = `1em`
    d.style.textAlign = `center`
    d.style.marginBottom = `0.5em`
    d.style.marginTop = `2em`
    return d
  }

  function setGreetingSpan () {
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
    return s
  }
})