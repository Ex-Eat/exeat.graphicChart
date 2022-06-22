<script setup lang="ts">

defineProps<{ buttonName: string }>()

</script>

<template>
    <button class="h-10 relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-exeat-dark rounded-full focus:ring-1 focus:outline-none focus:ring-exeat-dark">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 rounded-full">
            {{ buttonName }}
        </span>
    </button>
</template>