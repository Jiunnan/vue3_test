<template>
    <div class="testComponents">
        <slot name="xxx">xxx</slot>
        <br/>
        <input type="text" v-model="inputValue" />
        <br/>
        <br/>
        <h2>測試reactive</h2>
        <h2>ID: {{ testObject.id }}</h2>
        <h2>Name: {{ testObject.name }}</h2>
        <input v-model="testObject.name" />
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
    inputDefault: String
});

const testObject = reactive({
    id : 39,
    name: "miku",
});

watch(() => ({...testObject}), (newValue, oldValue) => {
    console.log("JN - %s --> %s", oldValue.name, newValue.name)
}, {deep: true})

const emits = defineEmits(["testEmitEvent"]);

const inputValue = computed({
    get() {
        return props.inputDefault;
    },
    set(newValue) {
        emits("testEmitEvent", newValue);
    }
})

</script>