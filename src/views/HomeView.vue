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
  height: 667px;

  background: url('../assets/images/home/background-home-mobile.png');
  background-repeat: no-repeat;

  color: var(--font-grey);

  header {
    text-align: center;
    margin: 0 auto;

    :first-child {
      font-size: 16px;
      margin-bottom: 1.2em;
    }

    h2 {
      font-size: 95px;
      color: var(--font-light);
    }
  }

  main {
    // margin: 1.2rem;
    padding: 1.2rem;
    overflow: hidden;

    > p {
      font-size: 18px;
      line-height: 25px;
      text-align: center;
    }

    .explore-button {
      display: grid;
      place-items: center;

      width: 140px;
      aspect-ratio: 1;

      background-color: #fff;
      border-radius: 50%;

      cursor: pointer;
      margin: 3rem auto;

      &:hover {
        box-shadow: 0 0 0 30px rgba(128, 128, 128, 0.35);
      }

      > * {
        color: var(--bg-dark);
        letter-spacing: 2.5px;
      }
    }
  }

  @media (min-width: 375px) {
    min-height: 100vh;

    background: url('../assets/images/home/background-home-tablet.png');
    background-position: center;
  }

  @media (min-width: 768px) {
    background: url('../assets/images/home/background-home-desktop.png');
    background-position: bottom;
  }
}
</style>
