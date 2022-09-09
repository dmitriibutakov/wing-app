<template>
  <main class="main">
    <Navigation/>
    <Nuxt/>
    <Modal v-if="getIsModalOpen"
           :modules-arr="getRowModules"
           :modalTitle="getTableNames[getActiveIndex]"/>
  </main>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      getLoading: "getLoading",
      getIsModalOpen: "getIsModalOpen",
      getTableNames: "getTableNames",
      getActiveIndex: "getActiveIndex",
      getRowModules: 'getRowModules'
    })
  }
}
</script>

<style>
.main {
  margin-top: 114px;
  width: 100%;
}
</style>