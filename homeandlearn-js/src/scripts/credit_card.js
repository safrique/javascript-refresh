function validate () {
  let error_spans = getErrorSpans()
  clearHTML(error_spans)

  let email = validateEmail(error_spans['email'])
  if (!email) return false

  let pmt = validatePmt(error_spans['pmt'])
  if (!pmt) return false

  let tcs = validateTCs(error_spans['tcs'])
  if (!tcs) return false

  document.formOne.submit()
}

function getErrorSpans () {
  return {
    'email': document.getElementById(`email_error`),
    'pmt': document.getElementById(`radio_error`),
    'tcs': document.getElementById(`checkbox_error`),
  }
}

function clearHTML (arr) {
  for (let i in arr) {
    if (arr.hasOwnProperty(i)) {
      arr[i].innerHTML = ``
    }
  }
}

function validateEmail (elem) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  // let re = /^(?:(?:[\w\.\-_]+@[\w\d]+(?:\.[\w]{2,6})+)[,;]?\s?)+$/
  let outcome = re.test(String(document.getElementById(`email`).value).toLowerCase())

  if (!outcome) elem.innerHTML = `Please enter a valid email address!!`

  return outcome
}

function validatePmt (elem) {
  let pmt = [`cc`, `dc`, `pp`]
  let pmt_selected = 0

  for (let i = 0, j = pmt.length; i < j; i++) {
    if (document.getElementById(pmt[i]).checked) { pmt_selected++ }
  }

  if (pmt_selected !== 1) {
    elem.innerHTML = `Please select ONE valid payment method!!`
    return false
  }

  return true
}

function validateTCs (elem) {
  if (!document.getElementById('cb1').checked) {
    elem.innerHTML = `T&Cs not accepted!!`
    return false
  }

  return true
}