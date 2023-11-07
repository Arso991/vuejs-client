<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">INSCRIPTION</h1>
            <p>Entrez vos informations pour vous inscrire</p>
        </div>
        <div>
            <SignUpForm />
        </div>
        <h2 class="text-center">Se connecter <RouterLink class="text-[blue]" to="/login">ici</RouterLink> </h2>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SignUpForm from '@/components/SignUpForm.vue';

</script>
