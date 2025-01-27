<template>
    <Header/>
    <h1>Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="this.restaurant.name" name="name"/>
        <input type="text" placeholder="Enter address" v-model="this.restaurant.address" name="address"/>
        <input type="text" placeholder="Enter contact" v-model="this.restaurant.contact" name="contact"/>
        <button type="button" v-on:click="addrestaurant">Add New Restaurant</button>
    </form>
    </template>
    
    <script>
    import axios from 'axios';
    import Header from './Header.vue';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Add',
        components: {
            Header
        },
        data()
        {
            return{
                restaurant:{
                  name:'',
                  address:'',
                  contact:'',  
                }
            }
        },
        methods:{
         async addrestaurant()
         {
            console.warn(this.restaurant)
            const result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'});
            }
            console.warn("result",result)
        }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
        }
    };
    </script>
    