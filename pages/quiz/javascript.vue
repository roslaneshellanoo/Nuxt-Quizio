<template>
  <section class="container">
    <h1 class="display-1 gradient-text text-center">
      Javascript quiz page
    </h1>
    <v-stepper v-model="activeStep">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="activeStep > 1"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="2" :complete="activeStep > 2"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="3" :complete="activeStep > 3"></v-stepper-step>
        <v-divider />
        <v-stepper-step step="4" :complete="activeStep > 4"></v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <div class="quiz-content relative">

      <div v-show="spinner" class="quiz-spinner">
        <v-progress-circular  indeterminate class="spinner primary--text"/>
      </div>

      <v-card class="quiz-loop" v-for="(question, index) in randomQuiz">
        <!-- Hide all questions, show only the one with index === to current question index -->
        <div class="quiz-block" v-if="index === questionIndex">
          <h5 class="question-title">
            <span v-html="question.text"></span>
          </h5>
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
      </v-card>
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
          if (_this.userResponses[_this.questionIndex] === false) {
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
