import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {

  const [counters, setCounters] = useState([<Counter />]);

  return (
    <div className='App'>
      <h1>Counter!</h1>
      {counters}
      <button
        className='new-counter-bnt'
        type="button"
        onClick={() => setCounters(old => [...old, <Counter/>])}
      >+</button>
    </div>
  )
}

export default App
