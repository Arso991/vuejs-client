import { defineStore } from "pinia";
import { ref } from "vue";
import { useSessionStorage } from "@vueuse/core";

export const useAuthStore = defineStore('token', ()=>{
    const token = ref();

    function initToken(accesToken){
        const token = useSessionStorage("authtoken", accesToken)
    }
    

    return {initToken, token}

})