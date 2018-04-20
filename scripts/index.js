/* global QUIZ */

'use strict';

$(document).ready(function() {
  QUIZ.preloadImages();
  QUIZ.randomizeQuestions();  
  QUIZ.handleSubmit();
});