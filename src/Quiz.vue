9<template>
  <div>
    <div v-if="currentQuestionIndex < this.questions.length">
      <div v-for="(question, questionIndex) in questions" :key="question.text">
        <div v-if="questionIndex == currentQuestionIndex">
          <p>{{ questionIndex + 1 }}. {{ question.text }}</p>
          <div v-for="(answer, answerIndex) in question.answers" :key="answer">
            <label>
              <input
                type="radio"
                :id="answerIndex"
                :value="answer"
                v-model="currentSelectedAnswer"
                @change="handleChange()"
              />
              <span>{{ answer }}</span>
            </label>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div v-else>
      <h4>Your Answers</h4>
      <div v-for="(question, questionIndex) in questions" :key="question.text">
        <p>{{ questionIndex + 1 }}. {{ question.text }}</p>
        <p>{{ selectedAnswers[questionIndex] }}</p>
      </div>
    </div>
    <button ref="nextButton" @click="handleNext">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentQuestionIndex: 0,
      currentSelectedAnswer: "",
      selectedAnswers: [],
    };
  },
  methods: {
    handleChange() {
      this.$refs.nextButton.style.visibility = "visible";
      this.$refs.nextButton.disabled = false;
    },
    handleNext() {
      this.selectedAnswers[this.currentQuestionIndex] = this.currentSelectedAnswer;
      this.currentQuestionIndex++;
      this.$refs.nextButton.disabled = true;
      this.$refs.nextButton.style.visibility = "hidden";
    },
  },
};
</script>
