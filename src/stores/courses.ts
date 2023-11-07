import { defineStore } from "pinia";
import { computed, defineComponent, ref } from "vue";
import type { Course } from "@/types/courses";



export const useCoursesStore = defineStore("courses", () => {
    const courses = ref<Course[]>([])
    const courseCompleted = ref<Course[]>([])
    const courseImportant = ref<Course[]>([])

    const courseRest = computed(()=> courses.value.length - courseCompleted.value.length)

    async function initialise() {
        
    }

    async function initialiseCompleted() {
        
    }

    async function initialiseImportant() {
        
    }

    async function addCourse (course:Course){
        
    }

    async function updateCourse(course:Course){
        
    }

    return {courses, courseCompleted,courseImportant,courseRest ,initialise, addCourse, initialiseCompleted, initialiseImportant}
} )