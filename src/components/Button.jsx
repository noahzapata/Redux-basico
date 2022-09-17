import React from 'react';
import { useDispatch } from 'react-redux';

export const Button = ({ children, type, payload }) => {
  const dispatch = useDispatch();

  return (
    <div className='generic-button'>
      <button onClick={() => dispatch({ type, payload })}>{children}</button>
    </div>
  );
};
