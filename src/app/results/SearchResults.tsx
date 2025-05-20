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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filtered = properties.filter((p) =>
    (location === 'All locations' || p.location === location) &&
    (property === 'Any' || p.property === property) &&
    (bedrooms === 'Any' || p.bedrooms === bedrooms) &&
    (price === 'Any' || p.price === price)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Search Results</h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading properties...</p>
        ) : error ? (
          <p className="text-center text-red-500">Failed to load properties. Please try again later.</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500">No properties found for the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => {
              const imageList = p.images.split(',').filter(Boolean);
              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={imageList[0] || '/placeholder.jpg'}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.jpg';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{p.location}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {p.property}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        {p.bedrooms} BR
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                        {p.price}
                      </span>
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
