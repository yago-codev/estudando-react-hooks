import React, { useState, useRef } from 'react';

export const UseRefComponent = () =>  {
  const [comments, setComments] = useState(
    [
      'Comentario 1',
      'Comentario 2',
      'Comentario 3', 
      'Comentario 4',
      'Comentario 5',
      'Comentario 6',
      'Comentario 7'
    ]
  );
  const [inputComment, setInputComment] = useState('');
  const input = useRef();

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={ comment }>
            { comment } 
          </li>
        ))}
      </ul>
      <input 
        type='text' 
        value={ inputComment } 
        onChange={({ target }) => setInputComment(target.value)}
        ref={ input }
      />
      <button 
        type='button' 
        onClick={() => {
          if (inputComment.length > 0) {
            setComments([...comments, inputComment]);
            setInputComment('');
            return input.current.focus();
          }
        }}
      >
        Enviar
      </button>
    </div>
  );
}