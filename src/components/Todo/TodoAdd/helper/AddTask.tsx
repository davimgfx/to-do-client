import React from 'react';

export default function AddTask() {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o nome da task"
          className="bg-gray-200 rounded-xl h-8 px-4"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Descrição</label>
        <textarea
          name="
    "
          id=""
          placeholder="Digite a descrição da task"
          className="bg-gray-200 rounded-xl px-4 py-2 resize-none w-full h-20"></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary rounded-xl text-white cursor-pointer disabled:opacity-50">
        Adicionar tarefa
      </button>
    </>
  );
}
