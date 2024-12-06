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
  <hr />
  <h2>模板引用</h2>
  <TemplateRefDemo style="color: #f40" />

  <h2>v-model</h2>

  <Input v-model:title="title" />

  <hr />
  <h2>Editor</h2>
  <Editor />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

import Header from './components/Header.vue'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
import TemplateRefDemo from './components/TemplateRefDemo.vue'
import Input from './components/Input.vue'
import Editor from './components/Editor/index.vue'

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

const title = ref('the title')

provide('name', name)
</script>
