import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'

interface User {
  id: number
  email: string
  name: string
  avatar_url?: string
}

function App() {
  const { t, i18n } = useTranslation()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
    
    // URLからトークンを取得（Google認証後のリダイレクト）
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    
    if (token) {
      localStorage.setItem('token', token)
      // URLからトークンパラメータを削除
      window.history.replaceState({}, document.title, window.location.pathname)
      checkAuthStatus()
    }
  }, [])

  const checkAuthStatus = async () => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      setLoading(false)
      return
    }

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        localStorage.removeItem('token')
      }
    } catch (error) {
      console.error(t('error.auth_check'), error)
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google_oauth2'
  }

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token')
      await fetch('http://localhost:3000/api/v1/auth/logout', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    } catch (error) {
      console.error(t('error.logout'), error)
    } finally {
      localStorage.removeItem('token')
      setUser(null)
    }
  }

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value)
  }

  if (loading) {
    return (
      <div className="app">
        <div className="loading">{t('loading')}</div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div>
            <h1>{t('app.title')}</h1>
            <p>{t('app.subtitle')}</p>
          </div>
          <select 
            value={i18n.language} 
            onChange={handleLanguageChange} 
            className="language-select"
          >
            <option value="ja">🇯🇵 日本語</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </div>
      </header>

      <main className="main">
        {user ? (
          <div className="dashboard">
            <div className="user-info">
              <div className="user-avatar">
                {user.avatar_url ? (
                  <img src={user.avatar_url} alt={user.name} />
                ) : (
                  <div className="avatar-placeholder">👤</div>
                )}
              </div>
              <div className="user-details">
                <h2>{t('dashboard.greeting', { name: user.name })}</h2>
                <p>{user.email}</p>
              </div>
              <button onClick={handleLogout} className="logout-btn">
                {t('dashboard.logout')}
              </button>
            </div>

            <div className="content">
              <div className="section">
                <h3>{t('books.recent_title')}</h3>
                <div className="books-grid">
                  <div className="book-card placeholder">
                    <p>{t('books.no_books')}</p>
                    <button className="add-book-btn">{t('books.add_button')}</button>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>{t('stats.title')}</h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <h4>{t('stats.books_this_year')}</h4>
                    <p className="stat-number">{t('stats.books_count', { count: 0 })}</p>
                  </div>
                  <div className="stat-card">
                    <h4>{t('stats.total_books')}</h4>
                    <p className="stat-number">{t('stats.books_count', { count: 0 })}</p>
                  </div>
                  <div className="stat-card">
                    <h4>{t('stats.favorite_genre')}</h4>
                    <p className="stat-text">{t('stats.no_data')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="login-section">
            <div className="login-card">
              <h2>{t('login.title')}</h2>
              <p>{t('login.description')}</p>
              <button onClick={handleGoogleLogin} className="google-login-btn">
                <span className="google-icon">🔍</span>
                {t('login.google_button')}
              </button>
            </div>

            <div className="features">
              <h3>{t('features.title')}</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <h4>{t('features.reading_record.title')}</h4>
                  <p>{t('features.reading_record.description')}</p>
                </div>
                <div className="feature-card">
                  <h4>{t('features.rating_review.title')}</h4>
                  <p>{t('features.rating_review.description')}</p>
                </div>
                <div className="feature-card">
                  <h4>{t('features.statistics.title')}</h4>
                  <p>{t('features.statistics.description')}</p>
                </div>
                <div className="feature-card">
                  <h4>{t('features.portfolio.title')}</h4>
                  <p>{t('features.portfolio.description')}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
