<template>
  <div class="table">
    <h1 class="table__title">{{ tableName }}</h1>
    <table class="table__block">
      <thead>
        <tr class="table__header">
          <th class="table__header_column" v-for="(value, key) in columnsTitle" :key="key">
            {{ value }}
          </th>
          <th class="table__header_column">edit</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr class="table__body_row" v-for="(data, id) in usersData" :key="id">
          <td class="table__body_value" v-for="(value, key) in data" :key="key">
            {{ value }}
          </td>
          <td class="table__body_value">
            <button>edit button</button>
          </td>
        </tr>
      </tbody>
    </table>
    <Paginator :users-values="Object.keys(usersData).length" :portion-size="portionSize" :current-page="currentPage" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Paginator from "~/components/Paginator/Paginator.vue";

export default defineComponent({
  components: {
    Paginator
  },
  props: {
    tableName: String
  },
  data() {
    return {
      currentPage: 1,
      portionSize: 4,
      columnsTitle: ['*column1*', '*column2*', '*column3*', '*column4*', '*column5*'],
      usersData: {
        '*userId1*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId2*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId3*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
        '*userId4*': ['*value1*', '*value2*', '*value3*', '*value4*', '*value5*'],
      }
    }
  },
})
</script>

<style scoped>
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

.table__header>* {
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
  flex: 0 0 17%;
}

.table__header_column:last-of-type,
.table__body_value:last-of-type {
  flex: 0 0 10%;
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
  font-size: 16px;
  color: #0E0E0E;
}
</style>