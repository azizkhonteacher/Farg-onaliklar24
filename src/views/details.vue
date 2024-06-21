<!-- har bitta yangilik uchun to'liq ko'rsatish uchun card -->

<template>
  <div class="news-detail">
    <div class="container">
      <div class="news-detail__left">
        <span class="news-detail__subtitle">
          {{ detail?.data?.news_detail?.category_id }}
        </span>
        <h2 class="news-detail__title">
          {{ detail?.data?.news_detail?.title }}
        </h2>
        <img class="news-detail__img" :src="stone.baseURL +  detail?.data?.news_detail?.image" alt="img">

        <div class="news-detail__content" v-html="detail?.data?.news_detail?.content"></div>
      </div>

      <div class="news-detail__right"></div>
    </div>
  </div>
</template>

<script setup>
// import
import services from "@/services/services.js";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useStore } from "@/store/store";

// varibles
const route = useRoute();
const detail = ref({});
const stone = useStore();

// fuction
async function getDetail() {
  const res = await services.getDetail(route.params.slug);
  detail.value = res.data;
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
