# BatScripted Deployment Guide

## Frontend Deployment (Netlify/Vercel)

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

### Vercel
1. Import project from GitHub
2. Vercel auto-detects Next.js
3. Click Deploy

## Backend Deployment (Render)

1. Create new Web Service
2. Connect GitHub repository
3. Set start command: `npm start`
4. Add environment variables
5. Deploy

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/batscripted
JWT_SECRET=your_secret_key
FRONTEND_URL=your_frontend_url
NODE_ENV=production
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=your_backend_url
```

## Database Setup

1. Create MongoDB Atlas account
2. Create cluster
3. Get connection string
4. Add to backend .env

---

*Deploy with caution - Batman's operations depend on it!* 🦇