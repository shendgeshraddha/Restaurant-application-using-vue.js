<template>
    <Header/>
    <h1>Welcome to Update Restaurant  Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name"/>
        <input type="text" placeholder="Enter address" v-model="restaurant.address" name="address"/>
        <input type="text" placeholder="Enter contact" v-model="restaurant.contact" name="contact"/>
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
    </template>
    
    <script>
    import Header from './Header.vue';
    import axios from 'axios';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Update',
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
          async  updateRestaurant(){
                // console.warn("function called", this.restaurant)
                const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
            }
        },
       async mounted() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({ name: 'SignUp' })
            }
        // Fetch data for restaurant with id 1
        const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        // console.warn(result.data); // Should log the restaurant with id 1
        this.restaurant = result.data; // Update the restaurant data in your app
        }
    };
    </script>
    