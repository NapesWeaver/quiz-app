/* global QUIZ */

'use strict';

$(document).ready(function() {
  QUIZ.preloadImage();
  QUIZ.randomizeQuestions();  
  QUIZ.handleSubmit();
});