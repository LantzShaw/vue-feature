<template>
    <div>Foo</div>
    <div>{{ name }}</div>
    <button :disabled="isReadOnly(status)"></button>

    <div :ref="setRef" v-for="item in itemList" :key="item"></div>

    <div ref="firstRef">
        <div ref="secondRef">
            <div ref="thirdRef">获取ref中的ref</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, Ref, onMounted, getCurrentInstance, VueElement } from 'vue'

const name = inject('name')

const status = ref<number>(200)

const itemList = ref([1, 2])

const firstRef = ref(null)
const secondRef = ref(null)
const ThirdRef = ref(null)

const refList = ref<HTMLDivElement[] | null>(null)

// TODO: el 为 any 才报错
const setRef = (el: HTMLDivElement) => {
    console.log('------el-------', el)
    /* assign el to a property or ref */

    refList.value?.push(el)
}

// NOTE: 传递参数给computed
const isReadOnly = computed(() => {
    return (status: number) => {
        return status === 200
    }
})

onMounted(() => {
    console.log(refList.value)

    // NOTE: 在setup中和生命周期中可用
    const instance = getCurrentInstance()

    if (instance) {
        console.log(instance.refs)
    }
})
</script>
