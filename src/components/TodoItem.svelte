<script lang="ts">
  export let todo: Todo;

  import type { Todo } from "../types/types";
  import { toggleCompleted, removeTodo } from "../stores/store";
  import iconCross from "../images/icon-cross.svg";
  import iconCheck from "../images/icon-check.svg";
</script>

<div class="container">
  <div class="todo">
    <div class="flex">
      <div
        class="icon {todo.completed && 'completed'}"
        on:click={() => toggleCompleted(todo)}
      >
        {#if todo.completed}
          <img src={iconCheck} alt="" />
        {/if}
      </div>
      <p class="todoItem {todo.completed && 'strikethrough'}">
        {todo.description}
      </p>
    </div>
    <div class="cross" on:click={() => removeTodo(todo)}>
      <img src={iconCross} alt="" />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../css/breakpoints";

  .container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--checkbox);
    background-color: var(--todoBackground);
  }

  .container:first-of-type {
    border-radius: 5px 5px 0 0;
    border-top: none;
  }

  .todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.25rem;
    margin-right: 0.75rem;
    border: 1px solid var(--checkbox);

    @media screen and (min-width: $desktop) {
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

  .completed {
    background: var(--gradient);
    border: none;
  }

  .todoItem {
    font-size: 0.75rem;
    line-height: 0.75rem;
    letter-spacing: -0.166667px;
    color: var(--textPrimary);

    @media screen and (min-width: $desktop) {
      font-size: 1.125rem;
      line-height: 1.125rem;
      letter-spacing: -0.25px;
    }
  }

  .strikethrough {
    text-decoration: line-through;
    color: var(--checkbox);
  }

  .cross {
    margin-right: 1.25rem;

    @media screen and (min-width: $desktop) {
      margin-right: 1.5rem;
    }

    img {
      width: 0.75rem;

      @media screen and (min-width: $desktop) {
        width: 1.125rem;
      }
    }
  }
</style>
