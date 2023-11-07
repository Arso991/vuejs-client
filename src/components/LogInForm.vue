<template>
    <form action="" @submit.prevent="connect">
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Email</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="email" v-model="connectData.email"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-12">
                <label for="" class="text-xs font-semibold px-1">Password</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="password" v-model="connectData.password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <button type="submit"
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">SE
                    CONNECTER</button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useAxios } from '@/composable/useAxios';
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth";

/* const {initToken} = useAuthStore() */
const router = useRouter()
const connectData = ref(
    {
        email: '',
        password: ''
    }
)

async function connect() {
    try {
        const resp = await useAxios().post('/users/login', connectData.value)

        const accessToken = ref(resp.data.accessToken)

        localStorage.setItem("authToken", accessToken.value)

        if(resp){
            router.replace("/user")
        }
    } catch (error:any) {
            toast.error(error.message)
    }

}
</script>