import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Input() {
  const numToCounter = useSelector((state) => state.numToCounter);
  const dispatch = useDispatch();

  return (
    <div className='input'>
      <input
        onChange={(e) =>
          dispatch({ type: '@input/number', payload: e.target.value })
        }
        type='text'
        name='numberInput'
        placeholder='Ingresa un número'
        value={numToCounter}
      />
    </div>
  );
}
