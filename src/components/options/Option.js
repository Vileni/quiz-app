import React from 'react';
import * as styles from './option.module.scss';
import DifficultySelect from './../select/difficulty/DifficultySelect';
import CategorySelect from './../select/category/CategorySelect';
import StartButton from '../button/StartButton';
import NavBar from '../navbar/NavBar';

const Option = () => {
  return (
    <>
      <NavBar />
      <div className={styles.cnt}>
        <CategorySelect />
        <DifficultySelect />
        <StartButton />
      </div>
    </>
  );
};
export default Option;
