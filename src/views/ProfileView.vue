<template>
  <div class="wrapper wrapper__homePage">
    <div class="wrapper__homePage--profileCard">
      <div class="wrapper__homePage--profileCard form">
        <div class="wrapper__homePage--profileCard form--title">
          <h1>Welcome {{ username }}</h1>
          <h2>Tattoo Infomration</h2>
        </div>
        <div class="wrapper__homePage--profile form--information">
          <p>
            Name: <span>{{ name }}</span>
          </p>
          <p>
            Surname: <span>{{ surname }}</span>
          </p>
          <p>
            Phone: <span>{{ phone }}</span>
          </p>
          <p>
            The day you chose: <span>{{ day }}</span>
          </p>
          <p>
            The status of the tattooist's decision: <span>{{ state }}</span>
          </p>
          <p>
            Time selected by tattooist's: <span>{{ time }}</span>
          </p>
          <p>
            If you have any questions please call the telephone number provided
          </p>
          <p></p>
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
      username: "",
      name: "",
      surname: "",
      phone: "",
      day: "",
      state: "",
      time: "",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:5000/api/users/profile/", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        (this.name = res.data[0].name),
          (this.surname = res.data[0].surname),
          (this.phone = res.data[0].phone),
          (this.day = res.data[0].pickedDay),
          (this.state = res.data[0].State),
          (this.time = res.data[0].time),
          console.log(res);
      });
  },
};
</script>

<style></style>
