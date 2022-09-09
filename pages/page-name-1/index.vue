<template>
  <Preloader v-if="getLoading"/>
  <div v-else>
    <Table :table-name="getTableNames[getActiveIndex]" :table-data="getCurrentTable"/>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  layout: 'tables',
  computed: {
    ...mapGetters({
      getCurrentTable: "getCurrentTable",
      getTableNames: "getTableNames",
      getActiveIndex: "getActiveIndex",
      getActiveNamePage: "getActiveNamePage",
      getLoading: "getLoading"
    }),
  },
  methods: {
    ...mapActions({fetchTables: "fetchTables"}),
  },
  mounted() {
    this.fetchTables(this.getActiveNamePage)
  }
}
</script>