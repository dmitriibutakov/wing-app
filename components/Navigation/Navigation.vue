<template>
  <div class="navigation">
    <div class="navigation__logo">
      <div class="logo"><img src="~assets/wing.png" alt="wing-logo"></div>
    </div>
    <nav class="navigation__links">
      <button v-for="(name, index) in pageNames"
                 :key="index"
                 @click="setActivePage($event)"
                 class="navigation__link"
                 :class="{active: activePage === index }">
        *{{ name }}*
      </button>
    </nav>
  </div>
</template>

<script>

export default {
  props: {
    pageNames: Array,
    activePage: Number
  },
  methods: {
    webcamSendRequestButton: function(e) {
    // const buttonValue = e.target.value;
    // console.log(e.target.value)
    console.log(e);
    }
  ,
  setActivePage(e){
    this.$emit('setActivePage', e.target.innerText)
    this.$router.go(0);
  }
  }
}
</script>

<style scoped>
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

.logo img{
  height: 45px;
  width: 45px;
}

.navigation__links {
  display: flex;
  justify-content: center;
}

.navigation__link {
  color: #525252;
  font-weight: 500;
}

.navigation__link:first-child {
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