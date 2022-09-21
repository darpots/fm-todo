<script lang="ts">
  import type { Todo } from "../types/types";

  export let activeTodos: number;
  export let action: string | boolean;
  import { allTodos, clearCompleted } from "../stores/store";

  $: activeTodos = $allTodos.filter((el) => !el.completed).length;
</script>

<div class="action-container">
  <p>
    {activeTodos} items left
  </p>
  <div class="actions">
    <p class={action === "all" && "selected"} on:click={() => (action = "all")}>
      All
    </p>
    <p
      class="middle {action === 'active' && 'selected'}"
      on:click={() => (action = "active")}
    >
      Active
    </p>
    <p
      class={action === "completed" && "selected"}
      on:click={() => (action = "completed")}
    >
      Completed
    </p>
  </div>

  <p class={action} on:click={clearCompleted}>Clear Completed</p>
</div>

<style lang="scss">
  @import "../css/breakpoints";

  .action-container {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 0.75rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem 1.25rem;
    letter-spacing: -0.166667px;
    color: #5b5e7e;
    border-radius: 0 0 5px 5px;
    background: var(--todoBackground);

    @media screen and (min-width: $desktop) {
      font-size: 0.875rem;
      line-height: 0.875rem;
      letter-spacing: -0.194444px;
      padding-block: 0;
    }

    p {
      cursor: pointer;
    }
  }

  .actions {
    position: absolute;
    top: 4.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: -1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    border-radius: 5px;
    background: var(--todoBackground);

    @media screen and (min-width: $desktop) {
      position: static;
      width: auto;
    }

    .middle {
      margin-inline: 1.125rem;
    }

    p:hover {
      color: var(--hover);
    }

    p.selected {
      color: var(--brightBlue);
    }
  }
</style>
