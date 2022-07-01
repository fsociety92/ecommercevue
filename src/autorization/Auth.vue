<template>
    <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
            <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">AppleP</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300">This is a login page, please autorize or sign in</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Applep</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                      
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="auth_email" value="a@example.com" placeholder="Write your email" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="/products" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="auth_password" value="123" placeholder="Write your password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button @click="getAuth"
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                      

                        <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <my-button @click="dialogVisivle">Зарегестрироваться</my-button></p>


                        <my-dialog v-model:show="visiblDialog"></my-dialog>


                    </div>
                </div>
            </div>
        </div>
    </div> 


  <div>
    <div>
      <input type="text" name="first" placeholder="Write your name" />
      <input type="text" name="last" placeholder="Write your last name" />
      <input type="email" name="email" placeholder="Write your email" />
      <input
        type="password"
        name="password"
        placeholder="Write your password"
      />
      <button @click="createUser">Завершить регистрацию</button>
    </div>
    <div>
      <input
        type="email"
        name="auth_email"
        value="a@example.com"
        placeholder="Write your email"
      />
      <input
        type="password"
        name="auth_password"
        value="123"
        placeholder="Write your password"
      />
      <button @click="getAuth">Войти</button>
    </div>
    <p>{{ me_email }}</p>
    <p>{{ me_id }}</p>
    <button @click="user_me">click</button>
  </div>


</template>



<script>
// import { provideClient, useMutation, useQuery } from 'urql'
import { ref } from "@vue/reactivity";
import axios from "axios";
    
export default {
 
  setup() {

    const me_email = ref('') 
    const me_id = ref('')
    const status = [200, 201, 204]
    const falsee = ["ERR_BAD_REQUEST"]
    const visiblDialog = ref(true)

    async function user_me () {
       const { data } = await axios.post("http://38.242.229.113:8055/users/me", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(data);
      me_email.value = data.data.email
      me_id.value = data.data.id
    }



    async function getAuth() {
      const password = document.querySelector(
        "input[name=auth_password]"
      ).value;
      const email = document.querySelector("input[name=auth_email]").value;
      const data = { email: email, password: password };
      const result = await axios
      .post(
        "http://38.242.229.113:8055/auth/login",
        data
      );
      console.log(result);
      localStorage.setItem("token", result.data.data.access_token)
      if (status.includes(result.status)) {
        window.location.href = "/products";
      }
      if (falsee.includes(result.status)) {
        console.log("Неверный логин или пароль");
      }
    }


    
    async function createUser() {
      const first = document.querySelector("input[name=first]").value;
      const last = document.querySelector("input[name=last]").value;
      const email = document.querySelector("input[name=email]").value;
      const password = document.querySelector("input[name=password]").value;
      const data = {
        first_name: first,
        last_name: last,
        email: email,
        password: password,
      };
      axios
        .post("http://38.242.229.113:8055/users", data)
        .then(alert("Успешно зарегистрировались"));
    }
    return {
      getAuth,
      createUser,
      user_me,
      me_email,
      me_id,
      visiblDialog: false,
    };
  },
 methods: {
    dialogVisivle() {
      this.visiblDialog = true;
    },
  },
};
</script>