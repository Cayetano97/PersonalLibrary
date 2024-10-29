import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBooksProps {
  onSearch: (filters: any) => void;
}

export default function SearchBooks({ onSearch }: SearchBooksProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    title: '',
    author: '',
    publisher: '',
    owner: '',
    location: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const fields = [
    { key: 'author', label: 'Autor' },
    { key: 'publisher', label: 'Editorial' },
    { key: 'owner', label: 'Propietario' },
    { key: 'location', label: 'Ubicación' },
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <form onSubmit={handleSearch}>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar libros..."
              value={filters.title}
              onChange={(e) => setFilters(prev => ({ ...prev, title: e.target.value }))}
              className="w-full bg-gray-700 border border-gray-600 rounded-md pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white flex items-center gap-2"
          >
            <Filter size={20} />
            Filtros
          </button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {fields.map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  type="text"
                  value={filters[field.key as keyof typeof filters]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    [field.key]: e.target.value
                  }))}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            ))}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}