<template>
    <!-- component -->
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div class="mx-auto flex w-full max-w-md flex-col space-y-10">
                <div class="flex flex-col items-center justify-center text-center space-y-2">
                    <div class="font-semibold text-3xl">
                        <p>Vérification de mail</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                        <p>Nous avons envoyé un code dans votre boite mail</p>
                    </div>
                </div>

                <div>
                    <form @submit.prevent="confirmation">
                        <div class="flex flex-col space-y-5">
                            <div class="mx-auto w-full max-w-xs">
                                <input v-model="data.email"
                                    class="px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                    type="email" placeholder="Entrez votre mail">
                            </div>
                            <h1 class="text-center text-xl text-slate-500">Code</h1>
                            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                <div class="h-16 ">
                                    <input v-model="data.code"
                                        class="w-full h-full tracking-[2.5rem] flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                        type="text" maxlength="4">
                                </div>
                            </div>

                            <div class="flex flex-col space-y-5">
                                <div>
                                    <button type="submit"
                                        class="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                        Vérifier le compte
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { useAxios } from "@/composable/useAxios"
import { toast } from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
import { useRouter } from "vue-router";

const router = useRouter()

const data = ref({
    email: "",
    code: ""
})

async function confirmation() {
    try {
        const resp = await useAxios().post('/users/confirmation', data.value)
        if (resp) {
            router.replace("/login")
        }
        data.value = {
            email: "",
            code: ""
        }
    } catch (error: any) {
        toast.error(error.response.data.msg)
    }
}
</script>