<!-- har bitta link va sahifa uchun -->
<template>
  <div class="site-news-types">
    <!-- uzbekistan block -->
    <div class="site-news-types__block">
      <div class="container">
        <div class="site-news-types__info">
          <h3 class="site-news-types__type">{{ route.params.slug }}</h3>
        </div>
        <pre>{{ detail }}</pre>

        <div class="site-news-types__cards jcc">
          <NewsCard
            v-for="card in detail?.data?.news_list"
            :key="card"
            :news="card"
          />
        </div>

        <div class="cards-btn">
          <button @click="addPageCtegory()">yana</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// view lar uchun alohida scss lar ochdim
import "@/assets/sass/index.scss";
import { ref, watchEffect } from "vue";

// componentani ulaydim news-card
import NewsCard from "@/components/news_card.vue";

// rout ni slagini olamiz
import { useRoute } from "vue-router";
const route = useRoute();

const page = ref(1);

import services from "@/services/services";
const detail = ref({});
const news = ref([]);
const getCategoryDetail = async () => {
  const res = await services.getCategoryDetail(
    route.params.id,
    route.params.slug,
    page.value
  );
  detail.value = res.data;
  news.value = res.data?.data?.news_list;
};
const addPageCtegory = async () => {
  page.value += 1;
  const res = await services.getCategoryDetail(
    route.params.id,
    route.params.slug,
    page.value
  );
  news.value.push(...res.data?.data?.news_list);
};
watchEffect(() => {
  
  getCategoryDetail();
})
</script>

<style lang="scss">
.cards-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    padding: 12px 24px;
    border: none;
    outline: none;
    background-color: goldenrod;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 900;
    font-family: sans-serif;
    cursor: pointer;
    margin: 24px auto;
  }
}
</style>
