import Link from "next/link";
import { TaskI } from "../../interfaces/task-i";

interface PropsI {
  task: any;
  deleteTask: (task: TaskI) => void;
  toggleTask: (task: TaskI) => void;
}

export function Task({ task, deleteTask, toggleTask }: PropsI) {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  function handleClick() {
    deleteTask(task);
  }

  function handleChange() {
    toggleTask({ ...task, isCompleted: !task.isCompleted });
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <Link href={`/todo/${task.id}`}>
        <a>
          <span className={task.isCompleted ? "task-completed" : ""}>
            {task.title}
          </span>
          {" - "}
          <span>{task.responsible}</span>
        </a>
      </Link>

      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </li>
  );
}
