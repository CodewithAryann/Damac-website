'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type Property = {
  id: number;
  title: string;
  location: string;
  property: string;
  bedrooms: string;
  price: string;
  images: string;
};

const SearchResults = () => {
  const searchParams = useSearchParams();

  const location = searchParams.get('location') || 'All locations';
  const property = searchParams.get('property') || 'Any';
  const bedrooms = searchParams.get('bedrooms') || 'Any';
  const price = searchParams.get('price') || 'Any';

  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          setProperties([]);
        }
      })
      .catch(() => setProperties([]));
  }, []);

  const filtered = properties.filter((p) =>
    (location === 'All locations' || p.location === location) &&
    (property === 'Any' || p.property === property) &&
    (bedrooms === 'Any' || p.bedrooms === bedrooms) &&
    (price === 'Any' || p.price === price)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Results</h1>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const imageList = p.images.split(',');
              return (
                <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={imageList[0] || '/placeholder.jpg'}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{p.title}</h2>
                    <p className="text-sm text-gray-600">{p.location}</p>
                    <div className="flex flex-wrap gap-2 my-2">
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">{p.property}</span>
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">{p.bedrooms} BR</span>
                      <span className="bg-gray-200 rounded-full px-2 py-1 text-xs">{p.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
