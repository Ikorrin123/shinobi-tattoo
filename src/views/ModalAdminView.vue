<template>
  <div class="wrapper wrapper__backdrop" @click.self="closeModalAdmin">
    <div class="wrapper__backdrop--modalAdmin">
      <div class="wrapper__backdrop--modalAdmin header">
        <h1>Status: {{ calendarSendInfo.State }}</h1>
      </div>
      <div class="wrapper__backdrop--modalAdmin information">
        <p>
          Name: <span>{{ calendarSendInfo.name }}</span>
        </p>
        <p>
          Surname: <span>{{ calendarSendInfo.surname }}</span>
        </p>
        <p>
          Phone: <span>{{ calendarSendInfo.phone }}</span>
        </p>
        <p>
          The day client chose: <span>{{ calendarSendInfo.pickedDay }}</span>
        </p>
        <p>
          Time: <span>{{ calendarSendInfo.time }}</span>
        </p>
      </div>
      <div class="wrapper__backdrop--modalAdmin picture">
        <img :src="calendarSendInfo.file" alt="" />
      </div>
      <div class="wrapper__backdrop--modalAdmin confirm">
        <button
          @click="postUserState('accepted')"
          class="confirm--buttonAccept"
        >
          Accept
        </button>
        <p>Time:<input v-model="time" type="text" /></p>
        <button
          @click="postUserState('declined')"
          class="confirm--buttonDecline"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import czarek from "../assets/czarek.jpg";
export default {
  data() {
    return {
      czarek: czarek,
      auth: "",
      user: "",
      time: "",
    };
  },
  props: ["calendarSendInfo"],
  methods: {
    closeModalAdmin() {
      this.$emit("close");
    },

    postUserState(State) {
      const data = {
        id: this.calendarSendInfo._id,
        State: State,
        time: this.time,
      };
      axios
        .post(`http://localhost:5000/api/users/calendar-answer/`, data, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          alert(res.data.message);
          this.$router.go("/calendar");
          console.log(res);
        });
    },
  },
};
</script>

<style></style>
