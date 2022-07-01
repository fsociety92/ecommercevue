<!-- <template>
  <div>
    <div
      class="border-2 border-black mb-2 p-4"
      v-for="(data, p, index) in cart"
      :key="p.id"
    >

      <p>{{ data.title }}</p>
      <p>{{ data.price }}</p>
      <button
        @click="deleteFromCartLocal(index)"
        class="border-2 border-black p-1 hover:text-white hover:bg-black"
      >
        delete from cart
      </button>
    </div>
  </div>
</template> -->











































<script>
import { ref } from '@vue/reactivity';
import { deleteFromCart } from '../utils/cart'
export default {
  setup() {
    let cart = ref(JSON.parse(sessionStorage.getItem('cart')));
    const deleteFromCartLocal = (index) => {
      cart.value.splice(index,1)
      deleteFromCart(index)
    }
    return {
      cart,
      deleteFromCart,
      deleteFromCartLocal
    }
  },
};
</script>
