import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/counter/counterSlice'

const Profiles = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>-----{"("}</button>
      {count}
      <button onClick={()=>dispatch(increment())}>{")"}+++++</button>
    </div>
  )
}

export default Profiles