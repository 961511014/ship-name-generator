'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [shipName, setShipName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 生成随机船名的函数
  const generateShipName = () => {
    setIsLoading(true);
    
    // 模拟API调用延迟
    setTimeout(() => {
      const prefixes = ['SS', 'HMS', 'RMS', 'MV', 'SV'];
      const adjectives = ['Swift', 'Brave', 'Mighty', 'Valiant', 'Serene', 'Golden'];
      const nouns = ['Voyager', 'Explorer', 'Discovery', 'Horizon', 'Endeavor', 'Navigator'];
      
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
      
      setShipName(`${randomPrefix} ${randomAdjective} ${randomNoun}`);
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">Ship Name Generator</h1>
        
        <div className="bg-white/30 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <p className="mb-6 text-lg text-center">
            Need a name for your vessel? Click the button below to generate a unique ship name!
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={generateShipName}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate Ship Name'}
            </button>
            
            {shipName && (
              <div className="mt-8 p-4 border-2 border-blue-500 rounded-md text-center">
                <h2 className="text-2xl font-bold text-blue-800">{shipName}</h2>
                <p className="text-sm mt-2 text-gray-600">Your new ship awaits its maiden voyage!</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">About Ship Name Generator</h2>
          <p className="mb-4">
            Our ship name generator helps captains, sailors, and maritime enthusiasts find the perfect name for their vessels.
            Whether you're naming a commercial ship, a private yacht, or a fictional vessel for your next novel, we've got you covered.
          </p>
          <p>
            Each generated name combines a traditional ship prefix with carefully selected adjectives and nouns to create a name that's
            both memorable and fitting for the high seas.
          </p>
        </div>
      </div>
    </main>
  );
}