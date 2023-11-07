<template>
    <div class="flex">
        <SideBar :userInfo="user" />
        <main class="w-[100%]">
            <div class="bg-slate-100 h-[100vh]">
                

                <RouterView/>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import {useAxios} from "@/composable/useAxios"
import { RouterView, RouterLink } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
import { clientHttp } from '@/lib/clientHttp';
import  { onMounted, ref } from 'vue';
import { toast } from "vue3-toastify";

const user = ref({})
let token = ref(localStorage.getItem("authToken"))

onMounted(async ()=>{
  try {
    clientHttp.defaults.headers.common.Authorization = `Bearer ${token.value}`
    const resp = await clientHttp.get("/home")
    user.value = resp.data
    
  } catch (error:any) {
    toast.error(error.message)
  }
})
 
defineProps(["userInfo"])

</script>

<style scoped>
</style>
