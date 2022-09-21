<script lang="ts">
  import desktopLightBackground from "../images/bg-desktop-light.jpg";
  import desktopDarkBackground from "../images/bg-desktop-dark.jpg";
  import mobileLightBackground from "../images/bg-mobile-light.jpg";
  import mobileDarkBackground from "../images/bg-desktop-dark.jpg";

  import { dark } from "../stores/store";
</script>

<div class="container">
  <picture>
    <source
      media="(min-width: 376px)"
      srcset={$dark ? desktopDarkBackground : desktopLightBackground}
    />
    <img
      alt="Todo background"
      src={$dark ? mobileDarkBackground : mobileLightBackground}
    />
  </picture>
</div>

<style lang="scss">
  @import "../css/breakpoints.scss";

  .container {
    max-width: 23.4375rem;
    margin: 0 auto;

    @media screen and (min-width: $desktop) {
      max-width: 90rem;
    }
  }
</style>
