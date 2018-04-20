/* global DATA QUIZ */

'use strict';

const TEMPLATE = (function() {

  function createEnd() {
    return `
			<form class="end-form">
				<h2 class="question">You are a Star Trek Dancing Machine</h2>
				<img src="images/chekov-dance.jpg" class="view-screen" alt="Chekov Dancing">
	
				<div class="results">
					<h3>The End</h3>
					<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
				</div>
				
				<button class="reset" type="submit">RESET</button>
			</form>
		`;
  }
	
  function createQuestion() {
    return `
			<form class="question-form">
				<div class="float-left">
					<h2 class="question">${DATA.questions[DATA.questionIndex].question}</h2>
					<img src="${DATA.questions[DATA.questionIndex].image.source}" class="view-screen" alt="${DATA.questions[DATA.questionIndex].image.alt}">
					<div class="results">						
						<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
					</div>
				</div>
				
				<div class="float-right">					
					<fieldset>
						<legend>Question ${DATA.questionIndex + 1} of ${DATA.questions.length}</legend>	
						<ul class="answers">
							${createMultipleChoice()}
						</ul>
					</fieldset>
					<button class="answer-submit" type="submit">SUBMIT</button>			
				</div>
			</form>
		`;
  }
	
  function createMultipleChoice() {
    DATA.questions[DATA.questionIndex].answers.sort((a, b) => 0.5 - Math.random());
    return DATA.questions[DATA.questionIndex].answers.map(answer => 
      `<li>
					<input type="radio" id="${answer}" name="answer" required="required">			     
					<label for="${answer}">${answer}</label>
				</li>`).join('');
  }
	
  function createResults(message) {
    return `
			<form class="next-form">
				<h2 class="question">${message}</h2>
				<img src="${DATA.questions[DATA.questionIndex].image.source}" class="view-screen" alt="${DATA.questions[DATA.questionIndex].image.alt}">
	
				<div class="results">
					<h3>Question ${DATA.questionIndex + 1} of ${DATA.questions.length}</h3>
					<span>You have <span class="score">${DATA.score}</span> out of ${DATA.questions.length} correct</span>		
				</div>
				
				<button class="next" type="submit">NEXT</button>
			</form>
		`;
  }
	
  function createStart() {
    return `
			<form class="next-form">
				<h2 class="question">Welcome abord a ten question quiz about Star Trek, the original series.</h2>
				<img src="images/star-trek-cast.jpg" class="view-screen" alt="Bridge crew">	
				<button class="start" type="submit">START</button>
			</form>
		`;
  }
	
  return {
    createEnd,
    createQuestion,
    createMultipleChoice,
    createResults,
    createStart,
  };
}());

