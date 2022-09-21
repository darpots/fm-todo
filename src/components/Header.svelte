<script lang="ts">
  import darkIcon from '../images/icon-sun.svg';
  import lightIcon from '../images/icon-moon.svg';
  import { dark, toggle } from "../stores/store.js";
</script>

<header>
  <div>
    <h1>todo</h1>
  </div>

  <div class="mode-icon">
    <img alt="Color mode icon" on:click={toggle} src={$dark ? darkIcon : lightIcon}/>
  </div>
</header>

<style lang="scss">
  @import '../css/breakpoints.scss';

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding-top: 3rem;
    text-transform: uppercase;

    @media screen and (min-width: $desktop) {
      align-items: baseline;
      margin-bottom: 2.5rem;
      padding-top: 4.375rem;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.75rem;
    color: var(--white);

    @media screen and (min-width: $desktop) {
      font-size: 2.5rem;
      line-height: 2.5rem;
      letter-spacing: 0.9375rem;
    }
  }

  .mode-icon {
    width: 1.25rem;

    @media screen and (min-width: $desktop) {
      width: 1.625rem;
    }
  }
</style>
