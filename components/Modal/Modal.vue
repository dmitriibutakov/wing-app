<template>
  <div class="modal__block">
<h2 class="modal__title">
  {{modalTitle}}
</h2>
    <div class="modal__body" v-for="(value, index) in modals" :key="index">
      <input type="text" class="modal__input">
    </div>
    <div class="modal__btns">
      <button class="modal__button">Cancel</button>
      <button class="modal__button">Save</button>
    </div>
  </div>
</template>

<script>
export default {
props: {
  modals: Array,
  modalTitle: String
}
}
</script>

<style scoped>

</style>