import React, { useRef } from 'react';
import { api } from '../../../../utils/api';
import { toast } from 'react-toastify';

interface AddTaskProps {
  uid: number | null;
  accessToken: string | null;
}

export default function AddTask({ uid, accessToken }: AddTaskProps) {
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    if (!title || title.length < 5) {
      toast.error('O nome da tarefa deve ter pelo menos 5 caracteres.');
      return;
    }

    if (!description || description?.length < 10) {
      toast.error('A descrição da tarefa deve ter pelo menos 10 caracteres.');
      return;
    }

    try {
      const response = await api.post(
        'api/v1/task',
        {
          title,
          description,
          user_id: uid,
          completed: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (formRef.current) {
        formRef.current.reset();
      }
      console.log(response);

      toast.success('Tarefa adicionada com sucesso');
    } catch (error) {
      toast.error('Erro ao adicionar tarefa');
      console.log(error);
    }
  }

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Digite o nome da task"
          className="bg-gray-200 rounded-xl h-8 px-4"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          placeholder="Digite a descrição da task"
          className="bg-gray-200 rounded-xl px-4 py-2 resize-none w-full h-20"></textarea>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary rounded-xl text-white cursor-pointer disabled:opacity-50 mt-4 w-full">
        Adicionar tarefa
      </button>
    </form>
  );
}
