<template>
  <!-- <div>
    <div class="menu">
      <div style="display: flex;align-items: baseline;font-size: 49.5px;font-weight: 600;color: rgb(0 0 0);font-weight: initial;">
      <h1 class="pro">PRO</h1><h1 class="sto">sto.</h1></div>
    <div class="menuu"><RouterLink to="/">Home</RouterLink> <p style="color:#2c5592">|</p>
    <RouterLink to="/products">Products</RouterLink>
    </div></div>
    <RouterView />

  </div> -->

<div class="px-6 py-2 bg-white shadow-md md:flex block">
        <div class="flex justify-between items-center">
            <div class="text-3xl text-gray-800 font-bold hover:text-gray-800">
                <a href="#">AppleG</a>
            </div>
            <div class="md:hidden">
                <button type="button" class="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="w-full pb-2 md:flex md:items-center md:justify-between md:pb-0">
            <div class="flex flex-col px-2 md:flex-row">
                 <a href="/products" class="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Products</a>
                <a href="/products" class="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Categories</a>
                <a href="/cart" class="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2">Contact</a>
            </div>
            <div class=" flex item-center">
                <input type="text" class="w-full px-4 py-3 mx-4 leading-tight text-sm text-gray-400 bg-gray-900 rounded placeholder-gray-200 focus:outline-none focus:shadow-outline" placeholder="search">
               
                <router-link to="/auth">
                 <button @click="basket" class="hidden text-gray-900 hover:text-gray-700 md:block">
                    <div class="">
                        <img key="basket" class="w-12 h-12" src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="">
                    </div>
                </button>
                </router-link>
            </div>
        </div>
    </div>

      <RouterView />
</template>

<script>
// import { useQuery, gql, useMutation } from "@urql/vue";
// import {ref} from 'vue'

export default {

  setup() {
  


    // const basket = () => {
    //   this.$router.push('/basket')
    // }


    // const basket = () => {
    //   this.$router.push('/auth')
    // }
    

  }
}
</script>

<!-- <style scoped>
.menu{ 
    background-color: #f6f6f6;;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: rgb(44 85 146) 0px 19px 38px -29px inset; */
}
.menu h1{ 
      font-weight: initial;
      font-size: unset;
}
.menuu{ 
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a{
text-decoration: none;
color: #000000;
padding: 0px 10px 0px 10px;
font-size: unset;
text-transform: uppercase;
font-weight: bold;
}
.pro {
color: black;
    color: #646f81;
    text-shadow: 7px -4px 3px #646f81, 0 0 0em #657081;
    /* text-decoration: line-through; */
    }
    .sto{
    color: #e8e8e6;
    text-shadow: 7px -4px 3px #68748a, 0 0 0em #646f81;
}
.header
{background-color: #f6f6f6;}
.logo{
display: flex;
    justify-content: center;
    font-size: 350%;
    align-items: center;
    margin: 1%;
    height: 10px;
}
.logo{
    /* display: flex; */
    /* justify-content: flex-start; */
    /* font-size: 350%; */
    /* align-items: center; */
    /* margin: 1%; */
    /* padding-left: 1%; */
    /* color: white;
    background-color: black; */
    /* height: 62px; */
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
    }
</style> -->