# Deployment Guide for BatScripted

## Frontend Deployment (Netlify)

### Step 1: Prepare Your Repository
- Your code is already on GitHub: https://github.com/AasthaGupta2304/BatScripted

### Step 2: Deploy on Netlify
1. Go to https://netlify.com
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Choose repository: `AasthaGupta2304/BatScripted`
5. Set build settings:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Add environment variables:
   - `NEXT_PUBLIC_API_URL=your_backend_url` (set after backend is deployed)
7. Click "Deploy site"

### Netlify Configuration File
Create `frontend/netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Backend Deployment (Render)

### Step 1: Prepare Environment
- Create `backend/.env` with variables or use Render's environment dashboard

### Step 2: Deploy on Render
1. Go to https://render.com
2. Click "New +"
3. Select "Web Service"
4. Connect GitHub repository
5. Configure:
   - **Name:** `batscripted-backend`
   - **Runtime:** `Node`
   - **Build command:** `npm install`
   - **Start command:** `npm start`
6. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/batscripted
   JWT_SECRET=your_secret_key
   FRONTEND_URL=your_netlify_url
   NODE_ENV=production
   ```
7. Click "Create Web Service"

### Render Configuration File
Create `backend/render.yaml`:
```yaml
services:
  - type: web
    name: batscripted-backend
    runtime: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: PORT
        value: 5000
      - key: NODE_ENV
        value: production
```

---

## Database Setup (MongoDB Atlas)

### Step 1: Create MongoDB Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create new project: "BatScripted"

### Step 2: Create Cluster
1. Click "Create" on the project
2. Select "M0 FREE" tier
3. Choose region closest to you
4. Name it "batscripted-cluster"

### Step 3: Get Connection String
1. Click "Connect"
2. Choose "Drivers"
3. Copy connection string: `mongodb+srv://user:pass@cluster.mongodb.net/batscripted`
4. Add to Render environment variables

### Step 4: Whitelist IP
1. Go to "Network Access"
2. Add IP: `0.0.0.0/0` (allows all IPs - only for development)
3. For production, add specific IPs only

---

## Final Steps

### 1. Update Frontend with Backend URL
After backend is deployed on Render, you'll get a URL like: `https://batscripted-backend.onrender.com`

Update in Netlify:
- Add environment variable: `NEXT_PUBLIC_API_URL=https://batscripted-backend.onrender.com`
- Redeploy frontend

### 2. Test Deployment
- Visit your Netlify URL
- Try the fake cover page (click bat 3x or press B-A-T)
- Access dashboard
- Test all features

### 3. Custom Domain (Optional)
**Netlify:**
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS instructions

**Render:**
1. Go to Settings > Custom Domains
2. Add your domain
3. Update DNS records

---

## Deployment Summary

| Service | URL | Status |
|---------|-----|--------|
| Frontend (Netlify) | `https://your-netlify-url.netlify.app` | Ready |
| Backend (Render) | `https://batscripted-backend.onrender.com` | Ready |
| Database (MongoDB Atlas) | Atlas Console | Ready |

---

## Troubleshooting

### Build Fails on Netlify
- Check Node version: `node --version`
- Clear cache: Netlify dashboard > Deploys > Clear cache and redeploy
- Check `package.json` dependencies

### Backend Connection Issues
- Verify MongoDB connection string
- Check Network Access whitelist in MongoDB Atlas
- Ensure environment variables are set in Render

### CORS Errors
Update `backend/server.js`:
```javascript
const corsOptions = {
  origin: 'https://your-netlify-url.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));
```

---

*Deploy with confidence - Batman's operations depend on it!* 🦇
