import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import he from 'he';
import * as styles from './quizstart.module.scss';
import NavBar from './../navbar/NavBar';
import Result from '../result/Result';

const QuizStart = () => {
  const results = useSelector(state => state.results);
  const [result, SetResult] = useState(0);
  const [next, SetNext] = useState(0);
  const questions = results.map(e => {
    return {
      question: he.decode(e.question),
      answers: [...e.incorrect_answers, e.correct_answer].sort(),
      correctAnswer: e.correct_answer,
    };
  });
  const handleAnswerSubmit = e => {
    if (he.decode(questions[next].correctAnswer) === e.target.innerHTML) {
      SetResult(result + 1);
    }
    SetNext(next + 1);
  };

  if (next === 10) {
    return <Result score={result} />;
  } else {
    return (
      <>
        <NavBar />
        <div className={styles.cnt}>
          <ul>
            <h2>
              Question {next + 1}: {questions[next].question}
            </h2>
            {questions[next].answers.map((e, i) => (
              <li key={i} onClick={handleAnswerSubmit}>
                {he.decode(e)}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default QuizStart;
