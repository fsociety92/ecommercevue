<template>
  <div class="shapka">
    <img class="immg" src="./images/Снимок экрана (12).png" alt="" />
    <p class="prod">Products</p>
  </div>
  
  <div class="bg-white">
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
  </div>


  <button @click="limit += 10">show more</button>














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