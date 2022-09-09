<template>
  <div class="navigation">
    <nuxt-link to="/logout" class="navigation__logo">
      <div class="logo"><img src="~assets/wing.png" alt="wing-logo"></div>
    </nuxt-link>
    <nav class="navigation__links">
      <nuxt-link v-for="(name, index) in getPageNames"
                 :key="index" :to="name">
        <button class="navigation__link"
                :class="{active: getActiveIndex === index }"
                @click="navigateTable($event.target.innerText)">{{ name }}
        </button>
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  methods: {
    ...mapActions({setActivePage: "setActivePage", fetchTables: "fetchTables"}),
    navigateTable(name) {
      this.setActivePage(name)
    }
  },
  computed: {
    ...mapGetters({
      getActiveIndex: "getActiveIndex",
      getPageNames: "getPageNames",
      getActiveNamePage: "getActiveNamePage"
    })
  }
}
</script>

<style>
.navigation {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
}

.navigation__logo {
  position: absolute;
  left: 54px;
}

.logo img {
  height: 45px;
  width: 45px;
}

.navigation__link {
  color: #525252;
  font-weight: 500;
  text-align: center;
}

.navigation__links > *:first-of-type {
  margin-right: 90px;
}

.active {
  position: relative;
  color: #7A529D;
}

.active::after {

  content: "";
  position: absolute;
  bottom: -8px;
  left: -5%;
  height: 2px;
  width: 110%;
  display: flex;
  margin: 0 auto;
  background-color: #7A529D;

}
</style>