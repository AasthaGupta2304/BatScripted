# BatScripted API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Health Check
```
GET /health
Response: { status: "🦇 Batman is ready!", timestamp: "..." }
```

### Missions
```
GET /missions - Get all missions
POST /missions - Create new mission
GET /missions/:id - Get mission details
PUT /missions/:id - Update mission
DELETE /missions/:id - Delete mission
```

### Equipment
```
GET /equipment - Get all equipment
POST /equipment/control - Control equipment
GET /equipment/:id - Get equipment details
```

### Communications
```
GET /allies - Get list of allies
POST /messages - Send encrypted message
GET /messages - Get message history
```

### Crime Map
```
GET /crimes - Get all crime incidents
GET /crimes/:id - Get incident details
POST /crimes/:id/respond - Respond to incident
```

## Socket.io Events

```
connect - User connects to server
mission-update - Mission status changes
ally-online - Ally comes online
message-received - New message arrived
incident-alert - New crime reported
```

---

*For developers accessing Batman's infrastructure* 🦇