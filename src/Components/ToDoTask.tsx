import React from "react";
import { Task } from "../Interfaces";

interface Props {
  task: Task;
}

const TodoTask = ({ task }: Props) => {
  return (
    <div>
      {task.taskName} {task.deadline}
    </div>
  );
};

export default TodoTask;
