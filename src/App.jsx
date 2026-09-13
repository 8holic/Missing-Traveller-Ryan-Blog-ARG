import { Routes, Route, useLocation, NavLink } from 'react-router-dom'
import AboutMe from './AboutMe.jsx'
import BlogEntry from './BlogEntry.jsx'
import Article from './Article.jsx'
import AnswerTerminal from './AnswerTerminal.jsx'

function App() {
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== '/answer' && (
        <nav className="blog-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About Me
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Articles
          </NavLink>
        </nav>
      )}
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
