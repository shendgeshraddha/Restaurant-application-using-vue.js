<template>
<img class="logo" alt="restro_logo" src="../assets/restro_logo.png"/>
<h1>SignUp</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="SignUp">Sign UP</button>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name: "SignUp",
    data()
    {
        return{
            name:'',
            email:'',   
            password:''
        }
    },
    methods:{
        async SignUp()
        {
            console.warn("signUp", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/users",{
                email:this.email,
                name:this.name,
                password:this.password
            });
            console.warn(result);
            if(result.status==201)
            {
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:'Home'})
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>
