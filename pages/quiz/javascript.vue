<template>
  <section class="container">
    <h1 class="title">
      Javascript quiz page
    </h1>
  </section>
</template>
<script>
  import quiz from '../../api/js-quiz.js'

  export default {
    name: 'js-quiz',
    data () {
      return {
        quiz,
        spinner: false,
        activeStep: 0,
        questionIndex: 0,
        userResponses: Array(quiz.questions.length).fill(false)
      }
    },
    head () {
      return {
        title: `Javascript quiz | quizio.io`
      }
    },
    mounted: function () {
      console.log(this.userResponses)
    },
    computed: {
      randomQuiz: function (e) {
        return this.questions.sort(function () {
          return 0.5 - Math.random()
        })
      }
    },
    methods: {
      refresh: function () {
        this.questionIndex = 0
        this.activeStep = 0
      },
      next: function () {
        this.spinner = true
        let _this = this
        setTimeout(function () {
          _this.spinner = false
          if (_this.userResponses[_this.activeStep] === false) {
            console.log('show me toast')
          } else {
            _this.questionIndex++
            _this.activeStep++
          }
        }, 500)
      },
      prev: function () {
        this.questionIndex--
        this.activeStep--
      },
      score: function () {
        let rightAnswers = 0
        let quizObj = this.quiz
        this.userResponses.forEach(function (value, index) {
          if (quizObj.questions[index].answer === value) {
            rightAnswers++
          }
        })
        return rightAnswers
      }
    }
  }
</script>

<style scoped>

  .title {
    margin-top: 2rem;
  }

</style>
