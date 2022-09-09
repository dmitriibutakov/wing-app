<template>
  <div>

  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  methods: {
    ...mapActions({logout: 'logout'}),
  },
  mounted() {
    this.logout()
  }
}
</script>
