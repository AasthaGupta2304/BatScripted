import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('missions');
  const [missions, setMissions] = useState([
    { id: 1, title: 'Stop Penguin Gang at Docks', priority: 'high', status: 'in-progress' },
    { id: 2, title: 'Patrol Downtown District', priority: 'medium', status: 'pending' },
  ]);

  const [equipment, setEquipment] = useState([
    { id: 1, name: 'Batmobile', status: 'active', battery: 95 },
    { id: 2, name: 'Batsuit Armor', status: 'active', battery: 87 },
  ]);

  return (
    <div className="min-h-screen bg-bat-black text-white font-mono">
      <header className="bg-bat-gray border-b-2 border-bat-gold p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🦇</span>
            <h1 className="text-3xl font-bold text-bat-gold">BATCAVE DASHBOARD</h1>
          </div>
        </div>
      </header>

      <nav className="bg-bat-gray border-b border-bat-gold flex">
        {[
          { id: 'missions', label: '📋 MISSIONS' },
          { id: 'equipment', label: '🤖 EQUIPMENT' },
          { id: 'communications', label: '💬 ALLIES' },
          { id: 'map', label: '🗺️ CRIME MAP' },
          { id: 'music', label: '🎵 MUSIC' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 font-bold transition ${
              activeTab === tab.id
                ? 'bg-bat-gold text-bat-black'
                : 'text-bat-gold hover:bg-bat-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'missions' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">📋 MISSION CONTROL</h2>
            <div className="space-y-3">
              {missions.map((mission) => (
                <div key={mission.id} className="bg-bat-black border border-bat-gold p-4 rounded">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-bat-gold">{mission.title}</h3>
                      <p className="text-gray-300 text-sm">Priority: {mission.priority.toUpperCase()}</p>
                    </div>
                    <span className="text-bat-gold font-bold">{mission.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'equipment' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">🤖 EQUIPMENT CONTROL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {equipment.map((item) => (
                <div key={item.id} className="bg-bat-black border border-bat-gold p-4 rounded">
                  <h3 className="text-lg font-bold text-bat-gold mb-2">{item.name}</h3>
                  <p className="text-green-400 font-bold mb-2">● {item.status.toUpperCase()}</p>
                  <div className="bg-bat-black border border-gray-600 rounded h-2">
                    <div className="bg-bat-gold h-full rounded" style={{ width: `${item.battery}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Battery: {item.battery}%</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'communications' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">💬 SECURE COMMUNICATIONS</h2>
            <p className="text-gray-300">Real-time messaging with allies coming soon...</p>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">🗺️ CRIME MAPPING SYSTEM</h2>
            <div className="w-full h-96 bg-bat-black border-2 border-bat-gold rounded flex items-center justify-center text-gray-500">
              📍 Gotham City Crime Tracking Map
            </div>
          </div>
        )}

        {activeTab === 'music' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">🎵 NIGHT PATROL MUSIC PLAYER</h2>
            <div className="bg-bat-black border-2 border-bat-gold p-8 rounded text-center">
              <div className="text-6xl mb-4">🎶</div>
              <h3 className="text-2xl font-bold text-bat-gold mb-2">Dark Knight Theme</h3>
              <p className="text-gray-300 mb-6">The Batcave Composer</p>
              <button className="px-6 py-2 bg-bat-gold hover:bg-yellow-500 text-bat-black font-bold rounded">▶️ PLAY</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;