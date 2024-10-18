import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search } from 'lucide-react';

interface Shoe {
  id: number;
  name: string;
  price: number;
  image: string;
}

function App() {
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/shoes/')
      .then(response => response.json())
      .then(data => {
        setShoes(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching shoes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <ShoppingBag className="mr-2" /> Shoe Store
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search shoes..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-xl">Loading shoes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shoes.map(shoe => (
              <div key={shoe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{shoe.name}</h2>
                  <p className="text-gray-600 mt-2">${shoe.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;