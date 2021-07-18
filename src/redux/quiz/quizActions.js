import { REQUEST_QUESTIONS, REQUEST_RESTART, CHOOSE_CATEGORY, CHOOSE_DIFFICULTY } from './quizTypes';
import axios from 'axios';
export const setCategory = link => {
  return { type: CHOOSE_CATEGORY, payload: link };
};

export const setDifficulty = link => {
  return {
    type: CHOOSE_DIFFICULTY,
    payload: link,
  };
};

export const requestQuestions = link => {
  return async dispatch => {
    const res = await axios.get(link);
    dispatch({
      type: REQUEST_QUESTIONS,
      payload: { questions: res.data.results, code: res.data.response_code },
    });
  };
};

export const requestRestart = () => {
  return {
    type: REQUEST_RESTART,
  };
};
