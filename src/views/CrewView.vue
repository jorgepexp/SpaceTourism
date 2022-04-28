<template>
  <div id="crew-view">
    <TheNavigation></TheNavigation>
    <header>
      <h5><span aria-hidden="true"> 02 </span> meet your crew</h5>
    </header>

    <img :src="getImageUrl(url)" alt="Crew member photo" class="member-img" />

    <div class="separator"></div>

    <ul class="crew-nav">
      <li v-for="member in crewInfo" :key="member.id">
        <router-link
          class="nav-links"
          :class="{ 'default-active': !$route.params.id && member.id === 0 }"
          :to="{
            name: 'Crew',
            params: {
              name: member.name,
              description: member.description,
              role: member.role,
              url: member.url,
              id: member.id,
            },
          }"
        >
          <p class="circle"></p>
        </router-link>
      </li>
    </ul>

    <div class="member-header">
      <h3 class="member-role">
        {{ $route.params.role ?? crewInfo[0].role }}
      </h3>
      <h4 class="member-name">
        {{ $route.params.name ?? crewInfo[0].name }}
      </h4>
    </div>

    <div class="member-description">
      <p>
        {{ $route.params.description ?? crewInfo[0].description }}
      </p>
    </div>
  </div>
</template>

<script>
import TheNavigation from '../components/TheNavigation.vue';

export default {
  name: 'CrewView',
  components: {
    TheNavigation,
  },
  data() {
    return {
      crewInfo: [
        {
          name: 'douglas hurley',
          description:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
          role: 'commander',
          url: 'image-douglas-hurley.webp',
          id: 0,
        },
        {
          name: 'mark shuttleworth',
          description:
            'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
          role: 'mission specialist',
          url: 'image-mark-shuttleworth.webp',
          id: 1,
        },
        {
          name: 'victor glover',
          description:
            'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
          role: ' pilot',
          url: 'image-victor-glover.webp',
          id: 2,
        },
        {
          name: 'anousheh ansari',
          description:
            'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
          role: 'flight engineer',
          url: 'image-anousheh-ansari.webp',
          id: 3,
        },
      ],
      url: 'image-douglas-hurley.webp',
    };
  },
  watch: {
    $route(to) {
      this.url = to.params.url;
    },
  },
  methods: {
    getImageUrl(url) {
      return new URL(`../assets/images/crew/${url}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="scss" scoped>
#crew-view {
  min-height: 100vh;
  height: 710px;
  background-image: url('../assets/images/crew/background-crew-mobile.jpg');
  background-position: center;

  header {
    text-align: center;
    margin-bottom: 2rem;

    h5 {
      color: var(--font-light);
      font-size: 16px;
      text-transform: uppercase;
    }

    span {
      color: grey;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .member-img {
    display: block;
    height: 223px;
    margin-inline: auto;
  }

  .crew-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 1.5em;
    margin-bottom: 1.7em;

    a .circle {
      width: 10px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: rgba(169, 169, 169, 0.85);
      border: none;
    }

    .router-link-active .circle,
    .default-active p {
      background-color: white;
    }
  }

  .member-header {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1em;

    .member-role {
      font-size: 16px;
      color: hsl(0, 0%, 65%);
      opacity: 0.9;
      margin-bottom: 0.5em;
    }

    .member-name {
      font-size: 24px;
      color: var(--font-light);
    }
  }

  .member-description {
    text-align: center;
    line-height: 25px;
    margin-bottom: 2rem;
    color: var(--font-grey);

    p {
      padding: 0 2rem;
    }
  }

  .separator {
    width: 90%;
    height: 1px;

    background-color: hsl(0, 0%, 70%);
    opacity: 0.2;
    margin: 0 auto;
  }
}
</style>
