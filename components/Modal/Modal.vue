<template>
  <div class="modal__view" @click.stop="TOGGLE_MODAL(false)">
    <div @click.stop class="modal__block">
      <h2 class="modal__title">
        Edit {{ modalTitle }}
      </h2>
      <div class="modal__body">
        <div class="modal__inputs">
          <input type="text"
                 v-for="(value, index) in modulesArr"
                 :key="index"
                 :placeholder="value"
                 v-model="values[index]">
        </div>
      </div>
      <div class="modal__buttons">
        <button @click="TOGGLE_MODAL(false)"
                class="modal__button cancel">Cancel
        </button>
        <button @click="editTableRow(values)"
                class="modal__button save">Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from "vuex";

export default {
  props: {
    modalTitle: String,
    modulesArr: Array
  },
  data() {
    return {
      values: Object.assign([], this.modulesArr)
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_MODAL: "TOGGLE_MODAL",
    }),
    ...mapActions({editTableRow: 'editTableRow'}),
  }
}
</script>

<style>
.modal__view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 3;
  background: rgba(82, 82, 82, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__block {
  margin: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 750px;
  min-height: 300px;
  padding: 31px 64px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.modal__inputs {
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.modal__inputs > * {
  background: #D9D9D9;
  height: 41px;
  margin-bottom: 36px;
}

.modal__title {
  font-size: 20px;
  line-height: 24px;
  color: #7A529D;
  margin-bottom: 50px;
}

.modal__buttons {
  max-width: 308px;
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
}

.modal__buttons > :first-child {
  margin-right: 66px;
}

.modal__button {
  min-width: 126px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  border-radius: 5px;
}

.save {
  background: #7A529D;
}

.cancel {
  background: #DF5A5A;;
}
</style>