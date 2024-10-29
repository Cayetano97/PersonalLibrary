import React, { useState } from "react";
import { X } from "lucide-react";

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (book: any) => void;
}

export default function AddBookModal({
  isOpen,
  onClose,
  onAdd,
}: AddBookModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    comment: "",
    owner: "",
    location: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  const fields = [
    { name: "title", label: "Título" },
    { name: "author", label: "Autor" },
    { name: "publisher", label: "Editorial" },
    { name: "owner", label: "Propietario" },
    { name: "location", label: "Ubicación" },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-0">
      <div className="bg-gray-900 rounded-lg w-full max-w-md p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 sticky top-0 bg-gray-900 py-2">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Añadir Nuevo Libro
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.name]: e.target.value,
                  }))
                }
                className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Comentario
            </label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  comment: e.target.value,
                }))
              }
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
          >
            Añadir Libro
          </button>
        </form>
      </div>
    </div>
  );
}
