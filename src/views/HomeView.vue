<script>
import BaseCard from '@/components/Base/CardComp.vue';
import imageStore from '@/stores/image';

import {mapState} from 'pinia';

export default{
  name: 'HomePage',
  components: {
    BaseCard,
  },
  computed: {
    ...mapState(imageStore, ['g$list']),
  }
};
</script>

<template>
 <section>
  <article id="about" class="konten">
  <h2>ABOUT</h2>
  <p> Saya Mahasiswa dari Universitas Bhayangkara Jakarta Raya, mengambil jurusan Informatika, angkatan 2019. Saya suka mengexplore lebih. Karena saya merasa ilmu yang saya dapatkan massih kurang. Maka dari itu saya sering mengikuti beberapa pelatihan yang gratis.
      Saya juga suka membaca, terlebih lagi membaca komik. Dari gambar hingga cerita saya suka. Kadang saya mendengarkan musik ketika melakukan pekerjaan yang tidak memerlukan fokus yang lebih.
  </p>
  </article>
  <div class="grid-container konten">
    <h2>MY PROJECT</h2><br>
    <template v-for="(img, index) in g$list" :key="index">
      <RouterLink :to="{name: 'detail', params: {id:img.slug}}">
       <BaseCard :data="img" /> 
      </RouterLink>
    </template>
  </div>
 </section>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.konten {
  font-family: 'Quicksand', sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
    margin-top: 20px;
 }
  
 h2 {
   font-size: 38px;
    color: #00a2c6;
 }

 p {
   text-align: justify;
   text-indent: 2em;
}



</style>