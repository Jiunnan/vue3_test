<template>
    <div class="other">
        <h1>現在的選項有{{ message }}項</h1>
        <h1>This is a other page.</h1>
        <div v-if="divHiddenIf()">
            <h1>現在的數字為： {{ numberValue }}</h1>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, inject, computed, defineProps } from 'vue';
import { useCounterStore } from '@/store/counter';
import {bus} from 'vue3-eventbus'
const counterStore = useCounterStore();
// const count = computed(() => counterStore.getCount);
let message = computed(() => counterStore.getOptionChoice);
var numberValue = ref(useRouter().currentRoute.value.params["testValue"]);

console.log("JN - load params:", useRouter().currentRoute.value.params["testValue"]);

bus.on('testEvent', numberValueGet);

function numberValueGet(value) {
    numberValue.value = value['a'];
}

function divHiddenIf() {
    return message.value == "three";
}
</script>