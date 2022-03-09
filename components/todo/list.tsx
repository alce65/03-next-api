// import "./todo.css";
import { Add } from "./add";
import { Task } from "./task";
import * as api from "../../services/api";
import { useEffect, useState } from "react";
import { TaskI } from "../../interfaces/task-i";

export function List() {
  const [tasks, setTasks] = useState<Array<TaskI>>([]);

  useEffect(() => {
    api.getAllTasks().then(({ data }) => {
      setTasks(data);
      console.log(data);
    });
  }, []);

  const deleteTask = (task: any) => {
    api
      .deleteTask(task)
      .then(({}) => setTasks(tasks.filter((item) => item.id != task.id)));
  };
  const toggleTask = (task: any) => {
    api
      .updateTask(task)
      .then(({ data }) =>
        setTasks(tasks.map((item) => (item.id === data.id ? data : item)))
      );
  };

  const addTask = (task: any) => {
    api.addTask(task).then(({ data }) => setTasks([...tasks, data]));
  };

  return (
    <>
      Lista de tareas
      <Add addTask={addTask} />
      {tasks.length ? (
        <>
          <h2>Lista de tareas</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <Task
                task={task}
                key={task.id}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
              />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
