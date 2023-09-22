<template>
  <Header>
    <!-- <template v-slot="defaultProps">
            {{ defaultProps }}
        </template> -->

    <!-- $attrs $slots -->
    <template #default="defaultProps">
      {{ defaultProps }}
    </template>
    <template v-slot:action="{ gender }">
      {{ gender }}
    </template>
    <template #footer></template>

    <template #item="{ name, age }">
      <div class="item">
        <p>{{ name }}</p>
        <p>{{ age }}</p>
      </div>
    </template>
  </Header>

  <Bar v-model="name" />

  <Foo />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

import Header from './components/Header.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

// defineModel()
// defineOptions({
//   name: 'App',
// })

// const modelValue = defineModel()
// modelValue.value++

// NOTE: 调用子组件数据和方法时
const foo = ref<InstanceType<typeof Foo> | null>(null)
//   const foo = ref<InstanceType<typeof Foo>[]>([])

console.log('step', Foo.compilerOptions)

const name = ref('ddd')

provide('name', name)
</script>
