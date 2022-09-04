<template>
  <div class="paginator__block">
    <button class="paginator__button"
            @click="getLeftPortionNumber"
            :disabled="portionNumber <= 1">
      &lt;
    </button>
    <button v-for="page in Math.ceil(usersValues / portionSize)"
            class="paginator__button"
            :key="page"
            @click="currentPage = page"
            :class="{currentPage: currentPage === page}">
      {{ page }}
    </button>
    <button class="paginator__button"
            @click="getRightPortionNumber">
      &gt;
    </button>
  </div>
</template>

<script>

export default {
  props: {
    usersValues: Number,
    portionSize: Number,
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      portionNumber: 3,
      currentPortion: [],
    }
  },
  computed: {
    getLeftPortionNumber() {
      return this.currentPage < 3 ? 1 : this.portionNumber - 2
    },
    getRightPortionNumber() {
      return this.currentPage < 3 ? 3 : this.portionNumber + 2
    },
    setPortionNumberBack() {
      console.log(this.portionNumber)
      return this.portionNumber = this.portionNumber - 1
    },
    setPortionNumberUp() {
      console.log(this.portionNumber)
      return this.portionNumber = this.portionNumber + 1
    }
  },
  methods: {
    loadUsers(page) {
      `loading from page ${page}`
    }
  },
  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }
}
</script>

<style scoped>
.paginator__block {
  display: flex;
  justify-content: end;
}

.paginator__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 10px;
  color: #7A529D;
  font-size: 20px;
  line-height: 24px;
}

.paginator__block > :not(:last-child) {
  margin-right: 21px;
}

.paginator__button img {
  background-color: rgba(255, 255, 255, 0);
}


.currentPage {
  font-weight: 500;
  background-color: rgba(223, 221, 225, 0.78);
}
</style>