'use strict';

/* global DATA TEMPLATE */

const QUIZ = (function() {

  function gradeAnswer() {
    scoreAnswer();	
    DATA.questionIndex += 1;
  }

  function handleAnswerSubmit() {	
    $('.question-answer-form').submit(event => {	
      event.preventDefault();  

      if ($(':submit').hasClass('start-submit') || $(':submit').hasClass('next-submit')) {
        writeQuestion();
      } else if ($(':submit').hasClass('answer-submit')) {
        gradeAnswer();
      }
      else {
        resetGame();
      }    
    });
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
    $('.question-answer-form').html(TEMPLATE.createStart());
  }
  
  function scoreAnswer() {
  
    let message = `The correct answer is "${DATA.questions[DATA.questionIndex].solution}"`;
  
    if ($('input:radio:checked').siblings().text() === DATA.questions[DATA.questionIndex].solution) {
      DATA.score += 1;
      message = 'You are correct!';    
    }
  
    if (DATA.questionIndex < DATA.questions.length - 1) {
      $('.question-answer-form').html(TEMPLATE.createResults(message));
    } else {
      $('.question-answer-form').html(TEMPLATE.createEnd(message));
    }
  }
  
  function writeQuestion() {
    $('.question-answer-form').html(TEMPLATE.createQuestion);
  }

  return {
    handleAnswerSubmit,
    preloadImage,
    randomizeQuestions,
  };
}());