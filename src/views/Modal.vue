<template>
  <div class="wrapper wrapper__backdrop" @click.self="closeModal">
    <div class="wrapper__backdrop--modal">
      <div class="wrapper__backdrop--modal modalMultiItem">
        <img
          :src="current.src"
          class="wrapper__backdrop--modal modalMultiItem--pictures"
        />
        <img
          :src="current.name"
          class="wrapper__backdrop--modal modalMultiItem--artist"
        />
        <h1>
          {{
            current.name == "/img/czarek.c9589387.jpg"
              ? "Cezary Kolenda"
              : "Adrian Kmiołek"
          }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["current"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
