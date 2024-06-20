<!-- har bitta yangilik uchun to'liq ko'rsatish uchun card -->

<template>
  <div>
    <pre>{{ detail }}</pre>
    <h2>{{ detail?.config?.news_detail?.title }}</h2>
    <div style="width: 700px" class="news" v-html="detail?.config?.news_detail?.content"></div>
  </div>
</template>

<script setup>
// import
import services from "@/services/services.js";
import { useRoute } from "vue-router";
import { ref } from "vue";

// varibles
const route = useRoute();
const detail = ref({});

// fuction
async function getDetail() {
  const res = await services.getDetail(route.params.slug);
  detail.value = res.config;
  console.log(res);
}

// convene function
getDetail();
</script>

<style lang="scss" scoped>
.news{
  *{
    font-family: sans-serif !important;
  }
}
</style>

<!-- 18-min -->
