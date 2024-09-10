<template>
    <div class="testTab">
        <button @click="tabClick(0)">SlotMachine</button> | 
        <button @click="tabClick(1)">TestComponent</button> | 
        <button @click="tabClick(2)">ModelTestComponents</button> | 
        <button @click="tabClick(3)">ComposableTestComponents</button>
        <br />
        <br />
        <SlotMachine v-if="showChildPageIf(0)"></SlotMachine>
        <TestComponent v-if="showChildPageIf(1)" :inputDefault="testComponentsDefaultValue" @testEmitEvent="testComponentsEmitEvent"></TestComponent>
        <div v-if="showChildPageIf(2)">
            <ModelTestComponents></ModelTestComponents>
        </div>
        <div v-if="showChildPageIf(3)">
            <ComposableTestComponents></ComposableTestComponents>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SlotMachine, { SlotMachineObject } from "@/components/SlotMachine.vue"
import TestComponent from "@/components/TestComponent.vue";
import ModelTestComponents from "@/components/ModelTestComponents.vue";
import ComposableTestComponents from "@/components/ComposableTestComponents.vue";
import { computed } from "vue";
import { ref } from "vue";

var testComponentsDefaultValue = ref("Now null");
var tabIndex = ref(0);

var showChildPageIf = computed(() => (index: number) => {
    console.log("JN - load index: %d, load tabIndex:%d", index, tabIndex.value)
    if (index == tabIndex.value) {
        return true;
    } else {
        return false;
    }
})

// function showChildPageIf(index: number) {
//     console.log("JN - load index: %d, load tabIndex:%d", index, tabIndex.value)
//     if (index == tabIndex.value) {
//         console.log("JN - true");
//         return true;
//     } else {
//         console.log("JN - false");
//         return false;
//     }
// }

function testComponentsEmitEvent(data) {
    testComponentsDefaultValue.value = data;
}

function tabClick(index: number) {
    tabIndex.value = index;
}

</script>