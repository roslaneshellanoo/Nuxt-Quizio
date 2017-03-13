<template>
  <div class="quiz">

    <div class="container">

      <h1 class="text-center gradient-text fw300 m0">Javascript Quiz</h1>

      <mu-stepper :activeStep="activeStep">
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label>

          </mu-step-label>
        </mu-step>


      </mu-stepper>


      <!-- index is used to check with current question index -->


      <div class="wrap-quiz-content">

        <div v-show="spinner" class="spinner">
          <span>
             <mu-circular-progress :size="40"/>
          </span>
        </div>


        <div class="quiz-loop" v-for="(question, index) in randomQuiz">


          <!-- Hide all questions, show only the one with index === to current question index -->
          <div class="quiz-block" v-show="index === questionIndex"  >
            <h4 class="question-block mb3">
              <!--{{ questionIndex +1 }}.-->
              <span v-html="question.text"></span>
            </h4>

            <div class="wrap-text-code" v-if="question.textcode">
              <pre><code class="language-js">{{ question.textcode }}</code></pre>
            </div>


            <mu-divider/>

            <ul class="answers-block list-reset mt4">
              <li v-for="response in question.responses">


                <label class="mu-radio spacing-bottom">


                  <input type="radio"
                         :value="response.id"
                         :name="index"
                         v-model="userResponses[index]"
                  >


                  <div class="mu-radio-wrapper">
                    <div class="mu-ripple-wrapper mu-radio-ripple-wrapper"></div>
                    <!---->
                    <div class="mu-radio-icon">
                      <i aria-hidden="true"
                         class="mu-icon material-icons mu-radio-icon-uncheck radio_button_unchecked">radio_button_unchecked</i>
                      <i aria-hidden="true"
                         class="mu-icon material-icons mu-radio-icon-checked radio_button_checked">radio_button_checked</i>
                    </div>
                    <div class="mu-radio-label">
                      {{ response.text }}
                    </div>
                  </div>
                  <!---->
                </label>


              </li>
            </ul>
            <br>
            <!-- The two navigation buttons -->
            <!-- Note: prev is hidden on first question -->
            <mu-raised-button v-if="questionIndex > 0" v-on:click="prev" label="Prev"
                              class="demo-raised-button"/>

            <mu-raised-button @click="next" label="Next"
                              class="demo-raised-button"
                              primary/>

          </div>
        </div>

      </div>


      <div v-show="questionIndex === quiz.questions.length">
        <h2>
          Quiz finished
        </h2>
        <p>
          Total score: {{ score() }} / {{ quiz.questions.length }}
        </p>
        <mu-raised-button v-on:click="reloadQuiz" label="Reload Quiz"
                          class="demo-raised-button"
                          primary/>

      </div>


      <mu-snackbar v-if="snackbar" message="Choose an answer..." action="close"
                   @actionClick="hideSnackbar"
                   @close="hideSnackbar"/>

      <mu-toast v-if="toast" :message="this.userResponses.toString()"
                @close="hideToast"/>


    </div>
  </div>
</template>


<script>
  import Prism from '../plugins/prismjs'
  import quiz from  '../api/quiz.js'

  export default {

    name: 'quiz',
    metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Javascript Quiz, Examine, Test'
    },

    loading: false,

    data() {

      return {

        spinner: false,
        activeStep: 0,
        quiz,
        // Store current question index
        questionIndex: 0,
        // An array initialized with "false" values for each question
        // It means: "did the user answered correctly to the question n?" "no".
        userResponses: Array(quiz.questions.length).fill(false),
        snackbar: false,
        toast: false

      }

    },

    computed: {
      randomQuiz: function () {
        return this.quiz.questions.sort(function () {
          return 0.5 - Math.random()
        });
      }
    },

    mounted: () => {

      Prism.highlightAll();
      // this.$store.state.open = false;
    },

    methods: {

      reloadQuiz: () => {
        window.location.href="quiz"
      },

      refresh: function () {

        this.questionIndex = 0;
        this.activeStep = 0;

      },

      // Go to next question
      next: function () {

        this.spinner = true;
        var _this = this;
        setTimeout(function () {
          _this.spinner = false;

          if (_this.userResponses[_this.activeStep] === false) {
            _this.showSnackbar();
          }
          else {
            _this.questionIndex++;
            _this.activeStep++;
            //  _this.showToast();
          }
        }, 500);


      },

      // Go to previous question
      prev: function () {
        this.questionIndex--;
        this.activeStep--;
      },

      reload: function () {
        this.questionIndex--;

      },
      // Return "true" count in userResponses
      score: function () {
        let right_answers = 0;

        let quizObj = this.quiz;

        this.userResponses.forEach(function (value, index) {

          if (quizObj.questions[index].answer == value) {

            right_answers++;

          }

        });

        return right_answers;

      },

      showSnackbar () {
        this.snackbar = true;
        if (this.snackTimer) {
          clearTimeout(this.snackTimer);
          this.snackTimer = setTimeout(() => {
            this.snackbar = false
          }, 2000)
        }
      },
      hideSnackbar () {
        this.snackbar = false
        if (this.snackTimer) clearTimeout(this.snackTimer)
      },
      showToast () {
        this.toast = true
        if (this.toastTimer) clearTimeout(this.toastTimer)
        this.toastTimer = setTimeout(() => {
          this.toast = false
        }, 2000)
      },
      hideToast () {
        this.toast = false
        if (this.toastTimer) clearTimeout(this.toastTimer)
      }


    },


  }
</script>


<style>
  .quiz .mu-step-label {
    height: 50px;
  }
</style>









