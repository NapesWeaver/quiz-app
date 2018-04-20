'use strict';

/* global DATA TEMPLATE */

const QUIZ = (function() {

  function gradeAnswer() {
    scoreAnswer();	
    DATA.questionIndex += 1;
  }

  function handleSubmit() {
    $('.page').on('submit', '.next-form', (event => {
      event.preventDefault();
      writeQuestion();
    }));
    $('.page').on('submit', '.question-form', (event => {
      event.preventDefault();
      gradeAnswer();
    }));
    $('.page').on('submit', '.end-form', (event => {
      event.preventDefault();
      resetGame();
    }));
  }

  function preloadImage() {
    DATA.questions.forEach(question => {
      var img = new Image();
      img.src = question.image.source;
    });
  }
  
  function randomizeQuestions() {
    DATA.questions.sort((a, b) => 0.5 - Math.random());
  }
  
  function resetGame() {
    DATA.score = 0;
    DATA.questionIndex = 0;
    randomizeQuestions();
    $('.page').html(TEMPLATE.createStart());
  }
  
  function scoreAnswer() {
  
    let message = `The correct answer is "${DATA.questions[DATA.questionIndex].solution}"`;
  
    if ($('input:radio:checked').siblings().text() === DATA.questions[DATA.questionIndex].solution) {
      DATA.score += 1;
      message = 'You are correct!';    
    }
    $('.page').html(TEMPLATE.createResults(message));
  }
  
  function writeQuestion() {

    if (DATA.questionIndex < DATA.questions.length) {
      $('.page').html(TEMPLATE.createQuestion);
    } else {
      $('.page').html(TEMPLATE.createEnd());
    }
  }

  return {
    handleSubmit,
    preloadImage,
    randomizeQuestions,
  };
}());