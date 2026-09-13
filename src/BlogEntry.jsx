import { Link } from 'react-router-dom'
import { articles } from './articles.js'

function BlogEntry() {
  return (
    <div className="blog-home">
      <section className="blog-box">
        <h2>Articles</h2>
        <div className="articles-list">
          {articles.map(article => (
            <div key={article.slug} className="article-card">
              <h3>{article.title}</h3>
              <p className="article-date">{article.date}</p>
              <p>{article.body.find(b => b.text)?.text.slice(0, 150)}...</p>
              <Link to={`/blog/article/${article.slug}`} className="blog-link">
                Read Article
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default BlogEntry
