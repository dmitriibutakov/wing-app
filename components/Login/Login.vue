<template>
  <div class="register__block">
    <div class="register__logo">
      <img src="~assets/wing.png" alt="wing-logo" />
    </div>
    <form class="register__form">
      <input v-model="auth.email" placeholder="login" type="text">
      <input v-model="auth.password" placeholder="password" type="password">
      <button @click="login">Sign in</button>
      <h3 v-show="snackbar">{{snackbarText}}</h3>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return {
    snackbarText: "",
      snackbar: false,
    auth: {
      email: '',
      password: ''
    }
  }},
  methods: {
    login(){
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email,this.auth.password)
      .then(res => {
        that.$router.push('/main')
        console.log(res)
      })
      .catch(error => {
        that.snackbarText = error.message
        setTimeout(() => {that.snackbar = true}, 4000)
      })
  }}
}
</script>

<style>
.register__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;
}

.register__logo {
  height: 150px;
  width: 150px;
  margin-bottom: 53px;
}

.register__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register__form input {
  padding: 0 15px;
  margin-bottom: 31px;
  width: 202px;
  height: 40px;
  border-radius: 10px;
  color: #525252;
  font-size: 12px;
}

.register__form button {
  padding: 9px 0;
  width: 115px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 1.2;
  border-radius: 10px;
  background: #7A529D;
  color: #fff;
}
</style>