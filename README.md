# 📚 Readfolio

A web service for managing books you've read as a portfolio.

## 🚀 Tech Stack

### Backend
- **Rails**: 
- **PostgreSQL**:5

### Frontend
- **React**:
- **TypeScript**:

## Local setup

### Prerequisites
- Docker & Docker Compose
- Google Cloud Console account (for OAuth setup)

### 1. Clone Repository
```bash
git clone <repository-url>
cd readfolio
```

### 2. Google OAuth Setup
1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials
3. Add `http://localhost:3000/auth/google_oauth2/callback` to authorized redirect URIs

### 3. Environment Variables
```bash
cp .env.example .env
```

Edit the `.env` file and set your Google OAuth credentials:
```
GOOGLE_CLIENT_ID=your_actual_google_client_id
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret
```

### 4. Start Application
```bash
# Start services with Docker Compose
docker-compose up --build

# First time only: Setup database
docker-compose exec backend rails db:create db:migrate
```

### 5. Access
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 📁 Project Structure

```
readfolio/
├── backend/          # Rails API
│   ├── app/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── ...
│   ├── config/
│   ├── db/
│   └── Dockerfile.dev
├── frontend/         # React App
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── ...
│   ├── package.json
│   └── Dockerfile
├── mobile/           # Future mobile app
├── docker-compose.yml
└── README.md
```

## 📝 License

This project is licensed under the MIT License.
