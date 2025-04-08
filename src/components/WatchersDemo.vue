<script lang="ts" setup>
import { reactive, ref, watch, watchEffect } from 'vue'

/**
 * 侦听器 - Watchers
 *
 * watch - 明确监听某个数据源，当数据源发生变化时，执行回调
 * 第三个参数:
 * - { immediate: true } 立即执行回调，默认为false
 * - { deep: true } 深度监听，默认为false
 * - { flush: 'pre' | 'post' | 'sync' } 回调执行时机，默认为'pre', 'post'表示组件更新后执行，'sync'表示同步执行
 * - { once: true } 一次性侦听器, 只执行一次，默认为false, Vue 3.4+版本支持
 *
 * watchEffect - 会在同步执行过程中，自动追踪所有能访问的响应式属性
 *
 * watch vs. watchEffect​
 *
 * watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：
 * watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。
 * watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。
 *
 * watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。
 *
 * 参考文档:
 * @link https://cn.vuejs.org/guide/essentials/watchers.html
 */

const count = ref(0)
const info = reactive({
  name: '张三',
  age: 18,
})

const onIncrease = () => {
  count.value++
}

const onDecrease = () => {
  count.value--
}

/**
 * NOTE: 注意一:
 *
 * 1. 第一个参数可以接收几种数据源: ref(包括computed属性)、响应式对象、getter函数、或者几个数据源组成的数组
 */

// (1) 监听数据源ref
watch(count, (newValue, oldValue) => {
  console.log('===============count watching==========', newValue, oldValue)
})

// ---------------------- START 监听响应式对象 -----------------------
//
// (2) 监听响应式对象
// 会隐式创建一个深度监听器(嵌套对象变更时都会触发)
watch(info, (newValue, oldValue) => {
  console.log('===========info watching============', newValue, oldValue)
})

// (3) 监听响应式对象的某个属性时会报错, 需要使用getter函数
// ❌ 错误写法
// watch(info.name, (newValue, oldValue) => {
// })

// ✅ 正确写法
watch(
  () => info.name,
  (newValue, oldValue) => {
    console.log('===========info.name watching============', newValue, oldValue)
  }
)

// (4) 监听返回响应式对象的getter函数
watch(
  () => info, // 返回不同的对象时，才会触发回调
  (newValue, oldValue) => {
    // 这里的newValue和oldValue只有info被替换时才会不同

    // 只有当info对象被替换时才会触发
    // 这时可以设置显示的设置 deep: true
    console.log('===========info watching============', newValue, oldValue)
  },
  {
    deep: true,
  }
)

// (5) 监听多个数据源
watch([count, () => info.name], ([newCount, newName], [oldCount, oldName]) => {
  console.log('===========multiple watching============', newCount, oldCount, newName, oldName)
})

// --------------------------- END 监听响应式对象 --------------------

// NOTE: 注意二:
const todoId = ref(1)
const todoList = ref([])
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)

  todoList.value = await response.json()
})
</script>

<template>
  <div style="display: flex">
    <button @click="onIncrease">increate</button>
    <span>{{ count }}</span>
    <button @click="onDecrease">decrease</button>
  </div>
</template>
