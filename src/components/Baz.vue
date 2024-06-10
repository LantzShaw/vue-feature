<template>
  <div></div>
</template>

<script lang="ts" setup>
/**
 * @reference https://juejin.cn/post/7092412488725037087
 *
 * NOTE: 由源码可知， vue3的watch，source为reactive时，直接监听是默认深度监听的，使用getter方式（vue2 的getter）没有默认深度监听，要选配deep
 */

const name = ref<string>('')
const address = reactive({
  country: 'China',
  province: 'Hong Zhou',
  streets: 'Wenxin Street',
  roomNo: '302',
})

const book = ref<string>('')

watch(name, (newVal, oldVal) => {})

// NOTE: 监听reactive定义的响应式数据时，自动深度监听（即：默认设置deep: true）
watch(address, (newVal, oldVal) => {})

watch(address, (newVal, oldVal) => {}, { deep: true })

// 监听多个
watch([() => address.rooNo, name], () => {})

// 监听对象中的某个属性
watch(
  () => addres.streets,
  (newVal, oldVal) => {}
)

// 自动收集依赖项
watchEffect(book, (newVal, oldVal) => {})

watchEffect(book, (newVal, oldVal) => {}, {
  // pre(默认)
  // post // 确保加载完dom之后执行
  // async
  flush: 'post',
})

const stop = watchEffect(() => {
  console.log('name:', obj.name)
})

// 手动停止监听
const stopWatchEffect = () => {
  console.log('停止监听')
  stop()
}
</script>

<style scoped></style>
