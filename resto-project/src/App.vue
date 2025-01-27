<template>
 <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  padding: 0;
  margin: 0;
}
.logo{
    width:100px
}
.register input, .login input, .add input{
 width: 300px;
 height: 40px;
 padding-left: 20px;
 display: block;
 margin-bottom: 30px;
 margin-left: auto;
 margin-right: auto;
 border: 1px solid skyblue;
}
.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    background-color: lightblue;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 4px;
}

</style>
