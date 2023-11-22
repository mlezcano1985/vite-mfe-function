<script setup>
import { ref } from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
  document.dispatchEvent(
    new CustomEvent("INCREMENT", {
      detail: {
        count: count.value,
      },
    })
  );
};
</script>
<template>
  <button type="button" @click="increment">The Vue count is {{ count }}</button>
</template>
