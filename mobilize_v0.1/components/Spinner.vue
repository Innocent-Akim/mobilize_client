<template>
  <font-awesome-icon icon="spinner" spin />
  <!-- <div :class="`loader ease-linear rounded-full border-2 border-gray-200 inline-block h-${size} w-${size}`"></div> -->
</template>
<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: 4,
    },
  },
};
</script>
<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>