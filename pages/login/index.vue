<template>
  <div class="register__block">
    <div class="register__logo">
      <img src="~assets/wing.png" alt="wing-logo"/>
    </div>
    <form class="register__form">
      <input v-model="auth.email" placeholder="login" type="text">
      <input v-model="auth.password" placeholder="password" type="password">
    </form>
    <button :disabled="getLoading" class="form__button" @click="login(auth)">Sign in</button>
    <h3 v-show="getError">{{ getError }}</h3>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      auth: {
        email: 'googwing@gmail.com',
        password: '123456'
      }
    }
  },
  computed: {
    ...mapGetters({
      getError: "getError",
      getIsError: 'getIsError',
      getLoading: "getLoading"
    })
  },
  methods: {
    ...mapActions({login: "login"}),
  }
}
</script>

<style>
.register__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
}

.register__block h3 {
  position: absolute;
  bottom: 50px;
  color: rgb(197, 80, 80);
}

.register__block p {
  position: absolute;
  bottom: 30px;
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

.form__button,
.form__button disabled {
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
  margin-bottom: 20px;
}

.form__button:disabled {
  background: #32174a;
}
</style>