<template>
    <form action="" @submit.prevent="createUser">
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Pseudo</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="text" v-model="userData.username"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <label for="" class="text-xs font-semibold px-1">Email</label>
                <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="email" v-model="userData.email"
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
                    <input type="password" v-model="userData.password"
                        class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************">
                </div>
            </div>
        </div>
        <div class="flex -mx-3">
            <div class="w-full px-3 mb-5">
                <button type="submit"
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">S'INSCRIRE</button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';
import type { User } from '@/types/users';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAxios } from "@/composable/useAxios"

const router = useRouter()
const userData = ref<User>(
    {
        username: '',
        email: '',
        password: '',
    }
)


async function createUser() {
    try {

        const resp = await useAxios().post("/users/register", userData.value);

        userData.value = {
            username: "",
            email: "",
            password: ""
        }

        router.push("/validation")
    } catch (error: any) {
        toast.error(error.response.data.error)
    }
}

</script>

<style scoped></style>