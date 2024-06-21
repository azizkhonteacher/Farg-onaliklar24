<template>
  <main>
    <div class="site-hero">
      <div class="container">
        <div class="site-hero__img">
          <img src="../assets/images/jpg/hero-img.jpg" alt="img" />
        </div>
      </div>
    </div>

    <div
      class="site-main-message"
      v-for="banner in bannerNews.data"
      :key="banner"
    >
      <div class="container">
        <div class="site-main-message__info">
          <h2 class="site-main-message__title">
            {{ banner.title }}
          </h2>
        </div>

        <div class="site-main-message__img">
          <img :src="store.baseURL + banner.image" alt="img" />
        </div>
      </div>
    </div>

    <div class="site-news-types">
      <!-- uzbekistan block -->
      <div class="site-news-types__block">
        <div class="container">
          <div class="site-news-types__info">
            <h3 class="site-news-types__type">So'nggi angiliklar</h3>
            <router-link to="/" class="site-news-types__to"
              >Барчаси</router-link
            >
          </div>

          <div class="site-news-types__cards jcc">
            <NewsCard
              v-for="lastnews in latesNews?.data?.last_news"
              :key="lastnews"
              :news="lastnews"
            />
          </div>
        </div>
      </div>

      

      
    </div>

    <div class="site-bottom-img">
      <div class="container">
        <img src="@/assets/images/jpg/reklama.jpg" alt="img" />
      </div>
    </div>

    <div class="site-video-news">
      <div class="container">
        <!-- <div class="site-video-news__card">
            </div> -->
        <VideoCard v-for="re in 4" :key="re" />
      </div>
    </div>
  </main>
</template>

<script setup>
// pinia Store ni import qildim
import { useStore } from "@/store/store.js";

// view lar uchun alohida scss lar ochdim
import "@/assets/sass/index.scss";
import { RouterLink, RouterView } from "vue-router";

// componentani ulaydim news-card
import NewsCard from "@/components/news_card.vue";
import VideoCard from "@/components/news_video.vue";
import { onMounted, ref } from "vue";

// axios ulangan js ni import qilamiz
import Services from "@/services/services.js";

const store = useStore();

// malumotlarni o'zlashtirivchi o'zgaruvchilar
const bannerNews = ref({});
const latesNews = ref({});
// har xil tiplardagi API ga murojaat funcsiyalarni hosil qilamiz assinxrom
async function getBannerNews() {
  const res = await Services.getBannerNews();
  bannerNews.value = res.data;
}
async function getLatestNews() {
  const res = await Services.getLatestNews();
  latesNews.value = res.data;
}
// funcsiyalarni chaqirib qo'yamiz
getLatestNews();
getBannerNews();
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 60px;
}
</style>
