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
          source: 'images/spock-and-mccoy.jpg',
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
          source: 'images/kirk-in-custody.jpg',
          alt: 'Captain Kirk being questoined',
        },
      },
      // {
      //   question: 'Who was the actor who played Captain Kirk?',
      //   solution: 'William Shatner',
      //   answers: [
      //     'Chris Pine',
      //     'William Shatner',
      //     'Leonard Nimoy',
      //     'Gene Roddenberry'
      //   ],
      //   image: {
      //     source: 'images/im-captain-kirk.jpg',
      //     alt: 'Captain Kirk',
      //   },
      // },
      // {
      //   question: 'What is the trouble with tribbles?',
      //   solution: 'They are dangerously prolific',
      //   answers: [
      //     'They emit radiation',
      //     'They are poisonous',
      //     'They explode',
      //     'They are dangerously prolific'
      //   ],
      //   image: {
      //     source: 'images/and-coffee.jpg',
      //     alt: 'Kirk with tribbles in his coffee',
      //   },
      // },
      // {	
      //   question: 'In what episode was Mr. Spock\'s first command?',
      //   solution: 'The Galileo Seven',
      //   answers: [
      //     'The Gamesters of Triskelion',
      //     'A Piece of the Action',
      //     'The Galileo Seven',
      //     'The Enterprise Incident'
      //   ],
      //   image: {
      //     source: 'images/galileo-seven-smash.jpg',
      //     alt: 'Spock and crew aboard shuttle craft',
      //   },
      // },
      // {
      //   question: 'What does USS stand for?',
      //   solution: 'United Space Ship',
      //   answers: [
      //     'United Space Ship',
      //     'United States of Space',
      //     'United Space of States',
      //     'United States Soviet'
      //   ],
      //   image: {
      //     source: 'images/enterprise.jpg',
      //     alt: 'The starship Enterprise',
      //   },
      // },
      // {
      //   question: 'What is Spock\'s fathers name?',
      //   solution: 'Sarek',
      //   answers: [
      //     'Mr. Spock',
      //     'Mark',
      //     'Sarek',
      //     'Vultan'
      //   ],
      //   image: {
      //     source: 'images/sarek-tellarite.jpg',
      //     alt: 'Sarek with a Tellarite',
      //   },
      // },
      // {
      //   question: 'Who created the M-5 computer?',
      //   solution: 'Dr. Richard Daystrom',
      //   answers: [
      //     'Dr. McCoy',
      //     'Dr. Richard Daystrom',
      //     'Dr. Spock',
      //     'Mr. Scott'
      //   ],
      //   image: {
      //     source: 'images/daystrom.jpg',
      //     alt: 'Dr. Richard Daystrom',
      //   },
      // },
      // {
      //   question: 'What does it mean to be a "Red-Shirt"?',
      //   solution: 'You have a high probability of being "killed off"',
      //   answers: [
      //     'You work in Engineering',
      //     'You work in Security',
      //     'It is your first year abord the Enterprise',
      //     'You have a high probability of being "killed off"'
      //   ],
      //   image: {
      //     source: 'images/red-shirts.jpg',
      //     alt: 'Kirk with some security men',
      //   },
      // },
      // {
      //   question: 'What was the name of the pilot episode?',
      //   solution: 'The Cage',
      //   answers: [
      //     'Mirror Mirror',
      //     'Bread and Circuses',
      //     'The Cage',
      //     'The Sirens of Titan'
      //   ],
      //   image: {
      //     source: 'images/chekov.jpg',
      //     alt: 'Chekov with furrowed brow',
      //   },
      // }
    ],
  };

  const questions = data.questions;
  const questionIndex = data.questionIndex;
  const score = data.score;
  return {
    questions,
    questionIndex,
    score,
  };
}()); 