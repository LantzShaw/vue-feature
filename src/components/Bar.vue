<template>
    <input type="text" v-model="name" />

    <input type="text" :value="age" @input="handleInput($event)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')

// NOTE: 参考文章 https://www.codenong.com/44321326/
const handleInput = (e: Event) => {
    age.value = (e.target as HTMLInputElement).value
    age.value = (<HTMLInputElement>e.target).value

    // const element = e.target as HTMLElement
    // age.value = element.value
}

// const handleInput = (e: { target: HTMLInputElement }) => {
//     age.value = target.value
// }
</script>

<style scoped></style>
