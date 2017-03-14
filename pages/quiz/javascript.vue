<template>
  <section class="container">
    <h1 class="title">
      Javascript quiz page
    </h1>
    <div class="quiz-content">


      <v-progress-circular v-show="spinner" indeterminate class="primary--text"/>

      <div class="quiz-loop" v-for="(question, index) in randomQuiz">
        <!-- Hide all questions, show only the one with index === to current question index -->
        <div class="quiz-block" v-if="index === questionIndex">
          <h4 class="question-title">
            <span v-html="question.text"></span>
          </h4>
          <div class="text-code" v-show="question.textcode">
            <pre><code>{{question.textcode}}</code></pre>
          </div>
          <br>

          <ul class="answers-block">
            <li v-for="response in question.responses">
              <input type="radio"
                     :label="response.text"
                     :name="'list-' + index"
                     v-model="userResponses[index]"
                     :value="response.id"
                     light
                     primary
              />
              {{response.text}} <br>
            </li>
          </ul>
          <br>

          <div>
            <v-btn small primary dark @click.native="next">Next</v-btn>
          </div>


        </div>
      </div>
    </div>

    <div class="score-block" v-if="questionIndex === quiz.questions.length">
      <h3>
        Quiz finished
      </h3>
      <p>
        Total score: {{score()}} / {{quiz.questions.length}}
      </p>
      <div>
        <v-btn small primary dark @click.native="refresh">Reload quiz</v-btn>
      </div>

    </div>

  </section>
</template>
<script>
  import quiz from '../../api/js-quiz.js'

  export default {
    name: 'js-quiz',
    head () {
      return {
        title: `Javascript quiz | quizio.io`
      }
    },
    data () {
      return {
        quiz,
        spinner: false,
        activeStep: 0,
        questionIndex: 0,
        userResponses: new Array(quiz.questions.length).fill(false)
      }
    },
    mounted: function () {
      console.log(this.$route.path)
    },
    computed: {
      randomQuiz: function () {
        return this.quiz.questions.sort(function () {
          return 0.5 - Math.random()
        })
      }
    },
    methods: {
      refresh: function () {
        this.questionIndex = 0
        this.activeStep = 0
        window.location.href = this.$route.path
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
