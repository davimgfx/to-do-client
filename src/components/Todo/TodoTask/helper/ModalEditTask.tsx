import React, { useRef, useState } from 'react';
import { api } from '../../../../utils/api';

interface ModalEditTaskProps {
  title: string;
  description: string | undefined;
  completed: boolean;
  taskId: number;
  setIsOpenModalEdit: (isOpen: boolean) => void;
  accessToken: string | null;
}

export default function ModalEditTask({
  title: initialTitle,
  description: initialDescription,
  completed: initialCompleted,
  taskId,
  setIsOpenModalEdit,
  accessToken,
}: ModalEditTaskProps) {
  const formRef = useRef<HTMLFormElement>(null);

  // Estado para controlar os inputs
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription || '');
  const [completed, setCompleted] = useState(initialCompleted);

  async function updateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.put(
        `/api/v1/task/${taskId}`,
        {
          title,
          description,
          completed,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log('Tarefa atualizada com sucesso:', response);

      // Fechar o modal após a atualização
      setIsOpenModalEdit(false);
    } catch (error) {
      console.error('Erro ao atualizar a tarefa:', error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <form
        className="relative z-50 w-96 mx-auto my-16 bg-white rounded-xl transform transition-all duration-300 ease-in-out p-4"
        onSubmit={updateTask}
        ref={formRef}>
        <p className="text-gray-700">Tarefa id: {taskId}</p>

        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o nome da task"
            className="bg-gray-200 rounded-xl h-8 px-4"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição da task"
            className="bg-gray-200 rounded-xl px-4 py-2 resize-none w-full h-20"></textarea>
        </div>
        <div>
          <label htmlFor="completed" className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="h-4 w-4"
            />
            <span>A tarefa está feita?</span>
          </label>
        </div>

        <div className="mt-2 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-white border-gray-400 border rounded-xl"
            onClick={() => setIsOpenModalEdit(false)}>
            Sair
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary rounded-xl text-white cursor-pointer disabled:opacity-50">
            Salvar
          </button>
        </div>
      </form>
      <div
        className="fixed inset-0 z-20 bg-black bg-opacity-50"
        onClick={() => setIsOpenModalEdit(false)}></div>
    </div>
  );
}
