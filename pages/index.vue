<template>
  <main class="main">
    <Navigation/>
    <Table :tableName="tableNames[0]"/>
  </main>

</template>

<script>
import Table from "~/components/Table/Table.vue";
import Navigation from "@/components/Navigation/Navigation";

export default {
  name: 'IndexPage',
  components: {
    Table,Navigation
  },
  data() {
    return {
      tableNames: ["*table-name-1*", "*table-name-2*"],
    }
  },
}
</script>

<style scoped>
.main {
  margin-top: 114px;
}
</style>