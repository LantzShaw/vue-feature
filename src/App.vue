<script setup lang="ts">
import { provide, ref } from 'vue'

import Header from '@/components/Header.vue'
import TemplateRefsDemo from '@/components/demo/TemplateRefsDemo/index.vue'
import Bar from '@/components/Bar.vue'
import TemplateRefDemo from '@/components/TemplateRefDemo.vue'
import Input from '@/components/Input.vue'
import Editor from '@/components/Editor/index.vue'

// defineModel()
defineOptions({
  name: 'App',
})

// const modelValue = defineModel()
// modelValue.value++

// NOTE: 调用子组件数据和方法时
const templateRefsDemoRef = ref<InstanceType<typeof TemplateRefsDemo> | null>(null)
// const templateRefsDemoRef = ref<InstanceType<typeof TemplateRefsDemo>[]>([])

console.log('step', TemplateRefsDemo.compilerOptions)

const name = ref('ddd')
const title = ref('the title')

provide('name', name)
</script>

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

  <!-- NOTE: 组件名字必须使用 kebab-case 风格且不支持自闭合标签。因此你不能直接写 <RouterView />，而需要使用 <router-view></router-view> -->
  <!-- <router-view /> -->
  <router-view></router-view>
</template>
