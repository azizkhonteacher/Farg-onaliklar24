<!-- har bitta yangilik uchun to'liq ko'rsatish uchun card -->

<template>
  <main>
    <div class="site-hero">
      <div class="container">
        <div class="site-hero__img">
          <img src="../assets/images/jpg/hero-img.jpg" alt="img" />
        </div>
      </div>
    </div>

    <div class="news-detail">
      <!-- detailiga kiramiz -->
      <div class="news-detail__item">
        <div class="container">
          <div class="news-detail__item-card">
            <NewsDetail class="NewsDetail" />

            <newsVideo class="newsVideo" />
          </div>

          <div class="news-detail__famous">
            <h2 class="news-detail__famous-title">Кўп ўқилган</h2>
            <newsCard
              class="news-detail__famous-card"
              v-for="i in 8"
              :key="i"
            />
          </div>
        </div>
      </div>

      <!-- mavzuga oid degan joyi -->
      <div class="news-detail__on-subject">
        <div class="container">
          <h2 class="news-detail__on-subject-title">Mавзуга оид</h2>

          <div class="news-detail__on-subject-cards">
            <newsCard v-for="i in 12" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import NewsDetail from "@/components/news_detail.vue";
import newsCard from "@/components/news_card.vue";
import newsVideo from "@/components/news_video.vue";
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
