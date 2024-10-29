import { useState, useEffect } from "react";
import { Book, fetchRecentBooks, addBook, searchBooks } from "./types/Book";
import { BookPlus, Library } from "lucide-react";
import AddBookModal from "./components/AddBookModal";
import BookList from "./components/BookList";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [recentBooks, setRecentBooks] = useState<Book[]>([]);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    loadRecentBooks();
  }, []);

  const loadRecentBooks = async () => {
    const books = await fetchRecentBooks();
    setRecentBooks(books);
  };

  const handleAddBook = async (bookData: any) => {
    await addBook(bookData);
    loadRecentBooks();
  };

  const handleSearch = async (filters: any) => {
    setIsSearching(true);
    const results = await searchBooks(filters);
    setSearchResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-3">
              <Library className="text-blue-500" size={28} />
              <h1 className="text-xl sm:text-2xl font-bold">
                Biblioteca Personal
              </h1>
            </div>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center justify-center space-x-2 transition duration-150 ease-in-out w-full sm:w-auto"
            >
              <BookPlus size={20} />
              <span>Añadir Libro</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        <SearchBooks onSearch={handleSearch} />

        {isSearching ? (
          <BookList title="Resultados de Búsqueda" books={searchResults} />
        ) : (
          <BookList title="Libros Añadidos Recientemente" books={recentBooks} />
        )}
      </main>

      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBook}
      />
    </div>
  );
}

export default App;
