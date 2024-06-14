<template>
  <main>
    <div class="site-hero">
      <div class="container">
        <div class="site-hero__img">
          <img src="../assets/images/jpg/hero-img.jpg" alt="img" />
        </div>
      </div>
    </div>

    <div class="site-main-message">
      <div class="container">
        <div class="site-main-message__info">
          <p class="site-main-message__sub-title">Сиёсат</p>

          <h2 class="site-main-message__title">
            Менга кафолатланган тинчлик керак, биринчи навбатда халқимни ўйлашга
            мажбурман – Шавкат Мирзиёев
          </h2>

          <p class="site-main-message__text">
            “Афғонистондаги вазиятни ҳаммамиз кўриб турибмиз. Қўшни
            танланмайди-ку, қўшнимизда вазият ёмон деб қаергадир кўчиб кета
            олмаймиз-ку. Бундан 2 йил аввал мен “Толибон” раҳбарият билан
            музокаралар олиб борганимда ҳамма ҳайрон бўлганди.
          </p>

          <div class="site-main-message__create-time">
            <div class="time">
              <!-- clock icon -->
              <svg
                class="time-icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49984 1.83335C4.37022 1.83335 1.83317 4.37041 1.83317 7.50002C1.83317 10.6296 4.37022 13.1667 7.49984 13.1667C10.6295 13.1667 13.1665 10.6296 13.1665 7.50002C13.1665 4.37041 10.6295 1.83335 7.49984 1.83335ZM0.416504 7.50002C0.416504 3.588 3.58782 0.416687 7.49984 0.416687C11.4119 0.416687 14.5832 3.588 14.5832 7.50002C14.5832 11.412 11.4119 14.5834 7.49984 14.5834C3.58782 14.5834 0.416504 11.412 0.416504 7.50002ZM7.49984 3.25002C7.89104 3.25002 8.20817 3.56715 8.20817 3.95835V7.20662L10.1257 9.12415C10.4023 9.40077 10.4023 9.84927 10.1257 10.1259C9.84908 10.4025 9.40059 10.4025 9.12397 10.1259L6.99897 8.00089C6.86613 7.86805 6.7915 7.68788 6.7915 7.50002V3.95835C6.7915 3.56715 7.10864 3.25002 7.49984 3.25002Z"
                  fill="#BDBDBD"
                />
              </svg>

              <p class="time-text">11:00 / 13.10.2021</p>
            </div>

            <div class="preview">
              <!-- eye icon -->
              <svg
                class="preview-icon"
                width="19"
                height="13"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.125 6.5C12.125 7.94975 10.9497 9.125 9.5 9.125C8.05025 9.125 6.875 7.94975 6.875 6.5C6.875 5.05025 8.05025 3.875 9.5 3.875C10.9497 3.875 12.125 5.05025 12.125 6.5Z"
                  fill="#BDBDBD"
                />
                <path
                  d="M18.1576 6.10869C16.2692 2.3318 12.9152 0.375 9.5 0.375C6.08477 0.375 2.73082 2.3318 0.842376 6.10869C0.719208 6.35503 0.719208 6.64498 0.842376 6.89131C2.73082 10.6682 6.08477 12.625 9.5 12.625C12.9152 12.625 16.2692 10.6682 18.1576 6.89131C18.2808 6.64498 18.2808 6.35503 18.1576 6.10869ZM9.5 10.875C6.90231 10.875 4.2483 9.45682 2.61345 6.5C4.2483 3.54318 6.90231 2.125 9.5 2.125C12.0977 2.125 14.7517 3.54318 16.3866 6.5C14.7517 9.45682 12.0977 10.875 9.5 10.875Z"
                  fill="#BDBDBD"
                />
              </svg>

              <p class="preview-text">14550</p>
            </div>
          </div>
        </div>

        <div class="site-main-message__img">
          <img src="@/assets/images/jpg/prizident.jpg" alt="img" />
        </div>
      </div>
    </div>

    <div class="site-news-types">
      <!-- uzbekistan block -->
      <div class="site-news-types__block">
        <div class="container">
          <div class="site-news-types__info">
            <h3 class="site-news-types__type">Ўзбекистон</h3>
            <a class="site-news-types__to" href="#">Барчаси</a>
          </div>

          <div class="site-news-types__cards jcc">
            <NewsCard v-for="item in 9" :key="item" title="Ўзбекистон" />
          </div>
        </div>
      </div>

      <!-- jahon block -->
      <div class="site-news-types__block">
        <div class="container">
          <div class="site-news-types__info">
            <h3 class="site-news-types__type">Жахон</h3>
            <a class="site-news-types__to" href="#">Барчаси</a>
          </div>

          <div class="site-news-types__cards">
            <WorldCard />
          </div>
        </div>
      </div>

      <!-- Sport block -->
      <div class="site-news-types__block">
        <div class="container">
          <div class="site-news-types__info">
            <h3 class="site-news-types__type">Спорт</h3>
            <a class="site-news-types__to" href="#">Барчаси</a>
          </div>

          <div class="site-news-types__cards jcc">
            <NewsCard v-for="item in 8" :key="item" title="Спорт" />
          </div>
        </div>
      </div>
    </div>

    <div class="site-bottom-img">
        <div class="container">
            <img src="@/assets/images/jpg/reklama.jpg" alt="img">
        </div>
    </div>

    <div class="site-video-news">
        <div class="container">
            <!-- <div class="site-video-news__card">
            </div> -->
            <VideoCard v-for="re in 4" :key="re"/>
        </div>
    </div>
  </main>
</template>

<script setup>
// view lar uchun alohida scss lar ochdim
import "@/assets/sass/index.scss";
import { RouterLink, RouterView } from "vue-router";

// componentani ulaydim news-card
import NewsCard from "@/components/news_card.vue";
import WorldCard from "@/components/world_news.vue";
import VideoCard from "@/components/news_video.vue";
</script>

<style lang="scss" scoped>
    main{
        padding-bottom: 60px
    }
</style>
