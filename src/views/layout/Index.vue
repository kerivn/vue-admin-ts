<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    onBeforeMount(() => {
      useRouter().push("/login");
    });
  },
});
</script>
