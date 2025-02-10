import React from 'react';
import { Gamepad2, Star, ExternalLink } from 'lucide-react'; // Import icons

const games = [
  {
    title: 'Retro Pong Arkanoid',
    url: 'https://pong3.kc-media.com',
    color: 'bg-purple-500',
    description: 'Classic Pong remixed with arkanoid',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSLkLnZ8qXhIt7ciwvIxPmtdXM_KDnQFPVQ&s'
  },
  {
    title: 'Skittles',
    url: 'https://skittlesgame.netlify.app/',
    color: 'bg-pink-500',
    description: 'Catch the colorful skittles',
    image: 'https://sporked.com/wp-content/uploads/2023/05/EXPLAINERS_SKITTLES_HEADER.jpg'
  },
  {
    title: 'Soccer Stars',
    url: 'https://soccerstarsgame.com',
    color: 'bg-green-500',
    description: 'Score goals in this fun soccer challenge!',
    image: 'https://images.unsplash.com/photo-1599392227522-038b00c0db44?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Basketball Duel',
    url: 'https://basketballduel.netlify.app/',
    color: 'bg-orange-500',
    description: 'Challenge friends to basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <header className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="w-10 h-10 mr-2" />
            <h1 className="text-4xl font-bold">Simple Games</h1>
          </div>
          <p className="text-gray-400">Your favorite casual games in one place</p>
        </header>

        {/* Legend (Icon Descriptions) */}
        <div className="flex justify-center space-x-6 mb-8 text-gray-300 text-sm">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full shadow-md border border-gray-300">
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <span>Featured Game</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full shadow-md border border-gray-300">
              <ExternalLink className="w-5 h-5 text-blue-500" />
            </div>
            <span>External Link</span>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-xl">
                
                {/* Top Left Corner Icon */}
                <div className="absolute top-3 left-3 z-10 bg-white p-3 rounded-full shadow-2xl border border-gray-400">
                  {index === 0 || index === 1 || index === 3 ? ( 
                    <Star className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <ExternalLink className="w-6 h-6 text-blue-500" />
                  )}
                </div>

                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${game.color} bg-opacity-80 transition-opacity group-hover:bg-opacity-90 flex flex-col items-center justify-center p-8`}>
                  <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                  <p className="text-gray-100 text-sm">{game.description}</p>
                </div>
              </div>
            </a>
          ))}

          {/* Placeholder for future games */}
          <div className="aspect-square rounded-2xl bg-gray-700 bg-opacity-30 p-8 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-600">
            <Gamepad2 className="w-12 h-12 mb-4 text-gray-500" />
            <h2 className="text-2xl font-bold mb-2 text-gray-500">More Coming Soon</h2>
            <p className="text-gray-400 text-sm">Stay tuned for new games</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
