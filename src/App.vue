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
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Header from './components/Header.vue'

const name = ref('')
</script>
