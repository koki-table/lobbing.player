import _ from 'lodash'

export default class Question {
  constructor() {
    this.close = document.querySelectorAll('[data-question-close]')
    this.trigger = document.querySelectorAll('[data-question-trigger]')
    this.target = document.querySelectorAll('[data-question-target]')

    // questionとanswerの画面切り替えのため、値取得
    this.containerQuestion = document.querySelector('[data-question-container]')
    this.secAnswer = document.querySelector('[data-sec-answer]')
    this.Answer = document.querySelector('[data-answer]')
    this.bodyAnswer = document.querySelector('[data-answer-body]')
    this.bodyAnswerText = document.querySelector('[data-answer-text-target]')
    this.btn = document.getElementsByClassName('btn')
    this.count = 0

    // 進捗の色変更
    this.pagenation01 = document.querySelector('[data-pagenation01]')
    this.pagenation02 = document.querySelector('[data-pagenation02]')
    this.pagenation03 = document.querySelector('[data-pagenation03]')
    this.pagenation04 = document.querySelector('[data-pagenation04]')
    this.pagenation05 = document.querySelector('[data-pagenation05]')
  }

  init() {
    this.handleEvents()
  }

  handleEvents() {
    _.forEach(this.trigger, el => {
      el.addEventListener('click', this.onClick.bind(this))
    })
  }

  onClick(e) {
    const config = {
      activeClass: 'is-active'
    }
    this.close.forEach(function(e) {
      e.classList.remove(config.activeClass)
    })

    // selectボタンを押した回数を監視して、条件分岐
    for (let i = 0; i < this.btn.length; i++) {
      this.count++
      console.log(this.count)
      if (this.count === 1) {
        setTimeout(function(e) {
          const pagenation02 = document.querySelector('[data-pagenation02]')
          pagenation02.classList.add(config.activeClass)
        }, 100)
        break
      } else if (this.count === 2) {
        this.pagenation03.classList.add(config.activeClass)
        break
      } else if (this.count === 3) {
        this.pagenation04.classList.add(config.activeClass)
        break
      } else if (this.count === 4) {
        this.pagenation05.classList.add(config.activeClass)
        break
      } else if (this.count === 5) {
        this.containerQuestion.classList.remove(config.activeClass)
        this.secAnswer.classList.add(config.activeClass)
        this.Answer.classList.add(config.activeClass)
        const index = e.currentTarget.getAttribute('data-question-trigger')
        const target = document.querySelector(
          `[data-answer-text-target="${index}"]`
        )
        target.classList.add(config.activeClass)
        setTimeout(function() {
          const bodyAnswer = document.querySelector(`[data-answer-body]`)
          bodyAnswer.classList.add(config.activeClass)
        }, 100)
      }
    }
    const index = e.currentTarget.getAttribute('data-question-trigger')
    setTimeout(function() {
      const target = document.querySelector(`[data-question-target="${index}"]`)
      target.classList.add(config.activeClass)
    }, 100)
  }
}
