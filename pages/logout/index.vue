<template>
  <div>

  </div>
</template>

<script>
export default {
asyncData(){
  this.$fire.auth.signOut()
  }
}
</script>

<style scoped>

</style>