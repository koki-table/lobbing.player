// import _ from 'lodash'
import DataJson from '../modules/_DataJson'

export default class AnswerData {
  constructor() {
    this.dataJson = new DataJson()
  }

  // 答えのデータを取得
  init() {
    this.dataJson.fetchJSONFile('/api/data/answerData.json', function(data) {
      const secAnswer = document.getElementById('sec-answer')

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].text)
        console.log(i)

        var answerData = (secAnswer.innerHTML +=
          '<div class="answer" data-answer-target=' +
          i +
          '><div class="answer__head"><div class="mv" data-question-target="' +
          i +
          '"><div class="mv__bg mv__bg--01 scroll-target"></div><div class="mv__img"><img src="' +
          data[i].img +
          '" alt=""></div><h2 class="mv__title">' +
          data[i].title +
          '</h2><div class="mv__scroll"><div class="scroll"><div class="scroll__line"><div class="line"></div></div><p class="scroll__text">SCROLL</p></div></div></div></div><div class="answer__body" data-answer-body><div class="content scroll-trigger" data-answer-text-target="' +
          i +
          '"><p class="content__text">' +
          data[i].text +
          '</p></div><div class="appeal" data-appeal><div class="appeal__link" data-appeal-last><a href="https://twitter.com/Lobbing_?ref_src=twsrc%5Etfw"><img src="/assets/images/pages/index/return_btn_tw.png" alt="Twitterに戻る"></a></div><div class="appeal__text">『リツイートとフォローもしてくれたら喜びます!!』</div><div class="appeal__link appeal__link--return"><a href="" alt="">もう一度診断する</a></div></div></div></div>')
      }
      console.log(answerData)
      return answerData
    })
  }
}
