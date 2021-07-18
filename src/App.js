import { useSelector } from 'react-redux';
import Option from './components/options/Option';
import QuizStart from './components/quizStart/QuizStart';
import './app.scss';

function App() {
  const started = useSelector(state => state.started);
  return <>{started ? <QuizStart /> : <Option />}</>;
}

export default App;
