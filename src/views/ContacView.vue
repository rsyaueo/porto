<script>

export default {
    name: 'ContactView',
    data: () => ({
        title: 'Contact Me',
        //input
        input: {
            name:'',
            email:'',
            telpon: '',
            pesan:'',
        },
    }),
    methods: {
      onSubmit(){
        
        const form = {
          name: this.input.name,
          email: this.input.email,
          telpon: this.input.telpon,
          pesan: this.input.pesan,
        }
        const handler1 = {}
        const proxy = new Proxy({...form}, handler1)
        console.log(proxy)
        alert('Data berhasil diinput');
      }
    }
};
</script>

<template>
  <div class="container">
        <div class="row">
          <div class="col-md-8 mt-4">
  <div class="card">
<div class="card-header text-center" style="background-color: #e3f2fd; ">
    <h1>{{ title }}</h1>         
                </div>
    <form class="contact row g-3 p-5" @submit="onSubmit()">
      
        <label for="name">Nama</label><br>
      <input v-model="input.name" type="text" name="name" placeholder="Name"> <br>
      <label for="email">Email</label><br>
      <input v-model="input.email" type="email" name="email" placeholder="Email">
      <br>
      <label for="telpon">Telpon</label><br>
      <input v-model="input.telpon" type="number" name="telpon" placeholder="Nomor telpon">
      <br>
      <label for="email">Pesan</label><br>
      <textarea v-model="input.pesan" name="pesan" id="pesan" placeholder="Pesan" cols="30" rows="10"></textarea>
      <br>
    <button type="submit" v-on="click" value="Submit" class="btn btn-primary"> SUBMIT</button>
    <br>
  </form>
    </div>
        <br>
        <p>Member List:</p>
        <ol>
            <li v-for="(member, index) in onSubmit" :key="index">{{member.name}} &mdash; {{member.email}} &mdash; {{member.telpon}} &mdash; {{member.pesan}}</li>
        </ol>
    </div>
    </div>
    </div>

  
</template>

<style>
@media (min-width: 1024px) {
  .tugas {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>