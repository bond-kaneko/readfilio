FROM node:22.14.0-slim

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# ポート5173を公開
EXPOSE 5173

# 開発サーバーを起動
CMD ["npm", "run", "dev"] 