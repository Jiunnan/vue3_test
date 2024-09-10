<template>
    <div class="slotGame">
        <h1>This is Slot Game View</h1>
        <div>
            <label class="labelStyle" v-on:click="labelClick(0)">拉霸頁面</label> | 
            <label class="labelStyle" v-on:click="labelClick(1)">拉霸選項頁面</label>
        </div>
        <div v-if="tabIndex == 0">
            <TextSlotMachine></TextSlotMachine>
        </div>
        <div v-if="tabIndex == 1">
            <SettingComponents></SettingComponents>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SettingComponents from '@/components/SettingComponents.vue';
import TextSlotMachine from '@/components/TextSlotMachine.vue';

const tabIndex = ref(0);

function labelClick(index) {
    tabIndex.value = index;
}

let indexValue = 5

let showText = `show text value ${indexValue}`;

</script>

<style scope>
.labelStyle {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
}

.labelStyle:hover {
    color: green;
    text-decoration: underline;
}
</style>