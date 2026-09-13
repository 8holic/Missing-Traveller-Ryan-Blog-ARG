import { NavLink } from 'react-router-dom'
import './blog.css'

function NavBar() {
  return (
    <nav className="blog-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About Me
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Articles
      </NavLink>
    </nav>
  )
}

export default NavBar
