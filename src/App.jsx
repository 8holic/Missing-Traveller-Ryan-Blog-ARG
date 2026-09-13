import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import AboutMe from './AboutMe.jsx'
import BlogEntry from './BlogEntry.jsx'
import Article from './Article.jsx'
import AnswerTerminal from './AnswerTerminal.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/blog" element={<BlogEntry />} />
        <Route path="/blog/article/:slug" element={<Article />} />
        <Route path="/answer" element={<AnswerTerminal />} />
      </Routes>
    </>
  )
}

export default App
