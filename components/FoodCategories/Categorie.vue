<script setup lang="ts">

defineProps<{ logoName: string, catName: string }>()

</script>

<template>
    <div class="grid grid-cols-1 grid-rows-4 h-full w-fit justify-center text-center mr-2 ml-2">
        <!-- logo -->
        <div class="row-span-3">
            <img :src="'src/assets/categories/' + logoName + '.png'" :alt="logoName" class="object-contain h-full">
        </div>

        <!-- name -->
        <div class="">
            <span class="font-mono font-bold">
                {{ catName }}
            </span>
        </div>
    </div>
</template>