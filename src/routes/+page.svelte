<script lang="ts">
  import type { Todo } from "../types/types";
  import { allTodos } from "../stores/store";

  import Header from "../components/Header.svelte";
  import TodoInput from "../components/TodoInput.svelte";
  import TodoItem from "../components/TodoItem.svelte";
  import Actions from "../components/Actions.svelte";

  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";

  let action = "all";

  $: items = filterTodos($allTodos, action) as Todo[];

  function filterTodos(todos: Todo[], action: string) {
    switch (action) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  }

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<section>
  <Header />
  <TodoInput />

  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each items as item (item.id)}
      <div animate:flip={{ duration: flipDurationMs }}>
        <TodoItem todo={item} />
      </div>
    {/each}
  </section>

  <Actions bind:action />
</section>
