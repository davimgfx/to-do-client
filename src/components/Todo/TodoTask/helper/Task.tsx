import { CircleX, Pencil } from 'lucide-react';
import React, { useState } from 'react';
import { api } from '../../../../utils/api';
import ModalEditTask from './ModalEditTask';

interface TaskProps {
  title: string;
  completed: boolean;
  taskId: number;
  accessToken: string | null;
  description?: string;
}

export default function Task({
  title,
  completed,
  taskId,
  accessToken,
  description,
}: TaskProps) {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  async function removeTask(e: React.MouseEvent) {
    e.preventDefault();

    const confirmDelete = window.confirm(
      `Tem certeza que deseja deletar a tarefa "${title}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await api.delete(`/api/v1/task/${taskId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('Tarefa deletada com sucesso:', response);
    } catch (error) {
      console.error('Erro ao deletar a tarefa:', error);
    }
  }

  return (
    <div className="w-full p-2 border-gray-400 border rounded-xl flex justify-between">
      <div className="flex gap-2">
        <span className={`${completed ? 'line-through' : ''}`}>{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <Pencil
          className="w-4 cursor-pointer"
          onClick={() => setIsOpenModalEdit(true)}
        />
        <CircleX
          className="w-4 cursor-pointer text-red-500"
          onClick={removeTask}
        />
      </div>
      {isOpenModalEdit && (
        <ModalEditTask
          title={title}
          completed={completed}
          description={description}
          taskId={taskId}
          setIsOpenModalEdit={setIsOpenModalEdit}
          accessToken={accessToken}
        />
      )}
    </div>
  );
}
