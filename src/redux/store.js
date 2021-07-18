import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quizReducer from './quiz/quizReducer';

const store = createStore(quizReducer, applyMiddleware(thunk));

export default store;
