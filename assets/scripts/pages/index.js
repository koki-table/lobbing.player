import anime from 'animejs/lib/anime.es.js'
import AnotherLink from '../modules/_AnotherLink'
import Question from '../modules/_Question'
// import Rellax from 'rellax'

// ローディングアニメーション/////////////////////////////////////////////////
// eslint-disable-next-line no-unused-vars
const logo = document.getElementById('logo')
// const startAnimation = document.getElementById('startAnimation')

window.onload = function() {
  // timelineデフォルトのパラメーターを設定
  let timeline = anime.timeline({
    targets: '.st0',
    direction: 'normal',
    loop: false
  })
  // 線画部分のアニメーションを設定
  timeline.add({
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    fill: ['transparent', 'transparent'], // 塗りつぶしを透明のままにする
    duration: 300,
    delay: function(el, i) {
      return i * 150
    }
  })
  // 塗りつぶしのアニメーションを設定
  timeline.add(
    {
      easing: 'easeInOutSine',
      fill: ['transparent', '#000000'],
      duration: 500
    },
    '-=200'
  ) // ひとつ前のアニメーションが終わる200ミリ秒前に開始する

  setTimeout(function() {
    document.getElementsByClassName('sec-loading')[0].classList.add('end')
  }, 1800)
}

// questionエリア/////////////////////////////////////////////////////
document.querySelector('.sec-loading').addEventListener('load', function() {
  setTimeout(function() {
    document.getElementsByClassName('sec-loading')[0].classList.add('end')
  }, 1600)
})

const question = new Question()
question.init()

// answerのパララックスアニメーション
// parallax
// eslint-disable-next-line no-unused-vars
// var rellax = new Rellax('.rellax', {
//   speed: -2,
//   center: false,
//   wrapper: null,
//   round: true,
//   vertical: true,
//   horizontal: false
// })

// スクロール後クラス追加
const myFunc = function() {
  const target = document.getElementsByClassName('scroll-target')
  const trigger = document.getElementsByClassName('scroll-trigger')
  // const position = Math.floor(window.innerHeight * 0.9)
  // const positionRemove = Math.floor(window.innerHeight * 0.9)
  // let e = 800
  let position = window.scrollY

  for (let i = 0; i < target.length; i++) {
    // console.log(target.length)
    let offsetTop = Math.floor(trigger[i].getBoundingClientRect().top)
    // let offsetTop = Math.floor(target[i].getBoundingClientRect().bottom)

    if (offsetTop < position) {
      target[i].classList.add('is-active')
    }

    if (offsetTop > position) {
      target[i].classList.remove('is-active')
    }
  }
}

window.addEventListener('scroll', myFunc, false)

// 別リンク遷移の際のアニメーション////////////////////////////////////////////
const anotherLink = new AnotherLink()
anotherLink.init()
