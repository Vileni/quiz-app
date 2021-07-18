import React from 'react';
import { setCategory } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import * as styles from './categoryselect.module.scss';

const Select = () => {
  const link = useSelector(state => state.link);
  const dispatch = useDispatch();
  const handleCategoryChange = e => {
    let newLink;
    const { value } = e.target;
    const re = new RegExp(/&category=\w+/);
    if (re.test(link)) {
      if (value === 'any') {
        newLink = link.replace(re, '');
      } else {
        newLink = link.replace(re, '&category=' + e.target.value);
      }
    } else {
      newLink = link + '&category=' + e.target.value;
    }
    dispatch(setCategory(newLink));
  };

  return (
    <div className={styles.cnt}>
      <select className={styles.select} onChange={handleCategoryChange}>
        <option value="any">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals &amp; Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science &amp; Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
        <option value="32">Entertainment: Cartoon &amp; Animations</option>{' '}
      </select>
    </div>
  );
};

export default Select;
