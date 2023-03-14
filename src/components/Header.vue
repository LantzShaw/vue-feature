<template>
    <slot :name="'Lantz'" :age="123"></slot>
    <slot name="action" :gender="0"></slot>

    <slot name="footer"></slot>

    <ul>
        <li v-for="item in items">
            <slot name="item" v-bind="item"></slot>
        </li>
    </ul>
</template>

<script lang="ts" setup>
const items = [
    {
        name: 'Lantz',
        age: 18,
    },
    {
        name: 'Fancy',
        age: 18,
    },
]
</script>

<style scoped></style>
