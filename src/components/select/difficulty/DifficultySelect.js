import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDifficulty } from '../../../redux';
import * as styles from './difficultyselect.module.scss';

const DifficultySelect = () => {
  const link = useSelector(state => state.link);
  const dispatch = useDispatch();

  const handleDifficultyChange = e => {
    let newLink;
    const { value } = e.target;
    const re = new RegExp(/&difficulty=\w+/);
    if (re.test(link)) {
      if (value === 'any') {
        newLink = link.replace(re, '');
      } else {
        newLink = link.replace(re, '&difficulty=' + e.target.value);
      }
    } else {
      newLink = link + '&difficulty=' + e.target.value;
    }
    dispatch(setDifficulty(newLink));
  };
  return (
    <>
      <select className={styles.select} onChange={handleDifficultyChange}>
        <option value="any">Any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </>
  );
};

export default DifficultySelect;
