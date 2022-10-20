<script>
import BaseInput from '@/components/BaseInput.vue';
import helper from '@/utils/helper';

const dummyData = [
    {
        name: 'User A',
        email: 'a@mail.com',
        class: 'A',
    },
    {
        name: 'User B',
        email: 'b@mail.com',
        class: 'B',
    },
];

export default {
    name: 'TestView',
    components: {
        BaseInput,
    },
    data: () => ({
        title: 'Test',
        //data
        data: [],
        //input
        input: {
            name: '',
            email:'',
            class: '',
        },
        //ui
        dropdown:{
            class:[
                'A',
                'B',
                'C',
            ],
        },
    }),
    methods: {
        submit(){
            this.data.push({...this.input});
            this.reset();
        },
        reset(){
            this.input = helper.resetForm(this.input);
        },
        logEmits(event){
            console.log('fromEmits', event);
        },
    },
    watch: {
        'input.name'(val){
            console.log('input name has changed to', val)
        },
    },
    created(){
        dummyData.forEach((obj) => this.data.push(obj));
    }
};
</script>

<template>
    <div class="test">
        <h1>{{ title }}</h1>
        <form @submit.prevent="submit" @reset="reset">
        <BaseInput v-model="input.name" name="name" label="Name" type="text" @escaped="logEmits" />
        <BaseInput v-model="input.email" name="email" label="Email" type="email" @escaped="logEmits"/>
        <label for="class">
            <p>Class</p>
            <select v-model="input.class" name="class" id="class" placeholder="select class">
            <option value="" selected hidden disabled>Option</option>
                <template v-for="item in dropdown.class" :key="item">
            <option :value="item">{{item}}</option>
            </template>
            </select>
        </label>
        <br/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <br>
        <br>
        <p>Member List:</p>
        <ol>
            <li v-for="(member, index) in data" :key="index">{{member.name}} &mdash; {{member.email}}</li>
        </ol>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px){
    .test{
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>