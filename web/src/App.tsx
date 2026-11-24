import { useState } from 'react'
import { greeterClient } from './api/client'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  async function sayHello() {
    setError('')
    try {
      const reply = await greeterClient.sayHello({ name })
      setMessage(reply.message)
    } catch (e) {
      setMessage('')
      setError(e instanceof Error ? e.message : String(e))
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>gRPC-Web hello</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button type="button" onClick={sayHello}>
        Say hello
      </button>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
    </main>
  )
}

export default App
