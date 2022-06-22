<script setup lang="ts">
    import LogoSVG from '/src/assets/logoExeat.svg';
    import PinkButton from '/src/components/buttons/pinkButton.vue';
    import WhiteButton from '/src/components/buttons/whiteButton.vue';
</script>

<template>
    <div class="bg-exeat-white grid grid-cols-3 items-center p-0 m-0 justify-items-stretch border-b-2 border-b-gray h-[90px]">
        <!-- Logo 
        <div>
            <img :src="LogoSVG" alt="my-logo" class="max-h-20" />
        </div>
        -->

        <!-- nom -->
        <div class="items-left text-center">
            <div class="w-1/4">

            </div>
            <div class="w-3/4">
                <span class="font-bold font-mono text-3xl">
                    ex'eat
                </span>
            </div>
        </div>

        <!-- Barre de recherche -->
        <div class="mt-2 mb-2">
            <form class="w-4/4 h-4/4 justify-self-center ">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3">
                        <button type="submit" class="w-4 h-4 inline-flex items-center">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                    <input type="search" id="default-search" class="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:border-exeat-medium" placeholder="Restaurants, Produits, ..." required>
                </div>
            </form>
        </div>

        <!-- Bouton de Login -->
        <div class="justify-self-end mr-4">
            <WhiteButton buttonName="Inscription"/>
            <PinkButton buttonName="Connexion"/>
        </div>
    </div>
</template>