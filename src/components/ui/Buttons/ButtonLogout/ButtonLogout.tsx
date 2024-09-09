import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function ButtonLogout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('accessToken');
    navigate('/login');
    toast.success('Logout realizado com sucesso!');
  }

  return (
    <button
      className="px-4 py-2 bg-red-500 rounded-xl text-white"
      onClick={handleLogout}>
      Logout
    </button>
  );
}
