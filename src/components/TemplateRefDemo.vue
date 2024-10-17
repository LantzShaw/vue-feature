<script lang="ts" setup>
import { onMounted, useTemplateRef, useAttrs, ref } from 'vue'

import Button from './Button.vue'

defineOptions({
  name: 'TemplateRefDemo',
  // NOTE: 适用于单个跟节点的场景
  // 例如：只有一个根节点，然后不想自动透传到根节点上，则可以设置 inheritAttrs: false，然后在指定子元素上通过 v-bind="$attrs" 手动显示透传
  // 与多个根节点不同的是，组件没有自动透传的行为，需要显示绑定，不然会有运行时警告，并且设置 inheritAttrs 为 false 或者 true 都无效
  inheritAttrs: true,
})

const attrs = useAttrs()

console.log('============attrs==========', attrs)

const id = ref<string>()
const inputRef = useTemplateRef('input-ref')
const objectOfAttrs = {
  id: 'test',
  class: 'test-class',
  style: 'color: red',
}

onMounted(() => {
  inputRef.value?.focus()
})

const buttonClick = () => {
  console.log('button click')
}
</script>

<template>
  <div v-bind="$attrs">template ref</div>
  <input type="text" ref="input-ref" />

  <Button @click="buttonClick" type="primary">
    Button
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </template>
  </Button>
  <Button>Secondary Button</Button>

  <!-- 动态绑定多个值 - 通过不带参数，将他们绑定到单个元素上 -->
  <div v-bind="objectOfAttrs"></div>

  <!-- 与 :id="id" 相同 -->
  <div :id></div>

  <!-- 这也同样有效 -->
  <!-- <div v-bind:id></div> -->

  <!-- 当 isButtonDisabled 为真值或一个空字符串 (即 <button disabled="">) 时，元素会包含这个 disabled attribute。而当其为其他假值时 attribute 将被忽略。 -->
  <!-- <button :disabled="isButtonDisabled">Button</button> -->
</template>

<style scoped></style>
