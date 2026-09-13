import { articles } from './articles.js'
import { useParams, Link } from 'react-router-dom'
import './blog.css'

function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="blog-home">
        <div className="blog-box">
          <h2>Article Not Found</h2>
          <p>The clue you're looking for doesn't exist — yet.</p>
          <Link to="/" className="blog-link">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-home">
      <section className="blog-box">
        <h2>{article.title}</h2>
        <p className="article-date">{article.date}</p>
        <p className="article-body">{article.body}</p>
        <Link to="/" className="blog-link">Back to Blog</Link>
      </section>
    </div>
  )
}

export default Article
