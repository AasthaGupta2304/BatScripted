# 🚀 BatScripted Deployment Checklist

## ✅ Pre-Deployment Setup

- [ ] Git repository is public and accessible
- [ ] All code is committed and pushed to GitHub
- [ ] README.md is complete and informative
- [ ] .gitignore is properly configured

---

## 🗄️ Database Setup (MongoDB Atlas)

- [ ] Create MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
- [ ] Create new project named "BatScripted"
- [ ] Create M0 FREE cluster
- [ ] Select region closest to your users
- [ ] Get connection string: `mongodb+srv://user:pass@cluster.mongodb.net/batscripted`
- [ ] Create database user with strong password
- [ ] Add Network Access: `0.0.0.0/0` (or specific IPs for production)
- [ ] Copy connection string to save securely

---

## 🌐 Frontend Deployment (Netlify)

### Initial Setup
- [ ] Go to https://netlify.com
- [ ] Sign up with GitHub account
- [ ] Click "New site from Git"
- [ ] Authorize Netlify to access your GitHub
- [ ] Select repository: `AasthaGupta2304/BatScripted`

### Build Configuration
- [ ] Base directory: `frontend`
- [ ] Build command: `npm run build`
- [ ] Publish directory: `.next`

### Environment Variables (Add in Netlify Dashboard)
- [ ] `NEXT_PUBLIC_API_URL=https://batscripted-backend.onrender.com` (add after backend is deployed)
- [ ] `NEXT_PUBLIC_SOCKET_URL=https://batscripted-backend.onrender.com`

### Deployment
- [ ] Click "Deploy site"
- [ ] Wait for build to complete
- [ ] Note your Netlify URL (e.g., `https://batscripted.netlify.app`)
- [ ] Test fake cover page works (click bat 3x or press B-A-T)

---

## 🚀 Backend Deployment (Render)

### Initial Setup
- [ ] Go to https://render.com
- [ ] Sign up with GitHub account
- [ ] Click "New +"
- [ ] Select "Web Service"
- [ ] Connect GitHub repository
- [ ] Authorize Render to access GitHub

### Service Configuration
- [ ] Service name: `batscripted-backend`
- [ ] Environment: `Node`
- [ ] Build command: `npm install`
- [ ] Start command: `npm start`
- [ ] Plan: `Free`

### Environment Variables (Add in Render Dashboard)
- [ ] `PORT` = `5000`
- [ ] `NODE_ENV` = `production`
- [ ] `MONGODB_URI` = `mongodb+srv://username:password@cluster.mongodb.net/batscripted`
- [ ] `JWT_SECRET` = Generate a strong random key
- [ ] `FRONTEND_URL` = Your Netlify URL (e.g., `https://batscripted.netlify.app`)
- [ ] `CORS_ORIGIN` = Your Netlify URL

### Deployment
- [ ] Click "Create Web Service"
- [ ] Wait for deployment to complete
- [ ] Note your Render URL (e.g., `https://batscripted-backend.onrender.com`)
- [ ] Test API endpoint: Visit `https://batscripted-backend.onrender.com/api/health`

---

## 🔗 Integration Setup

### Update Frontend with Backend URL
- [ ] Go to Netlify dashboard
- [ ] Go to Site settings > Build & deploy > Environment
- [ ] Add/update `NEXT_PUBLIC_API_URL` with your Render backend URL
- [ ] Trigger redeploy (or click "Trigger deploy")
- [ ] Wait for new build to complete

### Verify CORS Configuration
- [ ] Backend should accept requests from your Netlify URL
- [ ] Test API calls from frontend work without CORS errors

---

## 🧪 Post-Deployment Testing

### Frontend Tests
- [ ] Frontend loads successfully
- [ ] Gotham Gazette fake cover displays correctly
- [ ] Secret access methods work (bat click, B-A-T keyboard)
- [ ] Dashboard loads all tabs:
  - [ ] 📋 MISSIONS
  - [ ] 🤖 EQUIPMENT
  - [ ] 💬 ALLIES
  - [ ] 🗺️ CRIME MAP
  - [ ] 🎵 MUSIC
  - [ ] 🌍 WORLD CLOCK
  - [ ] 🏢 WAYNE ENTERPRISES
- [ ] World Clock displays multiple timezones
- [ ] All interactive features work (buttons, inputs, etc.)
- [ ] Responsive design works on mobile
- [ ] No console errors

### Backend Tests
- [ ] Health check endpoint works: `/api/health`
- [ ] CORS headers are correct
- [ ] Environment variables are loaded
- [ ] MongoDB connection is established
- [ ] No server errors in logs

### Integration Tests
- [ ] Frontend successfully communicates with backend
- [ ] Real-time updates work (if WebSocket features)
- [ ] All dashboard features can load data

---

## 🔒 Security Checklist

- [ ] JWT_SECRET is strong and random (never use weak passwords)
- [ ] Environment variables are NOT in version control
- [ ] MONGODB_URI credentials are protected
- [ ] CORS is configured to only allow your frontend domain
- [ ] Rate limiting is enabled on backend
- [ ] HTTPS is enforced (Netlify & Render handle this)
- [ ] No sensitive data logged or exposed

---

## 📊 Monitoring & Maintenance

### Ongoing Tasks
- [ ] Monitor Render logs for errors
- [ ] Monitor Netlify build logs
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Regular database backups configured
- [ ] Check uptime monitoring
- [ ] Review security regularly

### Performance Optimization
- [ ] Frontend build size optimized
- [ ] Database queries optimized
- [ ] Caching strategy implemented
- [ ] CDN configured for assets

---

## 🎉 Deployment Complete!

Once all checks are complete, your BatScripted deployment is ready!

### Live URLs
- **Frontend:** `https://batscripted.netlify.app`
- **Backend:** `https://batscripted-backend.onrender.com`
- **Database:** MongoDB Atlas (backend handles connections)

### Share Your Project
- [ ] GitHub: https://github.com/AasthaGupta2304/BatScripted
- [ ] Live demo: Your Netlify URL
- [ ] Documentation: Your README.md

---

## 🆘 Troubleshooting

### Build Failures
**Problem:** Netlify build fails
- Check `frontend/package.json` for correct dependencies
- Verify Node version compatibility
- Clear Netlify cache and redeploy

**Problem:** Render build fails
- Check `backend/package.json` for correct dependencies
- Verify `start` script exists in package.json
- Check environment variables are set

### Connection Issues
**Problem:** Frontend can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS settings in backend
- Verify backend is running (check Render logs)

**Problem:** Backend can't connect to MongoDB
- Verify connection string is correct
- Check MongoDB Atlas Network Access includes Render's IP
- Verify database user credentials

### Domain Issues
**Problem:** Custom domain not working
- Update DNS records correctly
- Wait for DNS propagation (up to 24 hours)
- Verify domain is pointed to the right service

---

*Deploy with confidence - Batman's operations depend on it!* 🦇

For detailed setup instructions, see DEPLOYMENT_GUIDE.md
