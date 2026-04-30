import { Trash } from "lucide-react";

function TaskCard({ task, deleteTask }) {
  return (
    <div className="
      bg-white
      my-3
      mx-auto
      px-5
      py-4
      flex
      justify-between
      items-center
      rounded-xl
      shadow-sm
      border
      border-gray-100
      hover:shadow-md
      transition
      duration-200
      group
    ">
      <span className="
        text-lg
        text-gray-800
        font-medium
        break-words
      ">
        {task}
      </span>

      <Trash
        size={20}
        className="
          cursor-pointer
          text-gray-400
          group-hover:text-red-600
          hover:scale-110
          transition
          duration-200
        "
        onClick={() => deleteTask(task)}
      />
    </div>
  );
}

export default TaskCard;