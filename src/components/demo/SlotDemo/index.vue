<template>
  <Card>
    <!-- 插槽内容 -->
    <template #header>
      <div>The Header Slot</div>
    </template>
    <template #default>
      <div>The Default Slot</div>
    </template>
    <template #footer="{ message, action }">
      <div>
        {{ message }}
        <button>{{ action }}</button>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
/**
 * 插槽 - Slots
 *
 * 参考文档:
 * @link https://cn.vuejs.org/guide/components/slots.html
 */

defineOptions({
  name: 'SlotsDemo',
  inheritAttrs: false,
})
</script>
