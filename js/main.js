'use strict'
function _classCallCheck(a, b) {
  if (!(a instanceof b))
    throw new TypeError('Cannot call a class as a function')
}
var Bounce = function a(b) {
    var c = this
    _classCallCheck(this, a),
      (this.item = document.querySelector(b.item)),
      (this.speed = b.speed),
      (this.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth),
      (this.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight),
      (this.velocityX = 1),
      (this.velocityY = 1),
      b.borderColor &&
        'random' === b.borderColor &&
        ((this.item.style.transition = 'border 2s'),
        setInterval(function () {
          var a = Math.floor(16777215 * Math.random()).toString(16)
          c.item.style.borderColor = '#'.concat(a)
        }, 3e3)),
      b.backgroundColor &&
        'random' === b.backgroundColor &&
        setInterval(function () {
          var a = Math.floor(16777215 * Math.random()).toString(16)
          ;(c.item.style.transition = 'background-color 3s'),
            (c.item.style.backgroundColor = '#'.concat(a))
        }, 3e3),
      setInterval(function () {
        var a = c.item.getBoundingClientRect(),
          b = a.x,
          d = a.y
        ;(b + a.width >= c.width || 0 >= b) && (c.velocityX = -c.velocityX),
          (d + a.height >= c.height || 0 >= d) && (c.velocityY = -c.velocityY),
          (c.item.style.left = a.x + c.velocityX + 'px'),
          (c.item.style.top = a.y + c.velocityY + 'px')
      }, this.speed)
  },
  greenCircle = new Bounce({
    item: '.web-programming__green-circle',
    speed: 10,
    borderColor: 'random',
  }),
  whiteBgCircle = new Bounce({
    item: '.web-programming__white-bg-circle',
    speed: 5,
    backgroundColor: 'random',
  }),
  blueBgCircle = new Bounce({
    item: '.web-programming__blue-bg-circle',
    speed: 10,
  }),
  blueCircle = new Bounce({item: '.web-programming__blue-circle', speed: 15}),
  longLine = document.querySelector('.web-programming__long-line')
setInterval(function () {
  var a = Math.floor(16777215 * Math.random()).toString(16)
  longLine.style.borderColor = '#'.concat(a)
}, 3e3) ////////////////////////////////////////////////////////
var interval,
  webProgramming = document.querySelector('.web-programming'),
  whyNeed = document.querySelector('.why-need'),
  salary = document.querySelector('.salary'),
  freelance = document.querySelector('.freelance'),
  freelance2 = document.querySelector('.freelance2'),
  webPartsView = document.querySelector('.web-parts-view'),
  webParts = document.querySelector('.web-parts'),
  languages = document.querySelector('.languages'),
  developing = document.querySelector('.developing'),
  webPartsInfo = document.querySelector('.web-parts-info'),
  advantages = document.querySelector('.advantages'),
  employment = document.querySelector('.employment'),
  target = document.querySelector('.target'),
  questions = document.querySelector('.questions'),
  counter = 1,
  countTime = document.querySelector('.questions__timer'),
  countTimeMinute = document.querySelector('.questions__timer-minute'),
  countTimeSecond = document.querySelector('.questions__timersecond')
countTime.innerHTML = '10:00'
function startTimer(a, b) {
  clearInterval(interval), '10:00' == b.innerHTML
  var c,
    d,
    e = a
  interval = setInterval(function () {
    ;(c = parseInt(e / 60, 10)),
      (d = parseInt(e % 60, 10)),
      (c = 10 > c ? '0' + c : c),
      (d = 10 > d ? '0' + d : d),
      c + ':' + d != countTime.innerHTML && (b.textContent = c + ':' + d),
      0 > --e && (e = a),
      '00:00' == b.innerHTML && clearInterval(interval)
  }, 1000)
}
document.onkeydown = function (a) {
  ;('ArrowRight' === a.key || ' ' === a.key || 'PageDown' === a.key) &&
    ((counter += 1), 13 <= counter && (counter = 13)),
    ('ArrowLeft' === a.key || 'PageUp' === a.key) &&
      ((counter -= 1), 1 >= counter && (counter = 1)),
    1 == counter &&
      (whyNeed.classList.remove('active'),
      webProgramming.classList.add('active')),
    2 == counter &&
      (webProgramming.classList.remove('active'),
      salary.classList.remove('active'),
      whyNeed.classList.add('active')),
    3 == counter &&
      (whyNeed.classList.remove('active'),
      freelance.classList.remove('active'),
      salary.classList.add('active')),
    4 == counter &&
      (salary.classList.remove('active'),
      freelance2.classList.remove('active'),
      freelance.classList.add('active')),
    5 == counter &&
      (freelance.classList.remove('active'),
      webPartsView.classList.remove('active'),
      freelance2.classList.add('active')),
    6 == counter &&
      (freelance2.classList.remove('active'),
      webParts.classList.remove('active'),
      webPartsView.classList.add('active')),
    7 == counter &&
      (webPartsView.classList.remove('active'),
      languages.classList.remove('active'),
      webParts.classList.add('active')),
    8 == counter &&
      (webParts.classList.remove('active'),
      developing.classList.remove('active'),
      languages.classList.add('active')),
    9 == counter &&
      (languages.classList.remove('active'),
      webPartsInfo.classList.remove('active'),
      developing.classList.add('active')),
    10 == counter &&
      (developing.classList.remove('active'),
      advantages.classList.remove('active'),
      webPartsInfo.classList.add('active')),
    11 == counter &&
      (webPartsInfo.classList.remove('active'),
      employment.classList.remove('active'),
      advantages.classList.add('active')),
    12 == counter &&
      (employment.classList.add('active'),
      advantages.classList.remove('active'),
      target.classList.remove('active')),
    13 == counter &&
      (employment.classList.remove('active'),
      questions.classList.remove('active'),
      target.classList.add('active'),
      clearInterval(interval)),
    14 == counter &&
      (target.classList.remove('active'), questions.classList.add('active')),
    15 == counter &&
      ((countTime.innerHTML = '10:00'),
      setTimeout(function () {
        var a = document.querySelector('.questions__timer')
        startTimer(600, a)
      }, 1500))
}
