<script lang="ts">
  import { addTodo } from "../stores/store";

  let inputValue: string;

  function addNewTodo() {
    addTodo(inputValue);
    inputValue = "";
  }
</script>

<form on:submit|preventDefault={() => addNewTodo()}>
  <input
    bind:value={inputValue}
    placeholder="Create a new todo..."
    type="text"
  />
</form>

<style lang="scss">
  @import "../css/breakpoints.scss";

  form {
    position: relative;
    margin-bottom: 1rem;

    @media screen and (min-width: $desktop) {
      margin-bottom: 1.5rem;
    }
  }

  input {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 0.75rem;
    width: 100%;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
    padding-left: 3.25rem;

    letter-spacing: -0.0104rem;
    color: var(--textPrimary);
    border: none;
    border-radius: 0.3125rem;
    outline: none;
    background-color: var(--todoBackground);

    @media screen and (min-width: $desktop) {
      font-size: 1.125rem;
      line-height: 1.125rem;
      padding-top: 1.4375rem;
      padding-bottom: 1.4375rem;
      padding-left: 4.5rem;
      letter-spacing: -0.0156rem;
    }
  }

  input::placeholder {
    color: var(--textSecondary);
  }

  input:focus::placeholder {
    color: transparent;
  }

  form::before {
    position: absolute;
    top: 0.875rem;
    left: 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    content: "";
    border: 0.0625rem solid var(--checkbox);
    border-radius: 50%;
    background-color: var(--todoBackground);

    @media screen and (min-width: $desktop) {
      width: 1.5rem;
      height: 1.5rem;
      top: 1.25rem;
      left: 1.5rem;
    }
  }
</style>
