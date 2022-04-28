<template>
  <div id="destination-view">
    <TheNavigation></TheNavigation>
    <header>
      <h5><span aria-hidden="true"> 01 </span> PICK YOUR DESTINATION</h5>
    </header>

    <img :src="getImageUrl(url)" alt="Planet" class="planet-image" />

    <ul class="planet-nav">
      <li v-for="destination in destinationsList" :key="destination.id">
        <router-link
          class="nav-link"
          :class="{
            'default-active': !$route.params.id && destination.id === 0,
          }"
          :to="{
            name: 'Destination',
            params: {
              name: destination.name,
              description: destination.description,
              url: destination.url,
              avgDistance: destination.avgDistance,
              travelTime: destination.travelTime,
              id: destination.id,
            },
          }"
        >
          <p>{{ destination.name }}</p>
        </router-link>
      </li>
    </ul>

    <div class="planet-description">
      <h3>
        {{ $route.params.name ?? destinationsList[0].name }}
      </h3>

      <p>
        {{ $route.params.description ?? destinationsList[0].description }}
      </p>
    </div>

    <div class="separator" aria-hidden="true"></div>

    <div class="planet-coordinates">
      <p class="subh2">avg. distance</p>
      <p class="subh1">
        {{ $route.params.avgDistance ?? destinationsList[0].avgDistance }}
      </p>

      <p class="subh2">est. travel time</p>
      <p class="subh1">
        {{ $route.params.travelTime ?? destinationsList[0].travelTime }}
      </p>
    </div>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';
export default {
  name: 'DestinationView',
  components: {
    TheNavigation,
  },
  data() {
    return {
      destinationsList: [
        {
          name: 'MOON',
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          avgDistance: '384,400 KM',
          travelTime: '3 DAYS',

          url: 'image-moon.webp',
          id: 0,
        },
        {
          name: 'MARS',
          description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
          avgDistance: '225 MIL. KM',
          travelTime: '9 MONTHS',
          url: 'image-mars.webp',
          id: 1,
        },
        {
          name: 'EUROPA',
          description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
          avgDistance: '628 MIL. KM',
          travelTime: '3 YEARS',
          url: 'image-europa.webp',
          id: 2,
        },
        {
          name: 'TITAN',
          description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
          avgDistance: '1.6 BIL. KM',
          travelTime: '7 YEARS',
          url: 'image-titan.webp',
          id: 3,
        },
      ],
      url: 'image-moon.webp',
    };
  },
  watch: {
    $route(to) {
      this.url = to.params.url;
    },
  },
  methods: {
    getImageUrl(url) {
      return new URL(`../assets/images/destination/${url}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style lang="scss" scoped>
#destination-view {
  min-height: 100vh;
  height: 850px;

  background-image: url('../assets/images/destination/background-destination-mobile.jpg');
  background-size: cover;
  color: var(--font-grey);

  header {
    text-align: center;
    margin-block-start: 7rem;
    margin-block-end: 2rem;

    h5 {
      color: var(--font-light);
      font-size: 16px;
      letter-spacing: 3px;
    }

    span {
      color: grey;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .planet-image {
    display: flex;
    margin: 0 auto;

    width: 170px;
  }

  .planet-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 70%;
    margin-block: 1rem 2rem;
    margin-inline: auto;

    li {
      cursor: pointer;
      display: block;
      line-height: 30px;

      & p {
        border-bottom: 2px solid transparent;
      }

      & :hover {
        border-bottom-color: rgba(255, 255, 255, 0.5);
      }

      a:visited {
        color: var(--font-grey);
      }

      .router-link-active p,
      .default-active p {
        color: white;
        border-bottom: 2px solid white;
      }
    }
  }

  .planet-description {
    text-align: center;
    line-height: 25px;
    margin-bottom: 2rem;

    h3 {
      color: var(--font-light);
      margin: 2.5rem 0 1.2rem 0;
    }

    p {
      padding: 0 2rem;
    }
  }

  .separator {
    width: 90%;

    border-bottom: 1px solid var(--font-grey, 10%);
    opacity: 0.2;

    margin: 0 auto;
  }

  .planet-coordinates {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    margin-top: 2rem;
  }
}

@media (min-width: 768px) {
  #destination-view {
    background-image: url('../assets/images/destination/background-destination-tablet.jpg');
  }
}

@media (min-width: 1440px) {
  #destination-view {
    background-image: url('../assets/images/destination/background-destination-tablet.jpg');
  }
}
</style>
