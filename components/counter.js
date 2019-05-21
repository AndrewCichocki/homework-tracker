import React, { useState } from 'react'
import { createContainer } from 'unstated-next'
import Button from '@material-ui/core/Button'

function useCounter() {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  return { count, decrement, increment }
}

const CounterContainer = createContainer(useCounter)

function CounterDisplay() {
  let counter = CounterContainer.useContainer()
  return (
    <div className="test">
      <Button onClick={counter.decrement} variant="contained" color="primary">-</Button>
      <span>You clicked {counter.count} times</span>
      <Button onClick={counter.increment} variant="contained" color="primary">+</Button>
    </div>
  )
}

function Counter() {
  return (
    <CounterContainer.Provider>
      <CounterDisplay />
      {/*<CounterDisplay />*/}
    </CounterContainer.Provider>
  )
}

export default Counter