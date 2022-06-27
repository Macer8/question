// Приветствие
let storage  = window.localStorage
let name = ''

if (!localStorage.getItem('name')) {
  name = prompt('Как тебя зовут?')
  name = name === null ? 'anonymous' : name
  storage.setItem('name', name)
} 

storage.getItem('name') && alert(`Здравствуй, ${storage.getItem('name')}!`)

// Открытие практчиеских
function openPracticalWork(numWork) {
  switch (numWork) {
    case 1: 
      alert('open of practical work one')
      break
    case 2: ;
      alert('open of practical work two')
      break
  }
}

let divTest = document.getElementById('test')
divTest.hidden = true

let btnOpenTest = document.getElementById('btnOpenTest')

let btnCheckTest = document.getElementById('btnCheckTest')
btnCheckTest.onclick = checkTest

let btnOpenBackground = document.getElementById('btnOpenBackground')
let background = document.getElementById('background')
background.hidden = true

btnOpenBackground.onclick = openBackground
background.onclick = closeBackground

let now = new Date()
let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

function openBackground() {
  background.hidden = false
  background.innerHTML = `<p class = "backgroundLabel">
                            ${now.toLocaleString('ru', options)}
                          <br><br><br>   
                            ${localStorage.getItem('name')}
                          </p>`
}

function closeBackground() {
  background.hidden = true
}
