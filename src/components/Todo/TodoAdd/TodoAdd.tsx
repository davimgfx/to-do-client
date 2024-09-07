import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import AddTask from './helper/AddTask';

export default function TodoBoard() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return (
    <form className="py-5 px-5 border border-gray-400 flex flex-col w-96 rounded-xl gap-4">
      <div className="flex justify-between">
        <h2>Adicionar tarefa</h2>
        {isAddTaskOpen ? (
          <ChevronUp
            className="cursor-pointer"
            onClick={() => setIsAddTaskOpen(false)}
          />
        ) : (
          <ChevronDown
            className="cursor-pointer"
            onClick={() => setIsAddTaskOpen(true)}
          />
        )}
      </div>
      {isAddTaskOpen && <AddTask />}
    </form>
  );
}
