<template>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-light);

  h1 {
    font-size: 150px;
  }
  h2 {
    font-size: 100px;
  }
  h3 {
    font-size: 56px;
  }
  h4 {
    font-size: 32px;
  }
  h5 {
    font-size: 28px;
    letter-spacing: 4.75px;
    color: var(--color-font-grey);
  }

  h1,
  h2,
  h3,
  h4,
  .subh1 {
    font-weight: 400;
    font-family: 'Bellefair', serif;
  }

  h5,
  p,
  .subh2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: lighter;
  }

  .subh1 {
    font-size: 28px;
    color: var(--font-light);
  }

  .subh2 {
    font-size: 14px;
    letter-spacing: 2.35px;
    text-transform: uppercase;
  }

  p {
    color: var(--color-font-grey);
    font-size: 18px;
  }

  a {
    text-decoration: none;
  }

  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
}
</style>
