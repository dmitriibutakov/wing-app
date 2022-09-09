<template>
  <div>

  </div>
</template>

<script>
export default {
 async mounted() {
   try {
    await this.$fire.auth.signOut()
    this.$router.push('/login')
   }
   catch(err){
    alert(err.message);
   }
  }
}
</script>

<style scoped>

</style>