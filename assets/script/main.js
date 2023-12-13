let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button 1 (Double Click Event)

let frontend = document.querySelector('#buttonOne')

frontend.addEventListener("dblclick", function () {
  frontend.classList.add("changeColor");
})

// Button 2 (Mouse over/Mouse out)
let design = document.querySelector('#buttonTwo')

design.addEventListener("mouseover", function () {
  design.classList.add("changeColor");
})
design.addEventListener("mouseout", function () {
  design.classList.remove("changeColor");
})

// Button 3
let and = document.querySelector('#buttonThree')

and.addEventListener("click", function () {
  and.classList.toggle("changeSize");
})

// Button 4
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener('click', poofHandler)
development.addEventListener('animationend', poofHandler)

function poofHandler() {
  development.classList.toggle('poof')
}

// Button 5
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('click', shakeHandler)
sprint.addEventListener('animationend', shakeHandler)

function shakeHandler() {
  sprint.classList.toggle('shake')
}

// Button 6
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', flipHandler)
fix.addEventListener('animationend', flipHandler)

function flipHandler() {
  fix.classList.toggle('flip')
}

// Button 7
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', flashHandler)
the.addEventListener('animationend', flashHandler)

function flashHandler() {
  the.classList.toggle('flash')
}

// Button 8
let flow = document.querySelector('a:nth-of-type(8)')

flow.addEventListener('click', hyperHandler)
flow.addEventListener('animationend', hyperHandler)

function hyperHandler() {
  flow.classList.toggle('hyper')
}

// Button 9
let user = document.querySelector('a:nth-of-type(9)')

user.addEventListener('click', discoHandler)
user.addEventListener('animationend', discoHandler)

function discoHandler() {
  user.classList.toggle('disco')
}

// Button 10
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener("keydown", (keydownPress) => {
  if (keydownPress.isComposing || keydownPress.keycode === 229) {
    return;
  }
  interface.classList.toggle("changeColor");
});