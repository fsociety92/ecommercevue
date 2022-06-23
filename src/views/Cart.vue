<template>
  <div>
    <div v-for="p in productsCart" :key="p?.id">
      <p>{{p?.title}}</p>
    </div>

  </div>
</template>

<script>
import { useProductsStore } from "../stores/productCart";
import { onMounted } from "vue";

export default {
  setup() {
    const store = useProductsStore();
    const getProducts = store.getProductsCart;
    const productsCart = store.productsCart;

   console.log(productsCart);

    onMounted(() => {
      store.fetchProductsCart();

    });

    return {
      getProducts,
      productsCart,


    };
  },
};
</script>

<style>
</style>