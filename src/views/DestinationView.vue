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
      <div>
        <p class="subh2">avg. distance</p>
        <p class="subh1">
          {{ $route.params.avgDistance ?? destinationsList[0].avgDistance }}
        </p>
      </div>
      <div>
        <p class="subh2">est. travel time</p>
        <p class="subh1">
          {{ $route.params.travelTime ?? destinationsList[0].travelTime }}
        </p>
      </div>
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
    margin-block: 7rem 2rem;

    h5 {
      color: var(--font-light);
      font-size: 1rem;
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
    margin-inline: auto;
    margin-block-end: 2rem;
    width: 170px;
  }

  .planet-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    width: 70%;
    margin-block: 1rem 2rem;
    margin-inline: auto;

    li {
      display: block;
      font-size: 0.875rem;
      line-height: 40px;
      letter-spacing: 2px;
      cursor: pointer;

      & p {
        border-bottom: 3px solid transparent;
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
        border-bottom: 3px solid white;
      }
    }
  }

  .planet-description {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 38ch;
    text-align: center;

    line-height: 25px;
    margin-block-end: 2.5rem;
    margin-inline: auto;

    h3 {
      color: var(--font-light);
      margin-block-end: 1.2rem;
    }

    p {
      padding-inline: 2rem;
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
    gap: 0.7rem;

    margin-top: 2rem;

    > :nth-child(even) {
      margin-block-end: 1rem;
    }
  }
}

@media (min-width: 768px) {
  #destination-view {
    background-image: url('../assets/images/destination/background-destination-tablet.jpg');

    header {
      text-align: start;
      margin-block: 3rem 4rem;
      margin-inline: 2rem;

      h5 {
        font-size: 1.25rem;
      }
    }
    .planet-image {
      width: 300px;
    }

    .planet-nav {
      margin-block-end: 4rem;

      li {
        font-size: 1rem;
      }
    }

    .planet-description {
      h3 {
        font-size: 80px;
        margin-block-end: 2rem;
      }

      p {
        width: 75ch;
      }
    }

    .planet-coordinates {
      flex-direction: row;
      align-items: baseline;
      justify-content: center;
      gap: 0 6rem;

      > div {
        display: grid;
        place-items: center;
        gap: 0.5rem;
      }
    }
  }
}

@media (min-width: 1440px) {
  #destination-view {
    background-image: url('../assets/images/destination/background-destination-tablet.jpg');
  }
}
</style>
