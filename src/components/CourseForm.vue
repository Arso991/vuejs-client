<template>
    <div class="w-full">
        <form @submit.prevent="addCourse">
            <div class="bg-white px-2 py-4 rounded-xl shadow-md">
                <h1 class="text-center text-2xl font-semibold text-gray-600">Commande</h1>
                <div class="space-x-4 flex flex-wrap">

                    <div class="flex space-x-2 items-center m-2">
                        <label for="" class="block mb-1 text-gray-600 font-semibold">Titre</label>
                        <input type="text" v-model="courseData.title"
                            class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div class="flex space-x-2 items-center m-2">
                        <label for="" class="block mb-1 text-gray-600 font-semibold">Client</label>
                        <input type="text" v-model="courseData.client_name"
                            class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                    <div class="flex space-x-2 items-center m-2">
                        <label for="" class="block mb-1 text-gray-600 font-semibold">Localisation</label>
                        <input type="text" v-model="courseData.localisation"
                            class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                    </div>
                </div>
                <button type="submit"
                    class="mt-4 bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 px-6 py-2 rounded-md text-lg tracking-wide">Ajouter</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useAxios } from '@/composable/useAxios';
import { useRoute } from 'vue-router';
import type { Course } from '@/types/courses';
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css';

const courseData = ref<Course>(
    {
        title: '',
        client_name: '',
        is_important:false,
        localisation: '',
        status:''
    }
)

const route = useRoute()
const user_id = route.params.user_id

async function addCourse() {
    try {
        const resp = await useAxios().post(`/courses/${user_id}`, courseData.value)

        courseData.value = (
            {
                title: '',
                client_name: '',
                is_important:false,
                localisation: '',
                status:''
            }
        )

        toast.success(resp.data.msg)
    } catch (error:any) {
        toast.error(error.message)
    }
}

</script>

<style scoped></style>