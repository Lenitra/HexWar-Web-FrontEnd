<script setup lang="ts">
import HomePage from "@/pages/HomePage.vue";


import { useAppStore } from "@/assets/js/storage.ts";
import { onMounted } from "vue";

const appStore = useAppStore();
onMounted(() => {
    useAppStore().setColor(undefined, undefined, undefined, );
});





</script>

<template>
  <HomePage />
</template>


<style scoped>
@import "assets/css/global.css";

</style>
