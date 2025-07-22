import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuoteMachine from './QuoteMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <QuoteMachine />
    </div>
  )
}

export default App
