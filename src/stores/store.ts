import { browser } from "$app/environment";

import type { Todo } from "../types/types";
import { writable } from "svelte/store";
import { getLocalStorage, setLocalStorage } from "../routes/localStorage";
import { initialTodos } from "../components/data";

export const dark = writable(<boolean>false);
export const allTodos = writable(<Todo[]>getTodos());

function toggle() {
  dark.update(($dark) => {
    $dark = !$dark;
    return $dark;
  });
}

function getTodos() {
  let data;
  if (browser) {
    data = getLocalStorage();
  }
  return data || initialTodos;
}

function addTodo(input: string) {
  allTodos.update(($allTodos) => {
    $allTodos = [
      { id: Math.random(), description: input, completed: false },
      ...$allTodos,
    ];
    setLocalStorage($allTodos);
    return $allTodos;
  });
}

function removeTodo(todo: Todo) {
  allTodos.update(($allTodos) => {
    $allTodos = $allTodos.filter((el) => todo.description !== el.description);
    setLocalStorage($allTodos);
    return $allTodos;
  });
}

function toggleCompleted(todo: Todo) {
  allTodos.update(($allTodos) => {
    $allTodos = $allTodos.map((el) =>
      todo.description === el.description
        ? { ...el, completed: !el.completed }
        : el
    );
    setLocalStorage($allTodos);
    return $allTodos;
  });
}

function clearCompleted() {
  allTodos.update(($allTodos) => {
    $allTodos = $allTodos.filter((todo) => !todo.completed);
    setLocalStorage($allTodos);
    return $allTodos;
  });
}

export { addTodo, clearCompleted, toggleCompleted, removeTodo, toggle };
