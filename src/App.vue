<template>
    <Header>
        <!-- <template v-slot="defaultProps">
            {{ defaultProps }}
        </template> -->
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

console.log('step', Foo.compilerOptions)

const name = ref('ddd')

provide('name', name)
</script>
