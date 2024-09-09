import React from 'react';

interface ButtonsNavigateProps {
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  isNextPageDisabled: boolean;
}

export default function ButtonsNavigate({
  prevPage,
  nextPage,
  page,
  isNextPageDisabled,
} : ButtonsNavigateProps) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
        Página Anterior
      </button>

      <button
        onClick={nextPage}
        disabled={isNextPageDisabled}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
        Próxima Página
      </button>
    </div>
  );
}
