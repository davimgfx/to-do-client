import React, { useEffect, useState } from 'react';
import { api } from '../../../utils/api';
import Task from './helper/Task';

interface TodoTasksProps {
  uid: number;
  accessToken: string | null;
}

interface Task {
  completed: boolean;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  user_id: number;
  id: number;
}

export default function TodoTasks({ uid, accessToken }: TodoTasksProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    async function getTasks() {
      try {
        const response = await api.get(`/api/v1/tasks?user_id=${uid}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (accessToken) {
      getTasks();
    }
  }, [uid, accessToken, tasks]);

  return (
    <div className="py-5 px-5 border border-gray-400 flex flex-col w-96 rounded-xl gap-4">
      <h2>Tarefas</h2>

      {tasks.map((task) => (
        <Task key={task.id} title={task.title} completed={task.completed} taskId={task.id} accessToken={accessToken} description={task.description} />
      ))}
    </div>
  );
}
