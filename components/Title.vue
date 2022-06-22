<script setup lang="ts">

defineProps<{ restaurantName: string, logo: boolean, logoName: string }>()

</script>

<template >
    <div class="w-screen h-48 bg-gray-100 inline-flex items-center" v-if="logo === true">
        <span class="basis-10/12 pl-20 font-bold font-mono text-5xl">
            {{ restaurantName }}
        </span>
         <img :src="'src/assets/categories/' + logoName + '.png'" :alt="logoName" class="object-contain h-32">
    </div>
    <div class="w-screen h-48 bg-gray-100 inline-flex items-center" v-else>
        <span class="pl-20 font-bold font-mono text-5xl">
            {{ restaurantName }}
        </span>
    </div>
</template>
