<script lang="ts" setup>
defineOptions({
  name: 'Button',
  inheritAttrs: false,
})

const { onClick, type = 'secondary' } = defineProps<{
  type?: 'primary' | 'secondary' | 'danger' | 'link'
  onClick?: () => void
}>()
</script>

<template>
  <button class="btn" @click="onClick" :class="`btn-${type}`">
    <slot></slot>
    <slot name="icon"></slot>
  </button>
</template>

<style scoped>
.btn {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004494;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-danger {
  background-color: #dc3545;
}

.btn:hover {
  background-color: #f0f0f0;
  border-color: #999;
}
</style>
