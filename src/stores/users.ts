import { defineStore } from "pinia";
import { useAxios } from "@/composable/useAxios";
import { computed, ref } from "vue";



export const useUsersStore = defineStore("courses", () => {
    const user= ref()

    async function initialise() {
        try {
            const resp = await useAxios().get("/home")
            user.value = resp.data
        } catch (error) {
            
        }
        
    }

    return {user, initialise}
})