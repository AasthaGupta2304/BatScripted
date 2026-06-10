import { useState, useEffect } from 'react';
import Link from 'next/link';

const FakeCoverPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [guessCount, setGuessCount] = useState(0);

  const handleBatClick = () => {
    setGuessCount(guessCount + 1);
    if (guessCount + 1 === 3) {
      setRevealed(true);
    }
  };

  useEffect(() => {
    let sequence = '';
    const handleKeyPress = (e) => {
      sequence += e.key.toUpperCase();
      if (sequence.includes('BAT')) {
        setRevealed(true);
        sequence = '';
      }
      setTimeout(() => {
        sequence = '';
      }, 2000);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (revealed) {
    return (
      <div className="min-h-screen bg-bat-black text-white font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-6 animate-pulse">🦇</div>
          <h1 className="text-4xl font-bold mb-8 text-bat-gold">WELCOME, BATMAN</h1>
          <p className="text-xl text-gray-300 mb-8">Access Granted</p>
          <Link href="/dashboard" className="inline-block px-8 py-3 bg-bat-red hover:bg-red-700 rounded font-bold text-lg transition">
            ENTER DASHBOARD →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-900 font-serif p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center border-4 border-black pb-4 mb-8">
          <h1 className="text-6xl font-bold">GOTHAM GAZETTE</h1>
          <p className="text-lg mt-2">All the News That's Fit to Print</p>
          <p className="text-sm text-gray-600 mt-1">Tuesday, June 10, 2089 • Price: $2.00</p>
        </div>

        <div className="border-b-4 border-black pb-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">WAYNE ENTERPRISES STOCK SOARS</h2>
          <p className="text-sm text-gray-600 mb-4">By Clark Kent</p>
          <p className="text-justify leading-relaxed mb-4">
            GOTHAM CITY — Wayne Enterprises announced record-breaking quarterly earnings today. CEO Bruce Wayne stated in a press release: "Our company is committed to making Gotham a safer place through cutting-edge technology."
          </p>
        </div>

        <div className="fixed bottom-4 right-4 text-4xl cursor-pointer hover:scale-110 transition" onClick={handleBatClick}>
          🦇
        </div>
      </div>
    </div>
  );
};

export default FakeCoverPage;