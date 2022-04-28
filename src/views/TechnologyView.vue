<template>
  <div id="tech-view">
    <TheNavigation></TheNavigation>
    <header>
      <h5><span aria-hidden="true"> 03 </span> space launch 101</h5>
    </header>

    <img :src="getImageUrl(url)" alt="Algo" class="tech-img" />

    <ul class="tech-nav">
      <li v-for="(tech, index) in techInfo" :key="tech.id">
        <router-link
          class="nav-links"
          :class="{ 'default-active': !$route.params.id && tech.id === 0 }"
          :to="{
            name: 'Technology',
            params: {
              title: tech.title,
              description: tech.description,
              url: tech.url,
              id: tech.id,
            },
          }"
        >
          {{ index++ }}
        </router-link>
      </li>
    </ul>

    <div class="tech-header">
      <p class="subh2">the terminology...</p>
      <h4 class="title">
        {{ $route.params.title ?? techInfo[0].title }}
      </h4>
    </div>
    <div class="description">
      <p>
        {{ $route.params.description ?? techInfo[0].description }}
      </p>
    </div>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';

export default {
  name: 'TechView',
  components: {
    TheNavigation,
  },
  data() {
    return {
      techInfo: [
        {
          title: 'launch vehicle',
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! ",
          url: 'image-launch-vehicle-landscape.jpg',
          id: 0,
        },
        {
          title: 'space port',
          description:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
          url: 'image-spaceport-landscape.jpg',
          id: 1,
        },
        {
          title: 'space capsule',
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          url: 'image-space-capsule-landscape.jpg',
          id: 2,
        },
      ],
      url: 'image-launch-vehicle-landscape.jpg',
    };
  },
  watch: {
    $route(to) {
      this.url = to.params.url;
    },
  },
  methods: {
    getImageUrl(url) {
      return new URL(`../assets/images/technology/${url}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss" scoped>
#tech-view {
  min-height: 100vh;
  height: 710px;
  background-image: url('../assets/images/technology/background-technology-mobile.jpg');
  background-position: center;

  header {
    text-align: center;
    margin-bottom: 2rem;

    h5 {
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--font-light);
    }

    span {
      color: grey;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .tech-img {
    height: 170px;
    display: block;
    width: 100%;
    margin-inline: auto;
  }

  .tech-nav {
    display: flex;
    justify-content: center;
    gap: 1.3rem;

    margin-top: 1.5em;
    margin-bottom: 1.7em;

    li a {
      display: grid;
      place-items: center;

      width: 40px;
      aspect-ratio: 1;

      border: 1px solid whitesmoke;
      border-radius: 50%;
      background-color: #0b0d17;
      color: white;
      font-weight: 400;
      font-family: 'Bellefair', serif;
    }

    .router-link-active,
    .default-active {
      background-color: white;
      color: black;
    }
  }

  .description,
  p {
    color: var(--font-grey);
  }

  .tech-header {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1em;

    .title {
      font-size: 1.5rem;
      color: var(--font-light);
    }

    .subh2 {
      margin-bottom: 0.6rem;
    }
  }

  .description {
    text-align: center;
    margin-inline: auto;
    line-height: 1.6rem;
    width: 35ch;

    // padding-inline: 1.5rem;
  }
}
</style>
