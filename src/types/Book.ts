export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  comment: string;
  owner: string;
  location: string;
  createdAt: Date;
}

// MongoDB integration placeholder
export const fetchRecentBooks = async (): Promise<Book[]> => {
  // TODO: Implement MongoDB connection and query
  // Return last 10 books ordered by createdAt
  return [];
};

export const addBook = async (book: Omit<Book, 'id' | 'createdAt'>): Promise<Book> => {
  // TODO: Implement MongoDB connection and insertion
  return {} as Book;
};

export const searchBooks = async (filters: Partial<Book>): Promise<Book[]> => {
  // TODO: Implement MongoDB connection and filtered query
  return [];
};