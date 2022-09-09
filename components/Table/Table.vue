<template>
  <Preloader v-if="getLoading"/>
  <div v-else class="table">
    <h1 class="table__title">{{ tableName }}</h1>
    <table class="table__block">
      <thead>
      <tr class="table__header">
        <th class="table__header_column"
            v-for="(value, key) in getColumnsTitle"
            :key="key">
          {{ value }}
        </th>
        <th class="table__header_column">edit</th>
      </tr>
      </thead>
      <tbody class="table__body">
      <tr class="table__body_row" v-for="(userData, index) in tableData" :key="index">
        <td class="table__body_value" v-for="(value, key) in userData" :key="key">
          {{ value }}
        </td>
        <td class="table__body_value">
          <button @click="setModal(tableData, index)">edit button</button>
        </td>
      </tr>
      </tbody>
    </table>
    <Paginator
        :users-values="Object.keys(tableData).length"
        :portion-size="getPortionSize"
        :active-page="getActivePagePaginator"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  props: {
    tableData: Object,
    tableName: String
  },
  computed: {
    ...mapGetters({
      getColumnsTitle: "getColumnsTitle",
      getPortionSize: "getPortionSize",
      getActivePagePaginator: "getActivePagePaginator",
      getLoading: "getLoading"
    }),
  },
  methods: {
    ...mapMutations({
      TOGGLE_MODAL: "TOGGLE_MODAL",
      SET_ROW_MODULES: "SET_ROW_MODULES",
      SET_INDEX_USER: "SET_INDEX_USER"
    }),
    setModal(obj, index) {
      this.SET_INDEX_USER(index)
      this.TOGGLE_MODAL(true)
      this.SET_ROW_MODULES(obj[index])
    }
  }
}
</script>

<style>
.table {
  margin: 51px 54px 0;
}

.table__title {
  font-size: 24px;
  line-height: 29px;
  color: #7A529D;
  margin-bottom: 21px;
}

.table__block {
  width: 100%;
  margin-bottom: 23px;
}

.table__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6F6F6F;
  min-height: 50px;
  border-radius: 5px 5px 0px 0px;
}

.table__header > * {
  display: flex;
  justify-content: center;
  align-items: center;
}

.table__header_column {
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
}

.table__header_column:not(:last-of-type),
.table__body_value:not(:last-of-type) {
  flex: 0 0 16%;
}

.table__header_column:last-child,
.table__body_value:last-of-type {
  flex: 0 0 14%;
}
.table__body {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 0 0 5px 5px;
}

.table__body_row {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.table__body_row:not(:last-of-type)::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #DCDCDC;
}

.table__body_value {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  min-height: 50px;
}

.table__body_value button {
  background-color: rgba(255, 255, 255, 0.95);
  font-size: 14px;
  color: #0E0E0E;
  padding: 5px;
  border-radius: 5px;
  background-color: #97909e4d;
}
</style>