const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const { createServer } = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(helmet());
app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
  console.log('🦇 Connection:', socket.id);
  socket.on('disconnect', () => {
    console.log('🦇 Disconnected:', socket.id);
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: '🦇 Batman is ready!', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🦇 Batman Dashboard Backend running on port ${PORT}`);
});