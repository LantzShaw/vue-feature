<script lang="ts" setup>
/**
 * 插槽 - Slots
 *
 * 参考文档:
 * @link https://cn.vuejs.org/guide/components/slots.html
 */

defineOptions({
  name: 'Card',
  inheritAttrs: false,
})
</script>

<template>
  <div>
    <!-- 插槽出口 -->
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" message="footer data" action="actions data"></slot>
  </div>
</template>
