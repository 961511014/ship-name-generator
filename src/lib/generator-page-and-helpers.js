// src/app/generator/page.js
import GeneratorForm from '@/components/GeneratorForm'

export const metadata = {
  title: 'Ship Name Generator | Find the Perfect Vessel Name',
  description: 'Use our advanced ship name generator to create the ideal name for your boat, yacht, or vessel. Filter by style, type, and more.',
  keywords: 'ship name generator, boat name ideas, yacht naming, vessel name creator, nautical names',
}

export default function GeneratorPage() {
  return (
    <>
      <section className="bg-blue-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white">Advanced Ship Name Generator</h1>
            <p className="text-xl text-blue-100 mb-0">
              Create the perfect name for your vessel with our comprehensive ship name generator.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Generate Your Ship Name</h2>
              <p className="text-slate-600 mb-8 text-center">
                Use the options below to customize your ship name search. Our ship name generator will create personalized name suggestions based on your preferences.
              </p>
              
              <GeneratorForm />
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">About Our Ship Name Generator</h2>
              <p>
                Finding the perfect name for your vessel is an important tradition in maritime culture. Our ship name generator helps boat owners discover unique, meaningful, and memorable names that reflect the character and purpose of their watercraft.
              </p>
              <p>
                Whether you're naming a sailboat, yacht, fishing boat, or any other type of vessel, our ship name generator provides tailored suggestions across various styles and themes. From classic nautical names to modern and creative options, you'll find inspiration for the perfect ship name.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Tips for Choosing a Ship Name</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Consider the vessel's purpose and character</li>
                <li>Think about names that are easy to pronounce over radio communications</li>
                <li>Choose a name with personal meaning or significance</li>
                <li>Research maritime traditions and naming conventions</li>
                <li>Check if the name is already registered in your area</li>
                <li>Test how the name looks displayed on your vessel</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Ship Naming Traditions</h3>
              <p>
                Throughout maritime history, ships have been named following various traditions across different cultures. Many vessels were named after female figures, mythological characters, or natural phenomena. Military vessels often carried names of historical battles, heroes, or virtues.
              </p>
              <p>
                Today, while some still follow these traditions, many boat owners choose names that reflect their personal interests, professional background, or sense of humor. Our ship name generator incorporates both traditional and modern naming approaches to provide you with a wide range of options.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Why Use a Ship Name Generator?</h3>
                <p className="text-blue-800 mb-0">
                  The ship name generator helps you overcome naming block by providing fresh ideas and combinations you might not have considered. It saves time browsing through endless lists and helps you find names that are both meaningful and appropriate for maritime use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// src/lib/shipNames.js
// This file contains sample ship name data for the generator

// Historical/Classic ship names
export const classicNames = [
  "Endeavour", "Discovery", "Beagle", "Victory", "Bounty", 
  "Enterprise", "Challenger", "Defiant", "Intrepid", "Voyager",
  "Dauntless", "Resolution", "Adventure", "Reliant", "Valiant",
  "Courageous", "Atlantis", "Aurora", "Sovereign", "Monarch",
  "Constellation", "Resolute", "Triton", "Vanguard", "Odyssey",
  "Pioneer", "Trident", "Defender", "Guardian", "Illustrious"
];

// Modern/Contemporary ship names
export const modernNames = [
  "Blue Horizon", "Serenity", "Sea Spirit", "Ocean Mist", "Wave Dancer",
  "Liquid Asset", "Aquaholic", "Dream Weaver", "Liberty", "Freedom",
  "Tranquility", "Destiny", "Infinity", "Eclipse", "Solstice",
  "Impulse", "Velocity", "Momentum", "Enigma", "Mirage",
  "Inception", "Nebula", "Zenith", "Quantum", "Meridian",
  "Synthesis", "Element", "Horizon", "Azure", "Sapphire"
];

// Humorous/Funny ship names
export const funnyNames = [
  "Seas the Day", "Nauti Buoy", "Ship Happens", "Aquaholic", "Wet Dream",
  "Unsinkable II", "The Office Escape", "Knot Working", "Sea-renity Now", "Sail Mail",
  "Moor Often Than Knot", "Pier Pressure", "Water You Lookin' At", "Dock Holiday", "Hull of a Time",
  "Fishful Thinking", "Floating Point", "Feelin' Nauti", "Buoy Wonder", "Ship Faced",
  "Mast Confusion", "No More Mortgage", "Liquid Asset", "Miss Behavin'", "Wake Maker"
];

// Mythological ship names
export const mythologicalNames = [
  "Poseidon", "Neptune", "Triton", "Aegir", "Thetis",
  "Calypso", "Nereid", "Ceto", "Proteus", "Oceanus",
  "Amphitrite", "Charybdis", "Scylla", "Kraken", "Leviathan",
  "Medusa", "Siren", "Perseus", "Andromeda", "Pegasus",
  "Phoenix", "Chimera", "Hydra", "Cerberus", "Orpheus"
];

// Nautical-themed ship names
export const nauticalNames = [
  "Fair Winds", "Following Seas", "North Star", "Compass Rose", "Sea Breeze",
  "Blue Water", "Trade Wind", "Spindrift", "Windward", "Leeward",
  "Sea Mist", "Tide Runner", "Current Affair", "Wave Dancer", "Bow Spirit",
  "Mariner", "Navigator", "Voyager", "Seafarer", "Drifter",
  "Sea Rover", "Ocean Wanderer", "Gale Force", "Waypoint", "Fathom"
];

// src/lib/generator.js
import { classicNames, modernNames, funnyNames, mythologicalNames, nauticalNames } from './shipNames';

// Helper function to get random items from an array
const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Main generator function
export const generateShipNames = (category, style, prefix = '', count = 5) => {
  let namePool = [];
  
  // Add names based on selected style
  if (style === 'all' || style === 'classic') {
    namePool = [...namePool, ...classicNames];
  }
  
  if (style === 'all' || style === 'modern') {
    namePool = [...namePool, ...modernNames];
  }
  
  if (style === 'all' || style === 'funny') {
    namePool = [...namePool, ...funnyNames];
  }
  
  if (style === 'all' || style === 'mythological') {
    namePool = [...namePool, ...mythologicalNames];
  }
  
  if (style === 'all' || style === 'nautical') {
    namePool = [...namePool, ...nauticalNames];
  }
  
  // If no names are selected, use all
  if (namePool.length === 0) {
    namePool = [
      ...classicNames,
      ...modernNames,
      ...funnyNames,
      ...mythologicalNames,
      ...nauticalNames
    ];
  }
  
  // Filter by prefix if provided
  if (prefix && prefix.trim() !== '') {
    const cleanPrefix = prefix.trim().toLowerCase();
    namePool = namePool.filter(name => 
      name.toLowerCase().startsWith(cleanPrefix)
    );
  }
  
  // Filter by category (simplified for demo)
  // In a real implementation, you would have category-specific filtering
  if (category && category !== 'all') {
    // For demo purposes, we'll just shuffle the names to simulate category filtering
    namePool = namePool.sort(() => 0.5 - Math.random());
  }
  
  // Get random names from the pool
  let result = getRandomItems(namePool, count);
  
  // If we don't have enough names, generate some with prefixes or category-specific patterns
  if (result.length < count) {
    const additionalCount = count - result.length;
    
    // Create some placeholder generated names
    const baseWords = ["Sea", "Ocean", "Wave", "Wind", "Storm", "Star", "Horizon", "Voyage", "Sail", "Tide"];
    const suffixes = ["Explorer", "Voyager", "Spirit", "Wanderer", "Seeker", "Dreamer", "Navigator", "Mariner", "Hunter", "Rider"];
    
    for (let i = 0; i < additionalCount; i++) {
      const baseWord = baseWords[Math.floor(