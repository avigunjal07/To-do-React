import React from 'react'
import './App.css'
import TaskCard from './Components/TaskCard'
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="px-6 pb-24">
      <h1 className="text-3xl font-bold text-[#89986D] mb-2">
        ToDo App
      </h1>

      <p className="text-[#393f30] text-lg">
        Manage your tasks.
      </p>

      <div className="mt-4 h-[60vh] overflow-y-auto">
        {tasks.map((task, idx) => (
          <TaskCard
            key={idx}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white flex items-center justify-center gap-4 p-4 ">
        <input
          type="text"
          className="w-3/5 border-2 border-[#755252] rounded px-3 py-2 text-lg focus:outline-none md:text-base"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button
          onClick={addTask}
          className="bg-[#89986D] text-white px-5 py-2 rounded hover:bg-[#383f2b] transition"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default App;