import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>that's not what an atom looks like</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          f*cks given: {count}
        </button>
      </div>
      <div>
        <p>Vercel please don't take down my app</p>
      </div>
    </>
  )
}

export default App
