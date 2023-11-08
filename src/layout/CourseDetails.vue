<template>
    <div class="flex h-screen">
        <div class="bg-white w-1/2 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
            <div class="h-[20rem]">
                <img src="https://via.placeholder.com/400x300" alt=""
                    class="w-[100%] h-[100%] object-cover object-center" />
            </div>
            <div class="p-4" v-for="element in courseData">
                <p class="mb-1 text-gray-900 font-semibold">Title: <span class="text-gray-500 font-normal">{{ element.title
                }}</span></p>
                <p class="mb-1 text-gray-900 font-semibold">Client: <span class="text-gray-500 font-normal">{{
                    element.client_name }}</span></p>
                <p class="mb-1 text-gray-900 font-semibold">Status: <span
                        :class="element.status == '' ? 'bg-green-400 text-gray-50 rounded-md px-2 visible' : 'hidden'">EN
                        ATTENTE</span>
                    <span
                        :class="element.status == 'in_progress' ? 'bg-yellow-400 text-gray-50 rounded-md px-2' : 'hidden'">EN
                        COURS</span>
                    <span
                        :class="element.status == 'is_finished' ? 'bg-gray-400 text-gray-50 rounded-md px-2' : 'hidden'">TERMINEE</span>
                </p>

                <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos
                    eos
                    quisquam labore minus, dignissimos porro explicabo distinctio.</span>

                <div class="mt-8 mb-3">
                    <button type="submit" v-if="element.status == ''" @click="progress(element)"
                        class="px-4 py-2 bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline">Exécuter</button>
                    <button type="submit" v-if="element.status == 'in_progress'" @click="finish(element)"
                        class="px-4 py-2 bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg border rounded-lg text-white uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline">Terminer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CustomeMap from "@/components/CustomeMap.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { Course } from "@/types/courses";
import { useAxios } from "@/composable/useAxios";
import { toast } from "vue3-toastify";
import "leaflet/dist/leaflet.css";


const route = useRoute()
const id = route.params.id

const courseData = ref<Course[]>([
    {
        title: '',
        client_name: '',
        is_important: false,
        localisation: '',
        status: ''
    }
])

onMounted(async () => {
    try {
        const resp = await useAxios().get(`/courses/one/${id}`)
        
        courseData.value = resp.data

    } catch (error:any) {
        toast.error(error.message)
    }
})

async function progress(element:Course) {
    try {
        element.status = 'in_progress'
        const resp = await useAxios().put(`/courses/progress/${id}`)
    } catch (error:any) {
        toast.error(error.message)
    }
}

async function finish(element:Course) {
    try {
        element.status = 'is_finished'
        const resp = await useAxios().put(`/courses/finish/${id}`)
    } catch (error:any) {
        toast.error(error.message)
    }
}


</script>

<style scoped></style>