<script lang="ts">
  import "../css/global.scss";
  import { dark } from "../stores/store";
</script>

<svelte:head>
  <title>Frontend Mentor Todo</title>
</svelte:head>
<!-- <Background /> -->
<main class={$dark ? "dark" : ""}>
  <div class="container">
    <slot />
  </div>
</main>

<style lang="scss">
  @import "../css/breakpoints.scss";

  main {
    height: 100vh;

    transition: var(--transition);
    background-color: var(--pageBackground);
    background-image: url("/src/images/bg-mobile-light.jpg");
    background-repeat: no-repeat;
    background-position: top;
    --transition: 0.3s background-color ease-in-out;

    &.dark {
      transition: var(--transition);
      background-color: var(--pageBackground);
      background-image: url("/src/images/bg-mobile-dark.jpg");
    }

    @media screen and (min-width: $desktop) {
      background-image: url("/src/images/bg-desktop-light.jpg");

      &.dark {
        background-image: url("/src/images/bg-desktop-dark.jpg");
      }
    }
  }

  .container {
    width: 20.4375rem;
    margin-inline: auto;

    @media screen and (min-width: $desktop) {
      width: 33.75rem;
    }
  }
</style>
