<script lang="ts" setup>
const title = defineModel('title', { required: true })

// defineProps({
//   title: {
//     required: true
//   }
// })
// defineEmits(['update:title'])
</script>

<template>
  <!-- 这是v-model没有指定参数，默认绑定的是value或者checked或者selected，取决于元素的类型 -->
    <input type="text" v-model="title">
    <!-- <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  /> -->
</template>

<style lang="scss" scoped></style>