<template>
<Header></Header>
<h1> Hello {{name}}, Welcome to Home Page</h1>
<table border="1">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.contact }}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        Header
    },
    methods: {
      async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
           if(result.status==200){
            this.loadData()
           }
        },
       async loadData()
       {
            let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result);
        this.restaurants = result.data
        }
    },
     mounted() {
      this.loadData()
    }
}
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f4f4f4;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}
</style>
