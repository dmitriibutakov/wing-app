<template>
  <main class="main">
    <Navigation :activePage="activePage" :pageNames="pageNames" @setActivePage="setActivePage" />
    <Table :table-name="tableNames[activePage]" :active-page="activePage" :portion-size="portionSize"
      :toggle-show-modal="toggleShowModal" :users-data="tablesData[activeNamePage]" :columns-title="columnsTitle" />
    <Modal />
    <button @click="getTablesData">JSKLFJSDLKF</button>
  </main>

</template>

<script>
import Table from "~/components/Table/Table.vue";
import Navigation from "@/components/Navigation/Navigation";
import Modal from "@/components/Modal/Modal";

export default {
  name: 'IndexPage',
  components: {
    Modal,
    Table,Navigation
  },
  data() {
    return {
      tableNames: ["*table-name-1*", "*table-name-2*"],
      pageNames: ["page-name-1", "page-name-2"],
      showModal: false,
      activePage: 1,
      activeNamePage: "page-name-1",
      portionSize: 4,
      columnsTitle: ['*column1*', '*column2*', '*column3*', '*column4*', '*column5*'],
      tablesData: {
        "page-name-1": {
        '*userId1*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId2*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId3*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId5*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId6*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId7*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId8*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId9*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId10*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId11*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
      },
      "page-name-2": {
        '*taskId1*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*taskId2*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*taskId3*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*taskId4*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId5*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId6*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId7*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId8*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId9*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId10*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId11*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
      }
      }
    }
  },
  methods: {
    toggleShowModal() {
      return this.showModal =!this.showModal
    },
    setActivePage(name) {
      this.activeNamePage = name
      this.activePage = this.pageNames.indexOf(name)
    },
    getTablesData(){
      this.$set(this.tablesData, ["page-name-1"], this.tablesData["page-name-1"])
      console.log(this.tablesData);
    }
  }
}
</script>

<style scoped>
.main {
  margin-top: 114px;
  width: 100%;
}
</style>