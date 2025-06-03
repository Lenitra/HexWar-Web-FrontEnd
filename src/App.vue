<script setup lang="ts">
import HomePage from "@/pages/HomePage.vue";


import { onMounted } from "vue";
import { userAppStore } from "@/assets/js/storage";

const appStore = userAppStore();
onMounted(() => {
    userAppStore().setColor(undefined, undefined, undefined, );
});





</script>

<template>
  <HomePage />
</template>


<style scoped>
@import "assets/css/global.css";

</style>
