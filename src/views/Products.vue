<template>
  <div class="shapka">
    <img class="immg" src="./images/Снимок экрана (12).png" alt="" />
    <p class="prod">Products</p>
  </div>
  
  <!-- <div class="bg-white">
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
     <button @click="searchProducts">search</button> 
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>
      <div v-if="data">
        <div
          v-for="p in data.products"
          :key="p.id"
          @click="move(p.id)"
          class="
            grid grid-cols-1
            gap-y-10
            sm:grid-cols-2
            gap-x-6
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-x-8
          "
        >
          <a class="group">
            <div
              class="
                w-full
                aspect-w-1 aspect-h-1
                bg-gray-200
                rounded-lg
                overflow-hidden
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <img
                class="
                  w-full
                  h-full
                  object-center object-cover
                  group-hover:opacity-75
                "
                :src="
                  'http://38.242.229.113:8055/assets/' +
                  p.image.id +
                  '?width=190&height=200'
                "
                alt=""
              />
            </div>
            <p class="mt-4 text-sm text-gray-700">
              {{ p.title }}
            </p>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{ p.price + "$" }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div> -->




<div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
    <div class="lg:sticky lg:top-4">
      <details open="" class="overflow-hidden border border-gray-200 rounded">
        <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span class="text-sm font-medium">
            Toggle Filters
          </span>

          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </summary>

        <form action="" class="border-t border-gray-200 lg:border-t-0">
          <fieldset>
            <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Type
            </legend>

            <div class="px-5 py-6 space-y-2">
              <div class="flex items-center">
                <input id="toy" type="checkbox" name="type[toy]" class="w-5 h-5 border-gray-300 rounded">

                <label for="toy" class="ml-3 text-sm font-medium">
                  Toy
                </label>
              </div>

              <div class="flex items-center">
                <input id="game" type="checkbox" name="type[game]" class="w-5 h-5 border-gray-300 rounded">

                <label for="game" class="ml-3 text-sm font-medium">
                  Game
                </label>
              </div>

              <div class="flex items-center">
                <input id="outdoor" type="checkbox" name="type[outdoor]" class="w-5 h-5 border-gray-300 rounded">

                <label for="outdoor" class="ml-3 text-sm font-medium">
                  Outdoor
                </label>
              </div>

              <div class="pt-2">
                <button type="button" class="text-xs text-gray-500 underline">
                  Reset Type
                </button>
              </div>
            </div>
          </fieldset>

          <div>
            <fieldset>
              <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Age
              </legend>

              <div class="px-5 py-6 space-y-2">
                <div class="flex items-center">
                  <input id="3+" type="checkbox" name="age[3+]" class="w-5 h-5 border-gray-300 rounded">

                  <label for="3+" class="ml-3 text-sm font-medium">
                    3+
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="8+" type="checkbox" name="age[8+]" class="w-5 h-5 border-gray-300 rounded">

                  <label for="8+" class="ml-3 text-sm font-medium">
                    8+
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="12+" type="checkbox" name="age[12+]" class="w-5 h-5 border-gray-300 rounded">

                  <label for="12+" class="ml-3 text-sm font-medium">
                    12+
                  </label>
                </div>

                <div class="flex items-center">
                  <input id="16+" type="checkbox" name="age[16+]" class="w-5 h-5 border-gray-300 rounded">

                  <label for="16+" class="ml-3 text-sm font-medium">
                    16+
                  </label>
                </div>

                <div class="pt-2">
                  <button type="button" class="text-xs text-gray-500 underline">
                    Reset Age
                  </button>
                </div>
              </div>
            </fieldset>
          </div>

          <div class="flex justify-between px-5 py-3 border-t border-gray-200">
            <button name="reset" type="button" class="text-xs font-medium text-gray-600 underline rounded">
              Reset All
            </button>

            <button name="commit" type="button" class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded">
              Apply Filters
            </button>
          </div>
        </form>
      </details>
    </div>

      <div class="lg:col-span-3">
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            <span class="hidden sm:inline">
              Showing
            </span>
            6 of 24 Products
          </p>

          <div class="ml-4">
            <label for="SortBy" class="sr-only">
              Sort
            </label>

            <select id="SortBy" name="sort_by" class="text-sm border-gray-100 rounded">
              <option readonly="">Sort</option>
              <option value="title-asc">Title, A-Z</option>
              <option value="title-desc">Title, Z-A</option>
              <option value="price-asc">Price, Low-High</option>
              <option value="price-desc">Price, High-Low</option>
            </select>
          </div>
        </div>
      <div v-if="data">
        <div  v-for="p in data.products"
          :key="p.id"
          @click="move(p.id)" class="grid grid-cols-1 gap-px mt-4 bg-gray-200 border border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
          <div class="relative block bg-white">

            <button type="button" name="wishlist" class="absolute p-2 text-white bg-black rounded-full right-4 top-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </button>

            <img loading="lazy" alt="Build Your Own Drone" class="
                 text-center ml-14
                "
                :src="
                  'http://38.242.229.113:8055/assets/' +
                  p.image.id +
                  '?width=190&height=200'
                " />

            <div class="p-6 text-center">
              <span class="inline-block px-3 py-1 text-xs font-medium text-center">
                {{ p.title }}
              </span>

              <h5 class="mt-4 text-lg font-bold">
                
              </h5>

              <p class="mt-2 text-sm font-medium text-center">
               {{ p.price + "$" }}
              </p>

              <button click="addca" name="add" type="button" class="flex items-center justify-center w-full px-8 py-4 mt-4  rounded-sm">
                <span class="text-sm font-medium">
                  Add to Cart
                </span>

                <svg class="w-5 h-5 ml-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </button>
            </div>
            
          </div>
        </div> 
          <button @click="limit += 10">show more</button>
      </div>
    </div>
  </div>
</div>









</template>







<script>
import { useQuery, gql, useMutation } from "@urql/vue";
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
import { onMounted } from '@vue/runtime-core';



export default {
  setup() {
    const search = ref(null);
    const router = useRouter();
    const route = useRoute();
    const add = useMutation(`  
       
    mutation ($ProductId: Int!, $UserId: String!) {
  create_junction_directus_users_products_item(
    data: { products_id: $ProductId, directus_users_id: $UserId }
  ) {
    id
  }
}`


    );
    const limit = ref(8);
    const getProductsQuery = gql` 
      query($limit: Int! = 8, $search: String) {
        products(limit: $limit, search: $search) {
          id
          title
          price
          image {
            id
          }
        }
      }
    `;
    const getProducts = useQuery({ query: getProductsQuery, variables: { limit, search } });




    /* const result = useQuery({
      query: gql` 
        query ($search: String) {
          products(search: $search) {
            id
            title
            price
            spec
            image {
              id
            }
          }
        }`
      ,
      variables: { search },
    }); */
    function searchProducts() {
      getProducts.executeQuery()
    }


    function move(id) {
      router.push("/products/" + id);
    }


    async function addFav(id) {
      const i = id
      const a = parseInt(i)
      const u = "518c6ae4-9919-4f5c-a494-81a4c8e562a3"
      const variables = { ProductId: a, UserId: u }
      add.executeMutation(variables).then((result) => {
        if (result.error) {
          console.error("Oh no!", result.error);
        }
      });
    }


    return {
      search,
      fetching: getProducts.fetching,
      data: getProducts.data,
      error: getProducts.error,
      limit,
      searchProducts,
      move,
      addFav,
    };
  },
};
</script>


















<!-- <style scoped>

.logo{
    display: flex;
    justify-content: flex-start;
    font-size: 350%;
    align-items: center;
    /* margin: 1%; */
    padding-left: 1%;
    color: white;
    background-color: black;
    height: 62px;
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
    }
.sto{
  color: #e7dec4;
   text-shadow: 7px -4px 5px white, 0 0 5em white;
}
.icon{
font-size: 16%;
}
.skobka{
  position: relative;
}
.title-pro{
    display: flex;
    justify-content: center;
    font-size: 200%;
}
.shapka{
    height: 650px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    justify-content: space-around;
}
input {
    margin: 20px 0px 0px 0px;
    height: 24px;
    width: 249px;
    margin-right: 19px;
    border-color: #c7cdd6;
    border-radius: 7px;
}
input:hover {
     margin: 20px 0px 0px 0px;
    height: 24px;
    width: 249px;
    margin-right: 19px;
    border-color: #bdbdbd;
    border-radius: 7px; 
}
.prod{
   margin: 0px;
  padding:0px ;
    font-size: 450%;
}
.header {
  margin: 0 auto;
  background-color: #fff;
  font-family: sans-serif;
}
.content{
  margin: 0 auto;
  width: 1440px;
  /* background-color: #0400ff; */
}
.body{
    display: flex;
    justify-content: space-between;
    align-items: inherit;
    margin: 0px 0px;
    flex-direction: column;
}
.search {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    /* width: 74%; */
    margin: 1%;
}
.products {
  display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: flex-start;;
}
.product_card{
    width: 41%;
    padding: 4%;
    margin: 3%;
    border: #00000059 solid 1px;
    border-radius: 3%;
    box-shadow: inset 0 0 10px 5px rgb(181 188 200);
    text-align: left;
    width: 266px;
    /* border: 1px solid #ffffff00; */
    /* border-radius: 6px; */
    /* margin: 56px 35px 0px 35px; */
    /* padding: 25px 11px 5px 15px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* transition: all .2s ease-in-out; */
    /* max-width: 100%; */
    margin-bottom: 30px;
    /* display: block; */
    font-size: 18px;
    line-height: 21px;
    /* margin-bottom: 5px; */
    color: #000;
    /* text-decoration: none; */
    /* transition: color .3s linear; */
    /* word-break: break-word; */
}
.product_card:hover {
  border: #0400ff solid 1px;
  transition: 0.5s;
  cursor: pointer;
 
}
.img{
    margin: 7%;
    padding: 5%;
}
.title{
  font-size: 100%;    
  /* flex: 1 1 100%; */
  max-width: 100%;
  margin-bottom: 30px;
  display: block;
    /* font-size: 18px; */
    line-height: 21px;
    /* margin-bottom: 5px; */
    color: #000;
    /* text-decoration: none; */
    /* transition: color .3s linear; */
    /* word-break: break-word; */
}
.price{
    font-size: 100%;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    flex: 1 1 100%;
    max-width: 100%;
    justify-content: center;
}
.title-price {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  max-width: 100%
}
</style> -->