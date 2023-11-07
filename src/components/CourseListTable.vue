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
                    <RouterLink :to="`/user/course${element._id}`" class="text-gray-500 hover:text-gray-100 mr-2">
                       plus
                    </RouterLink>
                    <!-- <button @click="update(element)" class="text-yellow-400 hover:text-gray-100 mx-2" :course="element">
                        edit
                    </button> -->
                    <button>
                        <starIcon class="cursor-pointer" @click="importantCourse(element)" :course="element" />
                    </button>
                    
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import starIcon from './starIcon.vue';
import { useRoute } from 'vue-router';
import { useCoursesStore } from '@/stores/courses';
import { storeToRefs } from 'pinia'
import type { Course } from '@/types/courses'
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAxios } from '@/composable/useAxios';
import { toast } from 'vue3-toastify';

const route = useRoute()
const { initialise } = useCoursesStore();
const { courses } = storeToRefs(useCoursesStore());


const courseData = ref<Course[]>([
    {
        title: '',
        localisation: '',
        is_important:false,
        client_name: '',
        status:''
    }
]
)


onMounted(async () => {
    try {
        const user_id = route.params.user_id
        const resp = await useAxios().get(`/courses/${user_id}`)

        courseData.value = resp.data
        
    } catch (error:any) {
        toast.error(error.message)
    }
})

defineProps(['course'])

async function importantCourse(element:Course) {
    try {
        element.is_important = !element.is_important
        const resp = await useAxios().put(`/courses/important/${element._id}`)
        toast.success(resp.data.msg)
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