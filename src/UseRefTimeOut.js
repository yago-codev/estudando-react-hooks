import React, { useState, useRef } from 'react';

export const UseRefTimeOut = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();
  
  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carrinho');
  
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <>
      <div>
        <p>{notificacao}</p>
      </div>
      <div>
        <button 
          type='button'
          onClick={handleClick}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </>
  );
}
