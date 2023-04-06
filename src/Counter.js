import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const dispatch =  useDispatch()
const counter = useSelector(state=>state.counter)

const incrementHandle = () => {
    dispatch({type:'increment'})
}
const decrementHandle = () => {
    dispatch({type:'decrement'})
}
  return (
    <div>
      <p>{counter}</p>
      <button onClick={incrementHandle}>Increment</button>
      <button onClick={decrementHandle}>Decrement</button>
    </div>
  )
}

export default Counter
