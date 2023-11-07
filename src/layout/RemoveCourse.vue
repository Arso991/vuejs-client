<template>
    <table class="table w-full text-gray-400 border-separate space-y-6 text-sm">
        <thead class="bg-blue-500 text-white">
            <tr>
                <th class="p-3">Nom du client</th>
                <th class="p-3 text-left">A faire</th>
                <th class="p-3 text-left">Localisation</th>

                <th class="p-3 text-left">Status</th>
                <th class="p-3 text-left">Action</th>
            </tr>
        </thead>
        <tbody>

            <tr class="bg-blue-200 lg:text-black" v-for="element in courseData" :class="element.status == 'is_finished' ? 'text-gray-100 line-through':''">
                <td class="p-3 font-medium capitalize">{{element.client_name}}</td>
                <td class="p-3">{{element.title}}</td>
                <td class="p-3">{{element.localisation}}</td>
                

                <td class="p-3">
                    <span  :class="element.status == '' ? 'bg-green-400 text-gray-50 rounded-md px-2 visible': 'hidden' ">EN ATTENTE</span>
                    <span  :class="element.status == 'in_progress' ? 'bg-yellow-400 text-gray-50 rounded-md px-2' : 'hidden' ">EN COURS</span>
                    <span  :class="element.status == 'is_finished' ? 'bg-gray-400 text-gray-50 rounded-md px-2' : 'hidden' ">TERMINEE</span>
                </td>
                <td class="p-3">
                    <button @click="delet(element)" class="text-red-400 hover:text-gray-100 mx-2" :course="element">
                        supprimer
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Course } from '@/types/courses';
import { useAxios } from '@/composable/useAxios';
import { useRoute } from 'vue-router';
import { clientHttp } from '@/lib/clientHttp';
import { toast } from 'vue3-toastify';

const route = useRoute()
const courseData = ref<Course[]>([
    {
        title: '',
        client_name: '',
        is_important: false,
        localisation: '',
        status: ''
    }
]
)
const user_id = route.params.user_id
onMounted(async ()=>{
    try {
        const resp = await useAxios().get(`/courses/finish/${user_id}`)
        courseData.value = resp.data
    } catch (error) {
        
    }
})

async function delet(element:Course){
    try {
        const resp = await clientHttp.delete(`/courses/${element._id}`)
    } catch (error:any) {
        toast.error(error.message)
    }
    
}
</script>
<style scoped>
.table {
    border-spacing: 0 15px;
}

i {
    font-size: 1rem !important;
}

.table tr {
    border-radius: 20px;
}

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
    border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
    border-radius: 0.625rem 0 0 0.625rem;
}
</style>