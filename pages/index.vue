<template>
  <main class="main">
    <Preloader v-if="getLoading" />
    <div v-else>
      <Navigation />
      <Table :table-name="getTableNames[getActiveIndex]" :table-data="getTables" />
      <Modal v-if="getIsModalOpen" :modalTitle="getTableNames[getActiveIndex]" />
    </div>
  </main>
</template>

<script>
import Table from "~/components/Table/Table.vue";
import Navigation from "@/components/Navigation/Navigation";
import Modal from "@/components/Modal/Modal";
import Preloader from "@/components/Preloader/Preloader"
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'IndexPage',
  components: {
    Modal,
    Table,
    Navigation, Preloader
  },
  methods: {
    ...mapActions({ fetchTables: 'fetchTables' }),
  },
  computed: {
    ...mapGetters({
      getTables: 'getTables',
      getLoading: 'getLoading',
      getRowModules: 'getRowModules',
      getTableNames: 'getTableNames',
      getActiveIndex: 'getActiveIndex',
      getIsModalOpen: 'getIsModalOpen'
    }),
  },
  mounted() {
    this.fetchTables()
  }
}
</script>

<style>
.main {
  margin-top: 114px;
  width: 100%;
}
</style>