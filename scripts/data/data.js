'use strict';

const DATA = (function() {
  let data = {
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: 'Who was the first Captain of the Enterprise?',
        solution: 'Captain Pike',
        answers: [
          'Captain Kirk',
          'Captain Picard',
          'Captain Pike',
          'Captain Crunch',
        ],
        image: {
          src: 'images/spock-and-mccoy.jpg',
          alt: 'Spock and McCoy in full dress uniform',
        },
      },
      {
        question: 'What planet is Spock from?',
        solution: 'Vulcan',
        answers: [
          'Mars',
          'Romulus',
          'Earth',
          'Vulcan',
        ],
        image: {
          src: 'images/kirk-in-custody.jpg',
          alt: 'Captain Kirk being questoined',
        },
      },
      {
        question: 'Who was the actor who played Captain Kirk?',
        solution: 'William Shatner',
        answers: [
          'Chris Pine',
          'William Shatner',
          'Leonard Nimoy',
          'Gene Roddenberry'
        ],
        image: {
          src: 'images/im-captain-kirk.jpg',
          alt: 'Captain Kirk',
        },
      },
      {
        question: 'What is the trouble with tribbles?',
        solution: 'They are dangerously prolific',
        answers: [
          'They emit radiation',
          'They are poisonous',
          'They explode',
          'They are dangerously prolific'
        ],
        image: {
          src: 'images/and-coffee.jpg',
          alt: 'Kirk with tribbles in his coffee',
        },
      },
      {	
        question: 'In what episode was Mr. Spock\'s first command?',
        solution: 'The Galileo Seven',
        answers: [
          'The Gamesters of Triskelion',
          'A Piece of the Action',
          'The Galileo Seven',
          'The Enterprise Incident'
        ],
        image: {
          src: 'images/galileo-seven-smash.jpg',
          alt: 'Spock and crew aboard shuttle craft',
        },
      },
      {
        question: 'What does USS stand for?',
        solution: 'United Space Ship',
        answers: [
          'United Space Ship',
          'United States of Space',
          'United Space of States',
          'United States Soviet'
        ],
        image: {
          src: 'images/enterprise.jpg',
          alt: 'The starship Enterprise',
        },
      },
      {
        question: 'What is Spock\'s father\'s name?',
        solution: 'Sarek',
        answers: [
          'Mr. Spock',
          'Vultan',
          'Sarek',
          'Mark'
        ],
        image: {
          src: 'images/sarek-tellarite.jpg',
          alt: 'Sarek with a Tellarite',
        },
      },
      {
        question: 'Who created the M-5 computer?',
        solution: 'Dr. Richard Daystrom',
        answers: [
          'Dr. McCoy',
          'Dr. Richard Daystrom',
          'Dr. Spock',
          'Mr. Scott'
        ],
        image: {
          src: 'images/daystrom.jpg',
          alt: 'Dr. Richard Daystrom',
        },
      },
      {
        question: 'What does it mean to be a "Red-Shirt"?',
        solution: 'You have a high probability of being "killed off"',
        answers: [
          'You work in Engineering',
          'You work in Security',
          'It is your first year abord the Enterprise',
          'You have a high probability of being "killed off"'
        ],
        image: {
          src: 'images/red-shirts.jpg',
          alt: 'Kirk with some security men',
        },
      },
      {
        question: 'What was the name of the pilot episode?',
        solution: 'The Cage',
        answers: [
          'Mirror Mirror',
          'Bread and Circuses',
          'The Cage',
          'The Sirens of Titan'
        ],
        image: {
          src: 'images/chekov.jpg',
          alt: 'Chekov with furrowed brow',
        },
      }
    ],
    finalResults: [
      {
        message: 'This score comes from another universe.',
        image: {
          src: 'images/mirror-mirror.jpg',
          alt: 'Uhrua, Kirk, McCoy and Scott in the Mirror Mirror universe',
        }
      },
      {
        message: 'What were you thinking?',
        image: {
          src: 'images/alter-spock-vs-mccoy.jpg',
          alt: 'Alternative Spock mind-melding with Doctor McCoy',
        }
      },       
      {
        message: 'This is not your best moment.',
        image: {
          src: 'images/gorn-vs-kirk.jpg',
          alt: 'The Gorn Captain has Captain Kirk trapped',
        }
      }, 
      {
        message: 'This score could use some work.',
        image: {
          src: 'images/galileo-seven.jpg',
          alt: 'Galileo-Seven crew initiating repairs',
        }
      },
      {
        message: 'You play a good game, sir.',
        image: {
          src: 'images/chess.jpg',
          alt: 'Captain Kirk and Mr. Spock playing 3D chess',
        }
      },      
      {
        message: 'You are a Star Trek dancing machine!',
        image: {
          src: 'images/chekov-dance.jpg',
          alt: 'Chekov dancing',
        }
      },
    ],
  };

  const finalResults = data.finalResults;
  const questions = data.questions;
  const questionIndex = data.questionIndex;
  const score = data.score;

  return {
    finalResults,
    questions,
    questionIndex,
    score,
  };
}()); 