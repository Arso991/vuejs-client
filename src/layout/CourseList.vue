<template>
    <div class="w-full justify-between p-5 h-[100%]">
        <CourseForm />
        <div class="w-full mt-5">
            <p class="text-xl font-semibold">Liste des courses</p>
            <div class="w-full">
                <CourseListTable />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CourseForm from '@/components/CourseForm.vue';
import CourseListTable from '@/components/CourseListTable.vue'




</script>

<style scoped>
</style>