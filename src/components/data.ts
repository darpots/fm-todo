import type { Todo } from "../types/types";

export let initialTodos: Todo[] = [
  {
    id: Math.random(),
    description: "Complete online Javascript course",
    completed: true,
  },
  {
    id: Math.random(),
    description: "Jog around the park 3x",
    completed: false,
  },
  {
    id: Math.random(),
    description: "10 minutes meditation",
    completed: false,
  },
  {
    id: Math.random(),
    description: "Read for 1 hour",
    completed: false,
  },
  {
    id: Math.random(),
    description: "Pick up groceries",
    completed: false,
  },
  {
    id: Math.random(),
    description: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];
