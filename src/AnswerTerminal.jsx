import { useState } from 'react'
import { Link } from 'react-router-dom'

function AnswerTerminal() {
  const [answer, setAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Answer submitted: ${answer}`)
    setAnswer('')
  }

  return (
    <section id="answer-terminal">
      <h2>Submit Your Answer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter your answer"
        />
        <button type="submit">Submit</button>
      </form>
      <p>
        Need a clue? Back to the <Link to="/">blog</Link>.
      </p>
    </section>
  )
}

export default AnswerTerminal
