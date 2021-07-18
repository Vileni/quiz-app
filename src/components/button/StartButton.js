import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestQuestions } from '../../redux';
import * as styles from './button.module.scss';

const StartButton = () => {
  const link = useSelector(state => state.link);
  const dispatch = useDispatch();
  const handleQuestionsRequest = () => {
    dispatch(requestQuestions(link));
  };
  return (
    <button className={styles.button} onClick={handleQuestionsRequest}>
      START
    </button>
  );
};

export default StartButton;
