import React from 'react';
import { Book } from '../types/Book';
import { Calendar, User, MapPin } from 'lucide-react';

interface BookListProps {
  books: Book[];
  title: string;
}

export default function BookList({ books, title }: BookListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors">
            <h3 className="text-lg font-medium text-white mb-2">{book.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{book.author}</p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <User size={16} className="mr-2" />
                {book.owner}
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin size={16} className="mr-2" />
                {book.location}
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Calendar size={16} className="mr-2" />
                {new Date(book.createdAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            {book.comment && (
              <p className="mt-3 text-sm text-gray-400 italic">"{book.comment}"</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}