import _ from 'lodash'
import anime from 'animejs/lib/anime.es.js'

export default class AnotherLink {
  constructor() {
    this.target = document.querySelectorAll('[data-appeal-last]')
    this.timeline = anime.timeline({
      targets: '.st1',
      direction: 'normal',
      loop: false
    })
  }

  init() {
    this.handleEvents()
  }

  handleEvents() {
    _.forEach(this.target, el => {
      el.addEventListener('click', this.onClick.bind(this))
    })
  }

  onClick(e) {
    const config = {
      activeClass: 'is-active'
    }

    const open = document.querySelector('[data-loading--last]')
    open.classList.add(config.activeClass)
    // 線画部分のアニメーションを設定
    this.timeline.add({
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      fill: ['transparent', 'transparent'] // 塗りつぶしを透明のままにする
    })
    // 塗りつぶしのアニメーションを設定
    this.timeline.add(
      {
        easing: 'easeInOutSine',
        fill: ['transparent', '#000000']
      }
      // '-=100'
    ) // ひとつ前のアニメーションが終わる200ミリ秒前に開始する

    this.timeline.add({
      complete: () => {
        window.location.href =
          'https://twitter.com/Lobbing_?ref_src=twsrc%5Etfw'
      }
    })
  }
}
