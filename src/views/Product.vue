<template>

<!-- <div class="logo">PRO <p>sto</p></div> -->
    <!-- <div class="content">
      <div class="body">
        <div v-if="fetching" class="loading">Loading...</div>
        <div v-else-if="error" class="error">Oh no... {{ error }}</div>
        <div v-else>
          <div v-if="data">
            <div class="product">
              <div class="title-img">
                <div class="img"> <img :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id"
                    alt="">
                </div>
              </div>
              <div class="descr-spec-price">
                <h2 class="title">{{ data.products_by_id.title }}</h2>
                <p class="description">{{ data.products_by_id.description }}</p>
                <p class="price">{{ data.products_by_id.price }}$</p>
                <p class="spec">{{ data.products_by_id.spec }}</p> -->

              <!-- </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->







<section>
  <div v-if="data" id="todo" class="relative max-w-screen-xl px-4 py-8 mx-auto grid grid-cols-2 grid-rows-2	">
  
   
         
            <img
              alt="Mobile Phone Stand"
              class=""
              :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id"
            />
        
      


      <div class=" top-0 ">
        <strong class="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600"> Pre Order </strong>

        <div class="flex justify-between mt-8"> 
          <div class="max-w-[35ch]">
            <h1 class="text-2xl font-bold">
             {{ data.products_by_id.title }}
            </h1>

            <p class="mt-0.5 text-sm">
              Highest Rated Product
            </p>

            <div class="flex mt-2 -ml-0.5">
              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                class="w-5 h-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <p class="text-lg font-bold">
            {{ data.products_by_id.price + "$" }}
          </p>
        </div>

        <details class="relative mt-4 group">
          <summary class="block">
            <div>
              <div class="prose max-w-none group-open:hidden">
                <p>
                  {{ data.products_by_id.description }}
                </p>
              </div>

              <span class="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                Read More
              </span>
            </div>
          </summary>

          <div class="pb-6 prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam dicta beatae eos ex error culpa delectus rem tenetur, architecto quam nesciunt, dolor veritatis nisi minus inventore, rerum at recusandae?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam sapiente nobis ea veritatis error consequatur nisi exercitationem iure laudantium culpa, animi temporibus non! Maxime et quisquam amet. A, deserunt!
            </p>
          </div>
        </details>

        <form class="mt-8">
          <fieldset>
            <legend class="mb-1 text-sm font-medium">Color</legend>

            <div class="flow-root">
              <div class="flex flex-wrap -m-0.5">
                <label for="color_tt" class="cursor-pointer p-0.5">
                  <input type="radio" name="color" id="color_tt" class="sr-only peer" />

                  <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Texas Tea
                  </span>
                </label>

                <label for="color_fr" class="cursor-pointer p-0.5">
                  <input type="radio" name="color" id="color_fr" class="sr-only peer" />

                  <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Fiesta Red
                  </span>
                </label>

                <label for="color_cb" class="cursor-pointer p-0.5">
                  <input type="radio" name="color" id="color_cb" class="sr-only peer" />

                  <span class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Cobalt Blue
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <!-- <fieldset class="mt-4">
            <legend class="mb-1 text-sm font-medium">Size</legend>

            <div class="flow-root">
              <div class="flex flex-wrap -m-0.5">
                <label for="size_xs" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_xs" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XS
                  </span>
                </label>

                <label for="size_s" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_s" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    S
                  </span>
                </label>

                <label for="size_m" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_m" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    M
                  </span>
                </label>

                <label for="size_l" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_l" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    L
                  </span>
                </label>

                <label for="size_xl" class="cursor-pointer p-0.5">
                  <input type="radio" name="size" id="size_xl" class="sr-only peer" />

                  <span class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    XL
                  </span>
                </label>
              </div>
            </div>
          </fieldset> -->

          <div class="flex mt-8">
            <div>
              <label for="quantity" class="sr-only">Qty</label>

              <input
                type="number"
                id="quantity"
                min="1"
                value="1"
                class="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
              />
            </div>

            <button
              @click="addToCart(data.products_by_id)"
              type="submit"
              class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
            >
              Add to Cart
            </button>
              <button  @click = "addToFav"
              type="submit"
              class="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500">Add to favorites</button>
          </div>
         
        </form>
      </div>
    </div>
   
  
</section>








</template>

<script>
import { useQuery, gql, useMutation } from "@urql/vue";
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
import { addToCart } from '../utils/cart'

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    
    const storeItemSubscribers = {};
    const id =+ route.params.id;
    const result = useQuery({
      query: `
        query getProduct($id: ID!) {
          products_by_id(id: $id) {
            id
            title
            price
            spec
            description
            image {
              id
            }
          }
        }
      `, variables: { id }
    },
    );

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
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      route,
      addFav,
      addToCart,
    }
  },
};

</script>

<style scoped> 
  .no-spinners {
    -moz-appearance: textfield;
  }

  .no-spinners::-webkit-outer-spin-button,
  .no-spinners::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style>