<!-- har bitta link va sahifa uchun -->
<template>
  <div class="site-news-types">
    <!-- uzbekistan block -->
    <div class="site-news-types__block">
      <div class="container">
        <div class="site-news-types__info">
          <h3 class="site-news-types__type">Ўзбекистон</h3>
        </div>

        <div class="site-news-types__cards jcc">
          <NewsCard v-for="card in detail?.data" :key="card" :news="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// view lar uchun alohida scss lar ochdim
import "@/assets/sass/index.scss";
import { RouterLink, RouterView } from "vue-router";
import { ref, watchEffect } from "vue";

// componentani ulaydim news-card
import NewsCard from "@/components/news_card.vue";
import WorldCard from "@/components/world_news.vue";
import VideoCard from "@/components/news_video.vue";

// rout ni slagini olamiz
import { useRoute } from "vue-router";
const route = useRoute();

import services from "@/services/services";
const detail = ref({});
const getCategoryDetail = async () => {
  const res = await services.getCategoryDetail(route.params.slug);
  detail.value = res.data;
};
watchEffect(() => {
  getCategoryDetail();
});
</script>
