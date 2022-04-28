<template>
  <div id="home">
    <TheNavigation></TheNavigation>
    <header>
      <h5>SO, YOU WANT TO TRAVEL TO</h5>
      <h2>SPACE</h2>
    </header>
    <main>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <div class="explore-button">
        <p class="subh1">Explore</p>
      </div>
    </main>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';

export default {
  name: 'Home',
  components: {
    TheNavigation,
  },
};
</script>

<style lang="scss">
#home {
  min-height: 100vh;
  background: url('../assets/images/home/background-home-mobile.png');
  background-repeat: no-repeat;

  header {
    text-align: center;
    margin-inline: auto;
    margin-block-start: 7rem;

    h5 {
      font-size: 1rem;
      margin-bottom: 1.2em;
    }

    h2 {
      font-size: 95px;
    }
  }

  main {
    padding: 1.2rem;
    overflow: hidden;

    > p {
      text-align: center;
      font-size: 1.1rem;
      line-height: 25px;
      color: var(--font-grey);
    }

    .explore-button {
      display: grid;
      place-items: center;

      width: 140px;
      aspect-ratio: 1;

      text-transform: uppercase;
      background-color: hsl(0, 0%, 100%);
      border-radius: 50%;

      cursor: pointer;
      margin: 3rem auto;

      &:hover {
        box-shadow: 0 0 0 30px rgba(128, 128, 128, 0.35);
      }

      > p {
        color: var(--bg-dark);
        letter-spacing: 2.5px;
      }
    }
  }

  @media (min-width: 375px) {
    background: url('../assets/images/home/background-home-tablet.png');
    background-position: center;

    header {
      h2 {
        font-size: 150px;
      }
      h5 {
        font-size: 20px;
      }
    }

    main {
      > p {
        width: 50ch;
        margin-inline: auto;
        margin-block-end: 10rem;
      }

      .explore-button {
        width: 242px;

        p {
          font-size: 32px;
        }
      }
    }
  }

  @media (min-width: 769px) {
    background: url('../assets/images/home/background-home-desktop.png');
    background-position: bottom;
  }

  // @media (min-width: 1024px) {
  //   background: url('../assets/images/home/background-home-desktop.png');
  //   background-position: bottom;
  // }
}
</style>
