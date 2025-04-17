<script lang="ts" setup>
/**
 * 模板引用 - Template Refs
 *
 * 参考文档:
 * @link https://cn.vuejs.org/guide/essentials/template-refs.html
 */

import { computed, inject, ref, Ref, watchEffect, onMounted, getCurrentInstance, VueElement, useTemplateRef } from 'vue'

const name = inject('name')
const itemList = ref([1, 2])
const status = ref<number>(200)
const firstRef = ref(null)
const secondRef = ref(null)
const ThirdRef = ref(null)

/**
 * NOTE: 注意一:
 *
 * ref 数组并不保证与源数组相同的顺序
 */
const itemRefs = useTemplateRef<HTMLDivElement>('items')

/**
 * NOTE: 注意二:
 *
 * 动态的ref绑定可以传入一个函数，该函数第一个参数就是元素引用
 * 组件卸载时也会调用一次,此时el为null
 */
const inputRef = el => {
  console.log('inputRef', el)
}

/**
 * NOTE: 注意三:
 *
 * 需要侦听一个模板引用 ref 的变化，确保考虑到其值为 null 的情况
 */
const inputDomRef = useTemplateRef('inputDom')
watchEffect(() => {
  if (inputDomRef.value) {
    inputDomRef.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

/**
 * NOTE: 注意四:
 *
 * TODO: el 为 any 才报错
 * @deplecated Vue 3.5版本之前
 */
const refList = ref<HTMLDivElement[] | null>(null)
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

  console.log('============itemRefs============', itemRefs.value)
})

onMounted(() => {
  console.log('===========step2==========')
})

/**
 * NOTE: 注意五:
 *
 * 1. 使用了 <script setup> 的组件是默认私有的：一个父组件无法访问到一个使用了 <script setup> 的子组件中的任何东西，
 * 除非子组件在其中通过 defineExpose 宏显式暴露
 *
 * 2. 通过模板应用获取的组件实例，里面ref值会自动解包，无需使用.value
 *
 * 3. defineExpose 这样的编译器宏不需要导入。同时需要注意，defineExpose 必须在await 操作之前调用，否则暴露的属性和方法将无法访问
 */
defineExpose({})
</script>

<template>
  <div>{{ name }}</div>
  <button :disabled="isReadOnly(status)"></button>

  <div ref="items" v-for="item in itemList" :key="item">
    {{ item }}
  </div>

  <div ref="firstRef">
    <div ref="secondRef">
      <div ref="thirdRef">获取ref中的ref</div>
    </div>
  </div>

  <input type="text" :ref="inputRef" />
  <input type="text" ref="inputDom" />
</template>
