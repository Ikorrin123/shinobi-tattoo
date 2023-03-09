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
          <div class="form__boxLogin--inputbox">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <input type="email" required />
            <label for="">Email</label>
          </div>
          <div class="form__boxLogin--inputbox">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input type="password" required />
            <label for="">Password</label>
          </div>
          <div class="form__boxLogin--forget">
            <label for=""
              ><input type="checkbox" />Remember Me
              <a href="#">Forget Password</a></label
            >
          </div>
          <button><span>Login</span></button>
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
            <input type="text" required />
            <label for="">Username</label>
          </div>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <input type="email" required />
            <label for="">Email</label>
          </div>
          <div class="form__boxRegister--inputbox">
            <font-awesome-icon icon="fa-solid fa-lock" />
            <input type="password" required />
            <label for="">Password</label>
          </div>
          <div class="form__boxRegister--terms">
            <label for=""
              ><input type="checkbox" />I agree the terms & condtions
            </label>
          </div>
          <button><span>Register</span></button>
          <div class="form__boxRegister--login">
            <p>Already have an acccount <a @click="activation">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activation() {
      this.isActive = !this.isActive;
    },
  },
 
};
</script>

<style></style>
