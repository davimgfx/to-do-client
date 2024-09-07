import { CircleX, Pencil } from 'lucide-react';
import React from 'react';

export default function Task({
  title,
  completed,
}: {
  title: string;
  completed: boolean;
}) {
  return (
    <div className="w-full p-2 border-gray-400 border rounded-xl flex justify-between">
      <div className='flex gap-2'>
        <input type="checkbox" checked={completed} />
        <span className={`${completed ? "line-through" : ""}`}>{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <Pencil className=" w-4 cursor-pointer" />
        <CircleX className="w-4 cursor-pointer" />
      </div>
    </div>
  );
}
