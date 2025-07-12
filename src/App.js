import './index.css';
import { questions } from './data.js';
import { useState } from 'react';

export default function App() {
  return (
    <div className='app'>
      <Flashcards />
    </div>
  );
}

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleSelection(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id == selectedId ? 'selected' : ''}
          onClick={() => handleSelection(question.id)}
        >
          {question.id == selectedId ? question.answer : question.question}
        </div>
      ))}
    </div>
  );
}
