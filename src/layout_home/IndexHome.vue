<template>
    <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
        <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">BIENVENUE SUR LA PLATEFORME QUI VOUS FACILITE LA GESTION DES
                COURSES</h1>
            <p>Si vous n'avez pas encore un compte vous pouvez vous inscrire sinon vous pouvez vous connecter à votre compte
            </p>
        </div>
        <div>
            <div class="w-full px-3 mb-5">
                <RouterLink to="/signup"
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white text-center rounded-lg px-3 py-3 font-semibold">
                    S'INSCRIRE</RouterLink>
            </div>
            <div class="w-full px-3 mb-5">
                <RouterLink to="/login"
                    class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white text-center rounded-lg px-3 py-3 font-semibold">
                    SE CONNECTER</RouterLink>
            </div>
        </div>
    </div>
</template>
