/* global DATA QUIZ */

'use strict';

const TEMPLATE = (function() {

  function createMultipleChoice() {
    return DATA.questions[DATA.questionIndex].answers.map(answer => 
      `<li>
					<input type="radio" id="${answer}" name="answer" required="required">			     
					<label for="${answer}">${answer}</label>
				</li>`).join('');
  }
	
  function createQuestion() {
    return `
			<form class="question-answer-form">
				<div class="float-left">
					<h2 class="question">${DATA.questions[DATA.questionIndex].question}</h2>
					<img src="${DATA.questions[DATA.questionIndex].image.source}" class="view-screen" alt="${DATA.questions[DATA.questionIndex].image.alt}">
				</div>
				
				<div class="float-right">
					<div class="results">
						<h3>Question ${DATA.questionIndex + 1} of ${DATA.questions.length}</h3>
						<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
					</div>
					<fieldset class="answers">			
						<ul>
							${createMultipleChoice()}
						</ul>
					</fieldset>
					<button class="answer-submit" type="submit">SUBMIT</button>			
				</div>
			</form>
		`;
  }
	
  function createResults(message) {
    return `
			<form class="question-answer-form">
				<h2 class="question">${message}</h2>
				<img src="${DATA.questions[DATA.questionIndex].image.source}" class="view-screen" alt="${DATA.questions[DATA.questionIndex].image.alt}">
	
				<div class="results">
					<h3>Question ${DATA.questionIndex + 1} of ${DATA.questions.length}</h3>
					<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
				</div>
				
				<button class="next-submit" type="submit">NEXT</button>
			</form>
		`;
  }
	
  function createStart() {
    return `
			<form class="question-answer-form">
				<h2 class="question">Welcome abord a ten question quiz about Star Trek, the original series.</h2>
				<img src="images/star-trek-cast.jpg" class="view-screen" alt="Bridge crew">	
				<button class="start-submit" type="submit">START</button>
			</form>
		`;
  }
	
  function createEnd(message) {
    return `
			<form class="question-answer-form">
				<h2 class="question">${message}</h2>
				<img src="${DATA.questions[DATA.questionIndex].image.source}" class="view-screen" alt="${DATA.questions[DATA.questionIndex].image.alt}">
	
				<div class="results">
					<h3>Question ${DATA.questionIndex + 1} of ${DATA.questions.length}</h3>
					<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
				</div>
				
				<button class="end-submit" type="submit">END</button>
			</form>
		`;
  }
	
  return {
    createQuestion,
    createMultipleChoice,
    createResults,
    createStart,
    createEnd,
  };
}());

