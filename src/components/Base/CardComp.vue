<script>
import ImageComp from './ImageComp.vue';
export default{
    name: 'CardComp',
    
    props: {
        data: Object,
    },
    components:{
      ImageComp,
    }, 
};
</script>

<template>
    <figure class="grid-item">
        <div class="img-container">
          <ImageComp :src="data.img" />
        </div>
        <figcaption>
            <p>{{data.title}}</p>
        </figcaption>
    </figure>
</template>

<style>
.grid-item{
  widows: 100%; 
  border: 1px solid gray; 
  overflow: hidden;
  border-radius: 1rem;
}
.img-container{
  object-fit: cover;
}

  figcaption{
    padding: 0.25rem 1rem;
    text-align: center;
  }

</style>