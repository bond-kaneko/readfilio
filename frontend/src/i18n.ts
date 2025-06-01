import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ja: {
    translation: {
      // ヘッダー
      "app.title": "📚 Readfolio",
      "app.subtitle": "読んだ本をポートフォリオとして管理しよう",
      
      // ローディング
      "loading": "読み込み中...",
      
      // ログイン
      "login.title": "ログインして始めよう",
      "login.description": "Googleアカウントでログインして、読書記録を始めましょう",
      "login.google_button": "Googleでログイン",
      
      // 特徴
      "features.title": "Readfolioの特徴",
      "features.reading_record.title": "📚 読書記録",
      "features.reading_record.description": "読んだ本を簡単に記録・管理",
      "features.rating_review.title": "⭐ 評価・レビュー",
      "features.rating_review.description": "本の評価やレビューを記録",
      "features.statistics.title": "📊 統計表示",
      "features.statistics.description": "読書傾向を可視化",
      "features.portfolio.title": "🔗 ポートフォリオ",
      "features.portfolio.description": "読書履歴を公開・共有",
      
      // ダッシュボード
      "dashboard.greeting": "こんにちは、{{name}}さん！",
      "dashboard.logout": "ログアウト",
      
      // 本のセクション
      "books.recent_title": "📖 最近読んだ本",
      "books.no_books": "まだ本が登録されていません",
      "books.add_button": "本を追加",
      
      // 統計
      "stats.title": "📊 読書統計",
      "stats.books_this_year": "今年読んだ本",
      "stats.total_books": "総読書数",
      "stats.favorite_genre": "お気に入りジャンル",
      "stats.books_count": "{{count}}冊",
      "stats.no_data": "-",
      
      // エラー
      "error.auth_check": "認証チェックエラー:",
      "error.logout": "ログアウトエラー:"
    }
  },
  en: {
    translation: {
      // Header
      "app.title": "📚 Readfolio",
      "app.subtitle": "Manage your reading portfolio",
      
      // Loading
      "loading": "Loading...",
      
      // Login
      "login.title": "Get Started",
      "login.description": "Sign in with your Google account to start tracking your reading",
      "login.google_button": "Sign in with Google",
      
      // Features
      "features.title": "Readfolio Features",
      "features.reading_record.title": "📚 Reading Records",
      "features.reading_record.description": "Easily record and manage books you've read",
      "features.rating_review.title": "⭐ Ratings & Reviews",
      "features.rating_review.description": "Rate and review your books",
      "features.statistics.title": "📊 Statistics",
      "features.statistics.description": "Visualize your reading trends",
      "features.portfolio.title": "🔗 Portfolio",
      "features.portfolio.description": "Share your reading history",
      
      // Dashboard
      "dashboard.greeting": "Hello, {{name}}!",
      "dashboard.logout": "Logout",
      
      // Books section
      "books.recent_title": "📖 Recently Read",
      "books.no_books": "No books registered yet",
      "books.add_button": "Add Book",
      
      // Statistics
      "stats.title": "📊 Reading Statistics",
      "stats.books_this_year": "Books This Year",
      "stats.total_books": "Total Books",
      "stats.favorite_genre": "Favorite Genre",
      "stats.books_count": "{{count}} books",
      "stats.no_data": "-",
      
      // Errors
      "error.auth_check": "Authentication error:",
      "error.logout": "Logout error:"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ja',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    }
  });

export default i18n; 