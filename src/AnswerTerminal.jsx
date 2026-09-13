import { useState } from 'react'
import { answerConfigs } from './answers.js'

async function sha256(text) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('')
}

function AnswerTerminal() {
  const [stage, setStage] = useState('password')
  const [config, setConfig] = useState(null)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [values, setValues] = useState([])
  const [results, setResults] = useState([])

  const start = (cfg) => {
    setConfig(cfg)
    setValues(cfg.questions.map(q => q.fields.map(() => '')))
    setResults(cfg.questions.map(q => q.fields.map(() => null)))
    setStage('questions')
  }

  const handlePassword = async (e) => {
    e.preventDefault()
    const hash = await sha256(input.trim())
    const match = answerConfigs.find(c => c.password === hash)
    if (match) {
      start(match)
      setError(false)
    } else {
      setError(true)
    }
    setInput('')
  }

  const setValue = (qi, fi, value) => {
    setValues(prev => prev.map((row, i) =>
      i === qi ? row.map((val, j) => (j === fi ? value : val)) : row
    ))
  }

  const check = async (e) => {
    e.preventDefault()
    const next = await Promise.all(config.questions.map(async (q, qi) =>
      Promise.all(q.fields.map(async (field, fi) => {
        const value = values[qi][fi].trim().toLowerCase()
        return field.hashes.includes(await sha256(value))
      }))
    ))
    setResults(next)
  }

  const allCorrect = results.length > 0 && results.every(row => row.every(Boolean))

  if (stage === 'password') {
    return (
      <section id="answer-terminal">
        <h2>Enter Password</h2>
        <form className="answer-password" onSubmit={handlePassword}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="answer-wrong">Incorrect password. Try again.</p>}
      </section>
    )
  }

  if (stage === 'done') {
    return (
      <section id="answer-terminal">
        <h2>{config.completion.heading}</h2>
        {config.completion.body && <p>{config.completion.body}</p>}
        {config.completion.url && (
          <p>
            <a className="blog-link" href={config.completion.url} target="_blank" rel="noreferrer">
              Sign up here
            </a>
          </p>
        )}
      </section>
    )
  }

  return (
    <section id="answer-terminal">
      <p className="answer-correct">LOGIN SUCCESSFUL</p>
      <h1>{config.title}</h1>
      {config.intro && (
        <>
          <p>{config.intro}</p>
          <hr className="answer-divider" />
        </>
      )}
      <form onSubmit={check}>
        {config.questions.map((question, qi) => (
          <div key={qi} className="answer-question">
            {question.prompt && <p>{question.prompt}</p>}
            {question.fields.map((field, fi) => (
              <div key={fi} className="answer-field">
                {field.label && <label>{field.label}</label>}
                <input
                  type="text"
                  value={values[qi][fi]}
                  onChange={(e) => setValue(qi, fi, e.target.value)}
                  disabled={results[qi][fi] === true}
                  className={
                    results[qi][fi] === true ? 'field-correct'
                      : results[qi][fi] === false ? 'field-wrong'
                        : ''
                  }
                  placeholder="Enter your answer"
                />
                {results[qi][fi] === true && <span className="field-status correct">Correct!</span>}
                {results[qi][fi] === false && <span className="field-status wrong">Wrong</span>}
              </div>
            ))}
          </div>
        ))}
        {!allCorrect && <button type="submit">Check Answers</button>}
      </form>
      {allCorrect && (
        <>
          <p className="answer-correct">Correct!</p>
          <button type="button" onClick={() => setStage('done')}>Continue</button>
        </>
      )}
    </section>
  )
}

export default AnswerTerminal
