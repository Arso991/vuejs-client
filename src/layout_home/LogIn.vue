<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">CONNEXION</h1>
            <p>Entrez vos informations pour vous connecter</p>
        </div>
        <div>
            <LogInForm />
        </div>
        <h2 class="text-center">S'inscrire <RouterLink class="text-[blue]" to="/signup">ici</RouterLink> </h2>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogInForm from '@/components/LogInForm.vue';

</script>