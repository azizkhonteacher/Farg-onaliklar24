<template>
  <div>
    <div class="detail">
      <h2 class="detail__type">Жахон</h2>

      <div class="detail__info">
        <h2 class="detail__info-title">
          «Кальмар ўйини» – дунё нигоҳини экранга «михлаб» қўйган сериал таҳлили
        </h2>

        <p class="detail__info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          laboriosam suscipit ex velit temporibus nam repellat repudiandae esse!
          Quae adipisci nulla fugit quia iure. Corporis alias eum nihil id saepe
          enim ut odio a, laudantium dignissimos non corrupti temporibus ratione
          molestiae ad fugit autem doloremque voluptate perspiciatis, illum rem.
          Culpa.
        </p>

        <img src="https://picsum.photos/1000" alt="img" class="detail__info-img"/>

        <!-- yangilikni batafsil malumotlari -->
        <div class="detail__topic" v-for="item in 2" :key="item">
          <h4 class="detail__topic-title">Сериал мавзуси</h4>

          <p class="detail__topic-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            doloribus. Illum qui aliquid natus ipsum aperiam iure praesentium
            deserunt eos eveniet? Commodi ea cum recusandae.
          </p>

          <img src="https://picsum.photos/1000" alt="img" class="detail__topic-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import services from '@/services/services';

const route = useRoute();
const detail = ref({})

async function getNewsDetail(){
  const res = await services.getNewsDetail(route.params.slug);
  detail.value = res.data;
  console.log(detail.value);
}
getNewsDetail();
</script>

<style></style>
