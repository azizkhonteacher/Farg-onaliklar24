<template>
  <div>
   <h1>{{ route.params.slug }}</h1>
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
