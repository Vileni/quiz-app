import React from 'react';
import * as styles from './result.module.scss';
import { useDispatch } from 'react-redux';
import { requestRestart } from '../../redux';
import NavBar from './../navbar/NavBar';

const Result = ({ score }) => {
  const dispatch = useDispatch();
  const handleStartAgain = () => {
    dispatch(requestRestart());
  };
  return (
    <>
      <NavBar />
      <div className={styles.cnt}>
        <h2>You Scored {score}/10 </h2>
        <button onClick={handleStartAgain}>Start Again</button>
      </div>
    </>
  );
};

export default Result;
