<template>
  <!-- :style="{ background: background || ' #0c0e18' }" -->
  <nav id="navigation" role="navigation">
    <div class="page-logo">
      <router-link to="/">
        <img src="../assets/images/shared/logo.svg" alt="Page logo"
      /></router-link>
    </div>

    <div class="separator"></div>

    <button
      @click="isDropdownOpen = !isDropdownOpen"
      class="mobile-nav-toggle"
      :class="isDropdownOpen ? 'mobile-nav-toggle-on' : 'mobile-nav-toggle-off'"
      aria-controls="main-navigation"
      aria-expanded="false"
    >
      <span class="sr-only">Menu</span>
    </button>
    <ul
      class="main-navigation"
      :style="
        !isDropdownOpen
          ? 'transform: translateX(100%)'
          : 'transform: translateX(0%)'
      "
    >
      <li>
        <router-link :to="{ name: 'Home' }">
          <span aria-hidden="true"> 00 </span> HOME
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Destination' }" data-route="Destination">
          <span aria-hidden="true"> 01 </span> DESTINATION
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Crew' }">
          <span aria-hidden="true"> 02 </span> CREW
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Technology' }">
          <span aria-hidden="true"> 03 </span> TECHNOLOGY
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  created() {
    console.log(this.$route);
  },
  // computed: {
  //   route() {
  //     console.log(this.$route);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100px;

  font-family: 'Barlow Condensed';
  font-size: 16px;
  letter-spacing: 2.7px;

  .page-logo {
    position: absolute;
    left: 2rem;
    top: 2rem;

    img {
      width: 40px;
    }
  }

  .main-navigation {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    list-style: none;
    background: hsl(0 0% 0% / 0.8);

    padding-left: 10vw;
    margin: 0;

    span {
      font-weight: bold;
      margin-inline-end: 0.4em;
    }

    li a {
      text-decoration: none;
      color: white;
    }
  }

  .mobile-nav-toggle {
    display: none;
  }

  @supports (backdrop-filter: blur()) {
    .main-navigation {
      background: hsl(0 0% 15% / 0.2);
      backdrop-filter: blur(1em);
    }
  }

  @media (max-width: 560px) {
    .main-navigation {
      position: fixed;
      inset: 0 0 0 25%;
      z-index: 555;

      flex-direction: column;
      gap: 3rem;
      padding-block: min(20vh, 10rem);

      transition: 0.3s ease;

      li {
        padding-block: 5px;

        &:hover {
          border-right: 3.5px solid white;
        }

        li > [attribute='Destination'] {
          padding-block: 5px;
          border-right: 3.5px solid white;
        }
      }
    }

    .mobile-nav-toggle {
      display: block;
      position: absolute;
      right: 1rem;
      top: 2.65rem;
      z-index: 999;

      border: 0;

      width: 2rem;
      aspect-ratio: 1;

      cursor: pointer;
    }

    .mobile-nav-toggle-on {
      background: url('../assets/images/shared/icon-close.svg') no-repeat;
    }
    .mobile-nav-toggle-off {
      background: url('../assets/images/shared/icon-hamburger.svg');
      background-repeat: no-repeat;
    }
  }

  @media (min-width: 560px) {
    .main-navigation {
      padding-block: 2rem;
      padding-inline: clamp(2rem, 10vw, 11.5rem);
      transform: translateX(0%) !important;
      span {
        display: none;
      }
    }
  }

  @media (min-width: 990px) {
    .main-navigation {
      li a:hover {
        border-bottom: 2px solid white;
        padding-block: 30px;
      }

      span {
        display: inline;
      }
    }

    .separator {
      width: 480px;
      //TODO Modificar color
      border-bottom: 1px solid var(--color-font-grey, 10%);
      opacity: 0.3;

      transform: translateX(65px);
      z-index: 10;
    }
  }
}
</style>
