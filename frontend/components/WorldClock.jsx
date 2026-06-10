import { useState, useEffect } from 'react';

const WorldClock = () => {
  const [times, setTimes] = useState({});
  const [selectedTimezones, setSelectedTimezones] = useState([
    { name: 'Gotham City', offset: -5, label: 'EST' },
    { name: 'London', offset: 0, label: 'GMT' },
    { name: 'Tokyo', offset: 9, label: 'JST' },
    { name: 'Sydney', offset: 10, label: 'AEDT' },
    { name: 'Dubai', offset: 4, label: 'GST' },
  ]);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const newTimes = {};

      selectedTimezones.forEach((tz) => {
        const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const tzTime = new Date(utcTime.getTime() + tz.offset * 3600000);

        newTimes[tz.name] = {
          hours: String(tzTime.getHours()).padStart(2, '0'),
          minutes: String(tzTime.getMinutes()).padStart(2, '0'),
          seconds: String(tzTime.getSeconds()).padStart(2, '0'),
          date: tzTime.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        };
      });

      setTimes(newTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, [selectedTimezones]);

  const addTimezone = () => {
    const newTz = {
      name: 'New Location',
      offset: 0,
      label: 'UTC',
    };
    setSelectedTimezones([...selectedTimezones, newTz]);
  };

  const removeTimezone = (index) => {
    setSelectedTimezones(selectedTimezones.filter((_, i) => i !== index));
  };

  const updateTimezone = (index, field, value) => {
    const updated = [...selectedTimezones];
    updated[index][field] = field === 'offset' ? parseInt(value) : value;
    setSelectedTimezones(updated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-bat-gray border-2 border-bat-gold p-6 rounded">
        <h2 className="text-2xl font-bold text-bat-gold mb-6">🌍 WORLD CLOCK SYSTEM</h2>

        {/* Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {selectedTimezones.map((tz, index) => (
            <div
              key={index}
              className="bg-bat-black border-2 border-bat-gold p-6 rounded relative"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeTimezone(index)}
                className="absolute top-2 right-2 w-6 h-6 bg-bat-red hover:bg-red-700 rounded text-white font-bold text-sm transition"
              >
                ✕
              </button>

              {/* Location Name */}
              <h3 className="text-bat-gold font-bold mb-2 text-lg pr-6">{tz.name}</h3>

              {/* Digital Clock Display */}
              <div className="mb-4">
                <div className="bg-black border-2 border-bat-gold p-4 rounded text-center mb-3">
                  <div className="font-mono text-4xl font-bold text-bat-gold tracking-wider">
                    {times[tz.name]?.hours}:{times[tz.name]?.minutes}:{times[tz.name]?.seconds}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-mono">
                    {times[tz.name]?.date}
                  </div>
                </div>

                {/* Timezone Info */}
                <div className="flex justify-between text-xs text-gray-400 px-1">
                  <span>UTC {tz.offset >= 0 ? '+' : ''}{tz.offset}</span>
                  <span>{tz.label}</span>
                </div>
              </div>

              {/* Analog Clock Visual */}
              <div className="relative w-full h-32 bg-bat-black border border-bat-gold rounded-full mx-auto flex items-center justify-center">
                <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
                  {/* Clock face */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#ffd700" strokeWidth="2" />

                  {/* Hour markers */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 50 + 40 * Math.sin(angle);
                    const y1 = 50 - 40 * Math.cos(angle);
                    const x2 = 50 + 35 * Math.sin(angle);
                    const y2 = 50 - 35 * Math.cos(angle);
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#ffd700"
                        strokeWidth="2"
                      />
                    );
                  })}

                  {/* Hour hand */}
                  {times[tz.name] && (() => {
                    const hours = parseInt(times[tz.name].hours) % 12;
                    const minutes = parseInt(times[tz.name].minutes);
                    const angle = ((hours * 30 + minutes * 0.5) * Math.PI) / 180;
                    const x = 50 + 20 * Math.sin(angle);
                    const y = 50 - 20 * Math.cos(angle);
                    return (
                      <line x1="50" y1="50" x2={x} y2={y} stroke="#ffd700" strokeWidth="3" />
                    );
                  })()}

                  {/* Minute hand */}
                  {times[tz.name] && (() => {
                    const minutes = parseInt(times[tz.name].minutes);
                    const angle = ((minutes * 6) * Math.PI) / 180;
                    const x = 50 + 30 * Math.sin(angle);
                    const y = 50 - 30 * Math.cos(angle);
                    return (
                      <line x1="50" y1="50" x2={x} y2={y} stroke="#dc143c" strokeWidth="2" />
                    );
                  })()}

                  {/* Center dot */}
                  <circle cx="50" cy="50" r="3" fill="#ffd700" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Add Timezone Button */}
        <button
          onClick={addTimezone}
          className="w-full px-4 py-2 bg-bat-gold hover:bg-yellow-500 text-bat-black font-bold rounded transition mb-6"
        >
          + ADD TIMEZONE
        </button>

        {/* Timezone Manager */}
        <div className="bg-bat-black border-2 border-bat-gold p-6 rounded">
          <h3 className="text-bat-gold font-bold mb-4">TIMEZONE CONFIGURATION</h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {selectedTimezones.map((tz, index) => (
              <div key={index} className="flex gap-3 items-end bg-bat-gray p-3 rounded">
                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">Location</label>
                  <input
                    type="text"
                    value={tz.name}
                    onChange={(e) => updateTimezone(index, 'name', e.target.value)}
                    className="w-full bg-bat-black border border-bat-gold px-2 py-1 rounded text-white text-sm focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">UTC Offset</label>
                  <input
                    type="number"
                    value={tz.offset}
                    onChange={(e) => updateTimezone(index, 'offset', e.target.value)}
                    min="-12"
                    max="12"
                    className="w-full bg-bat-black border border-bat-gold px-2 py-1 rounded text-white text-sm focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-xs text-gray-400 block mb-1">Label</label>
                  <input
                    type="text"
                    value={tz.label}
                    onChange={(e) => updateTimezone(index, 'label', e.target.value)}
                    className="w-full bg-bat-black border border-bat-gold px-2 py-1 rounded text-white text-sm focus:outline-none"
                  />
                </div>

                <button
                  onClick={() => removeTimezone(index)}
                  className="px-3 py-1 bg-bat-red hover:bg-red-700 text-white font-bold rounded transition text-sm"
                >
                  DELETE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldClock;