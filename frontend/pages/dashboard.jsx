import { useState } from 'react';
import MissionManager from '@/components/MissionManager';
import EquipmentControl from '@/components/EquipmentControl';
import AllyChat from '@/components/AllyChat';
import CrimeMap from '@/components/CrimeMap';
import MusicPlayer from '@/components/MusicPlayer';
import WorldClock from '@/components/WorldClock';

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
          <div className="text-sm text-gray-400">
            <p>Status: ACTIVE</p>
            <p className="text-bat-gold">System Online</p>
          </div>
        </div>
      </header>

      <nav className="bg-bat-gray border-b border-bat-gold overflow-x-auto">
        <div className="max-w-7xl mx-auto flex">
          {[
            { id: 'missions', label: '📋 MISSIONS', icon: '📋' },
            { id: 'equipment', label: '🤖 EQUIPMENT', icon: '🤖' },
            { id: 'communications', label: '💬 ALLIES', icon: '💬' },
            { id: 'map', label: '🗺️ CRIME MAP', icon: '🗺️' },
            { id: 'music', label: '🎵 MUSIC', icon: '🎵' },
            { id: 'clock', label: '🌍 WORLD CLOCK', icon: '🌍' },
            { id: 'wayne', label: '🏢 WAYNE ENTERPRISES', icon: '🏢' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-bold text-sm transition border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-bat-gold text-bat-black border-bat-gold'
                  : 'text-bat-gold border-transparent hover:bg-bat-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {activeTab === 'missions' && <MissionManager />}
        {activeTab === 'equipment' && <EquipmentControl />}
        {activeTab === 'communications' && <AllyChat />}
        {activeTab === 'map' && <CrimeMap />}
        {activeTab === 'music' && <MusicPlayer />}
        {activeTab === 'clock' && <WorldClock />}
        {activeTab === 'wayne' && (
          <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
            <h2 className="text-2xl font-bold text-bat-gold mb-4">🏢 WAYNE ENTERPRISES</h2>
            <p className="text-gray-300">Corporate management dashboard coming soon...</p>
          </div>
        )}
      </main>

      <footer className="bg-bat-gray border-t border-bat-gold mt-12 py-4 text-center text-gray-500 text-sm">
        <p>🦇 BatScripted v1.0.0 | For Batman's Eyes Only | Secure Connection Active</p>
      </footer>
    </div>
  );
};

export default Dashboard;