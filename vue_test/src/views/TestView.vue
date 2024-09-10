<template>
    <div class="test">
        <h1>This is Test Page. testValue: {{ testValue }}</h1>
        <button v-on:click="btnClick">testValue ++</button>
        <br/>
        <br/>
        <h1>{{ inputDefaultValue }}</h1>
        <TestComponent :inputDefault="inputDefaultValue" @testEmitEvent="testComponentsEventCatch">
            <template v-slot:xxx>
                <h1>這是外面的元件</h1>
            </template>
        </TestComponent>
        <br/>
        
    </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref, computed, defineEmits, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import {bus} from 'vue3-eventbus';
import TestComponent from '@/components/TestComponent.vue';

var testValue = ref(useRouter().currentRoute.value.params["settingValue"]);

function btnClick() {
    testValue.value++;
    bus.emit('testEvent', {a: testValue.value});
}

function testComponentsEventCatch(value) {
    inputDefaultValue.value = value;
}

var inputDefaultValue = ref('No input');

</script>