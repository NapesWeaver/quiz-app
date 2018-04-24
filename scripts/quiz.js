'use strict';

/* global DATA TEMPLATE */

const QUIZ = (function() {

  function gradeAnswer() {
    writeAnswer();	
    DATA.questionIndex += 1;
  }  

  function handleSubmit() {
    $('.page').on('submit', '.question-form', submitAnswer);
    $('.page').on('submit', '.next-form', submitQuestion);
    $('.page').on('submit', '.end-form', submitReset);
  }

  function preloadImages() {
    DATA.preloadImg = [];
    DATA.questions.forEach(question => {
      var img = new Image();
      img.src = question.image.src;
      DATA.preloadImg.push(img);
    });
    DATA.finalResults.forEach(result => {
      var img = new Image();
      img.src = result.image.src;
      DATA.preloadImg.push(img);
    });
  }
  
  function randomizeQuestions() {
    DATA.questions.sort(() => 0.5 - Math.random());
  }
  
  function resetGame() {
    DATA.score = 0;
    DATA.questionIndex = 0;
    randomizeQuestions();
    $('.page').html(TEMPLATE.createStart());
  }
  
  function submitAnswer(event) {
    event.preventDefault();
    gradeAnswer();
  }

  function submitQuestion(event) {
    event.preventDefault();
    writeQuestion();    
  } 
  
  function submitReset() {
    event.preventDefault();
    resetGame();
  }

  function writeAnswer() {
  
    let message = `The correct answer is "${DATA.questions[DATA.questionIndex].solution}"`;
  
    if ($('input:radio:checked').siblings().text() === DATA.questions[DATA.questionIndex].solution) {
      DATA.score += 1;
      message = 'You are correct!';    
    }
    $('.page').html(TEMPLATE.createResults(message));
  }

  function writeEnd() {
    let index = parseInt((DATA.score / DATA.questions.length * 10) / 2);
    $('.page').html(TEMPLATE.createEnd(index));
  }

  function writeQuestion() {

    if (DATA.questionIndex < DATA.questions.length) {
      $('.page').html(TEMPLATE.createQuestion);
    } else {
      writeEnd();
    }
  }

  return {
    handleSubmit,
    preloadImages,
    randomizeQuestions,
  };
}());