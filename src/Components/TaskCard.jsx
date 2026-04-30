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
    ">
      <span className="
        text-lg
        text-gray-800
        font-medium
      ">
        {task}
      </span>

      <Trash
        size={20}
        className="
          cursor-pointer
          text-gray-400
        "
        onClick={() => deleteTask(task)}
      />
    </div>
  );
}

export default TaskCard;