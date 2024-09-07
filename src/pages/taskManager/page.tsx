import React, { useEffect, useState } from 'react';
import { decodeJWT, JwtPayload } from '../../utils/decodedTokenFunction';
import { logo } from '../../assets';
import TodoBoard from '../../components/Todo/TodoAdd/TodoAdd';
import TodoTasks from '../../components/Todo/TodoTask/TodoTasks';

export default function TaskManagerPage() {
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = localStorage.getItem('accessToken');
    setAccessToken(getToken);

    if (getToken) {
      const decoded = decodeJWT(getToken);
      setDecodedToken(decoded);
    }
  }, []);

  if (!decodedToken) {
    return (
      <div className="max-w-5xl mx-auto">
        <h1>Você não está logado</h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">
      <header>
        <nav className="flex items-center gap-2 justify-center py-4 border-b border-b-gray-200">
          <img
            src={logo}
            alt="logo do Task Manager"
            className="w-7 cursor-pointer"
          />
          <span className="text-2xl text-primary font-bold">Task Manager</span>
        </nav>
      </header>
      <main className="flex flex-col gap-2 justify-center items-center w-full  mt-4">
        <TodoBoard />
        <TodoTasks uid={decodedToken?.uid} accessToken={accessToken}/>
      </main>
    </section>
  );
}
