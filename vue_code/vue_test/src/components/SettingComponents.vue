<template>
    <div class="settingComp">
        <h2>拉霸選項設定頁</h2>
        <div>
            <input type="radio" id="setting_option1" value="one" v-model="optionCheck" v-on:change="optionSelect(1)" />
            <label for="setting_option1">1個選項</label> | 
            <input type="radio" id="setting_option2" value="two" v-model="optionCheck" v-on:change="optionSelect(2)" />
            <label for="setting_option2">2個選項</label> | 
            <input type="radio" id="setting_option3" value="three" v-model="optionCheck" v-on:change="optionSelect(3)" />
            <label for="setting_option3">3個選項</label>
        </div>
        <div v-if="optionsDataShow(1)">
            <h3>第一個選項</h3>
            <div v-for="(resOption, index) in options" :key="resOption.option_1">
                <p>
                    第{{ index + 1 }}個項目{{resOption.option_1}}&emsp;&emsp;
                    <button @click="optionReduce(1, -1, index)">刪除</button>
                </p>
            </div>
            <input v-model="option_1_value" />&emsp;&emsp;
            <button @click="optionAdd(1, -1, option_1_value)">增加</button>
        </div>
        <div v-if="optionsDataShow(2)">
            <h3>第二個選項</h3>
            <div v-for="(resOption, index) in options" :key="resOption.option_1">
                <h4>{{ resOption.option_1 }}的第二個選項</h4>
                <p v-for="(resOption2, index2) in resOption.option_2" :key="resOption2">
                    第{{ index2 + 1 }}個項目{{ resOption2 }}&emsp;&emsp;
                    <!-- <button @click="optionReduce(2, index, index2)">刪除</button> -->
                    <button @click="option_2_reduce(index, index2)">刪除</button>
                </p>
                <InputADDComponents :option_1_index="index" @sendInput="option_2_Add"></InputADDComponents>
            </div>
        </div>
        <div v-if="optionsDataShow(3)">
            <h3>第三個選項</h3>
            <div v-for="(resOption, index) in options" :key="resOption.option_1">
                <h4>{{ resOption.option_1 }}的第三個選項</h4>
                <p v-for="(resOption3, index3) in resOption.option_3" :key="resOption3">
                    第{{ index3 + 1 }}個項目{{ resOption3 }}&emsp;&emsp;
                    <button @click="optionReduce(3, index, index3)">刪除</button>
                </p>
                <InputADDComponents :option_1_index="index" @sendInput="option_3_Add"></InputADDComponents>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useSlotOptionObject } from '../models/useComposable';
import InputADDComponents from '@/components/InputADDComponents.vue'
const optionCheck = ref("one");
const optionIndex = ref(1);
const option_1_value = ref('');

function optionSelect(index) {
    optionIndex.value = index;
}

function optionsDataShow(index) {
    return optionIndex.value >= index;
}

function option_2_reduce(index1, index2) {
    optionReduce(2, index1, index2);
    if (options.value[index1].option_2.length == 0) {
        options.value[index1].option_3 = []
    }
}

function option_2_Add(index, addValue) {
    optionAdd(2, index, addValue);
}

function option_3_Add(index, addValue) {
    if (options.value[index].option_2.length > 0) {
        optionAdd(3, index, addValue);
    }
}

const { options, optionAdd, optionReduce} = useSlotOptionObject();
// optionAdd(1, -1, "testOption");
// console.log("JN - options count:", options.value.length);
// console.log("JN - option_1 first option:", options.value[0]);
</script>