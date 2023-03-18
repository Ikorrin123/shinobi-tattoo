<template>
  <div class="wrapper wrapper__backdrop" @click.self="closeModalAdmin">
    <div class="wrapper__backdrop--modalAdmin">
      <div class="wrapper__backdrop--modalAdmin header">
        <h1>Client Information</h1>
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
      </div>
      <div class="wrapper__backdrop--modalAdmin picture">
        <img :src="czarek" alt="" />
      </div>
      <div class="wrapper__backdrop--modalAdmin confirm">
        <button class="confirm--buttonAccept">Accept</button>
        <p>Time:<input type="text" /></p>
        <button class="confirm--buttonDecline">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
import czarek from "../assets/czarek.jpg";
export default {
  data() {
    return {
      czarek: czarek,
    };
  },
  props: ["calendarSendInfo"],
  methods: {
    closeModalAdmin() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
