import { CHOOSE_CATEGORY, CHOOSE_DIFFICULTY, REQUEST_QUESTIONS, REQUEST_RESTART } from './quizTypes';

const initialState = {
  started: false,
  code: 1,
  results: [],
  link: 'https://opentdb.com/api.php?amount=10',
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return { ...state, link: action.payload };
    case CHOOSE_DIFFICULTY:
      return { ...state, link: action.payload };

    case REQUEST_QUESTIONS:
      return { ...state, code: action.payload.code, results: action.payload.questions, started: true };

    case REQUEST_RESTART:
      return { ...state, started: false };
    default:
      return state;
  }
};

export default quizReducer;
