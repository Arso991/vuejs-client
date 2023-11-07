<template>
  <div class="flex flex-col sticky text-white bottom-0 left-0 top-0 h-screen bg-gray-800 border-b-2 border-r-2 border-gray-200">
    <div class="w-full h-28 flex flex-col items-center mt-10">
      <h1>Hello !</h1>
      <p>{{userInfo.username}}</p>
    </div>
    <aside class="flex flex-col space-y-2 p-2" x-show="asideOpen">
      <RouterLink :to="`/user${userInfo._id}`">
        <a href="" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span class="text-2xl"><i class="mdi mdi-home-outline"></i></span>
          <span>Home</span>
        </a>
      </RouterLink>

      <RouterLink :to="`/user/courses${userInfo._id}`">
        <p class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span class="text-2xl"><i class="mdi mdi-file-outline"></i></span>
          <span>Course</span>
        </p>
      </RouterLink>

      <RouterLink :to="`/user/complete${userInfo._id}`">
        <a href="" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span class="text-2xl"><i class="mdi mdi-motorbike"></i></span>
          <span>En cours</span>
        </a>
      </RouterLink>

      <RouterLink :to="`/user/remove${userInfo._id}`">
        <a href="" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
          <span class="text-2xl"><i class="mdi mdi-checkbox-marked-outline"></i></span>
          <span>Terminées</span>
        </a>
      </RouterLink>


      <button @click="logout"
        class="flex items-center space-x-1 left-0 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
        <span class="text-2xl"><i class="mdi mdi-power"></i></span>
        <span>Déconnection</span>
      </button>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter()

defineProps(['userInfo'])

function logout(){
  localStorage.removeItem("authToken")
  router.replace("/login")
}
</script>

<style scoped></style>
