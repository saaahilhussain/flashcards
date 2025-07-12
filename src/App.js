import './index.css';
import { questions } from './data.js';

export default function App() {
  return (
    <div className='app'>
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  return (
    <div className='flashcards'>
      {console.log(questions)}
      <p>{questions[0].question}</p>
    </div>
  );
}
