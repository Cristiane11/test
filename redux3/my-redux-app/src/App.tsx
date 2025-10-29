import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './app/store'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { increment, decrement, incrementByAmount, reset } from './features/counter/counterSlice'

const App: React.FC = () => {
const count = useAppSelector((state) => state.counter.value)
const dispatch = useAppDispatch()
  const [amount, setAmount] = useState<number>(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit + TypeScript Example</h1>
      <h2>Counter: {count}</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter number"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by {amount}
        </button>
      </div>
    </div>
  )
}

export default App
