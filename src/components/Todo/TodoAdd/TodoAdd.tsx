import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import AddTask from './helper/AddTask';


interface TodoBoardProps {
  uid: number;
  accessToken: string | null;
}

export default function TodoBoard({ uid, accessToken }: TodoBoardProps) {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  return (
    <div className="py-5 px-5 border border-gray-400 flex flex-col w-96 rounded-xl gap-4">
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
      {isAddTaskOpen && <AddTask uid={uid} accessToken={accessToken}/>}
    </div>
  );
}
