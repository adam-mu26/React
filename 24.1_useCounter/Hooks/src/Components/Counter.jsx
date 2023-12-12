import React from 'react'
import { UseCount } from '../Hooks/useCount'

export const Counter = () => {
    const {count, addOne, removeOne, double, divide, reset } = UseCount(0)
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={addOne}>Add One</button>
        <button onClick={removeOne}>Remove One</button>
        <button onClick={double}>Double</button>
        <button onClick={divide}>Divide</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
