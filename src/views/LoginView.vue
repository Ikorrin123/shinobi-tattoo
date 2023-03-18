<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--login">
      <div
        v-bind:class="{ active: isActive }"
        class="wrapper__homePage--login form"
      >
        <div
          v-bind:class="{ active: isActive }"
          class="wrapper__homePage--login form__boxLogin"
        >
          <h2>Login</h2>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-user" />
            <input v-model="loginUsername" type="text" required />
            <label for="">Username</label>
          </div>

          <div class="form__boxLogin--inputbox">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input v-model="loginPassword" type="password" required />
            <label for="">Password</label>
          </div>
          <div class="form__boxLogin--forget">
            <label for=""
              ><input type="checkbox" />Remember Me
              <a href="#">Forget Password</a></label
            >
          </div>
          <button @click="loginIn"><span>Login</span></button>
          <p>{{ errorLog }}</p>
          <div class="form__boxLogin--register">
            <p>Don't have a account <a @click="activation">Register</a></p>
          </div>
        </div>
        <div
          v-bind:class="{ active: !isActive }"
          class="wrapper__homePage--login form__boxRegister"
        >
          <h2>Registration</h2>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-user" />
            <input v-model="username" type="text" required />
            <label for="">Username</label>
          </div>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <input v-model="email" type="email" required />
            <label for="">Email</label>
          </div>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input v-model="password" type="password" required />
            <label for="">Password</label>
          </div>
          <div class="form__boxRegister--terms">
            <label for=""
              ><input type="checkbox" />I agree the terms & condtions
            </label>
          </div>
          <button @click="singUp"><span>Register</span></button>
          <p>{{ errorReg }}</p>
          <div class="form__boxRegister--login">
            <p>Already have an acccount <a @click="activation">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isActive: false,
      username: "",
      password: "",
      email: "",
      loginUsername: "",
      loginEmail: "",
      loginPassword: "",
      errorReg: "",
      errorLog: "",
    };
  },
  methods: {
    activation() {
      this.isActive = !this.isActive;
    },

    singUp() {
      let newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      axios
        .post("http://127.0.0.1:5000/api/users/register-user/", newUser)
        .then(
          (res) => {
            console.log(res);
          },
          (errorRegister) => {
            console.log(errorRegister.response);
            this.errorReg = errorRegister.response.data.message;
          }
        );
    },
    loginIn() {
      let user = {
        username: this.loginUsername,
        email: this.loginEmail,
        password: this.loginPassword,
      };
      axios
        .post("http://127.0.0.1:5000/api/users/login-user/", user)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);

            localStorage.setItem("auth", this.auth);
            this.$router.go("/");
            console.log(res.data);
          }
        })
        .catch((errorLogin) => {
          console.log(errorLogin.response);
          this.errorLog = errorLogin.response.data.message;
        });
    },
  },
};
</script>

<style></style>
