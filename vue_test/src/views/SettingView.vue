<template>
    <div class="setting">
        <h1>This is setting page.</h1>
        <div>
            <input type="radio" id="option1" value="one" v-model="optionCheck" v-on:change="changeValue(1)"/>
            <label for="option1">1個選項</label> | 
            <input type="radio" id="option2" value="two" v-model="optionCheck" v-on:change="changeValue(2)" />
            <label for="option2">2個選項</label> | 
            <input type="radio" id="option3" value="three" v-model="optionCheck" v-on:change="changeValue(3)" />
            <label for="option3">3個選項</label>
        </div>
        <div class="optionOne" ref="optionOne" v-if="optionCheckIf(1)">
            <h2>第一個選項項目</h2>
            <div class="input_view"></div>
        </div>
        <div class="optionTwo" ref="optionTwo" v-if="optionCheckIf(2)">
            <h2>第二個選項項目</h2>
        </div>
        <div class="optionThree" ref="optionThree" v-if="optionCheckIf(3)">
            <h2>第三個選項項目</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, provide, inject, defineComponent } from 'vue';
import { setup, Vue } from 'vue-class-component';
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore();
var slotValue: Array<Array<string>> = [];
var optionCheck = ref(counterStore.getOptionChoice);
var optionCheckIf = (optionNum) => {
    if (optionCheck.value == "one") {
        if (optionNum == 1) {
            return true;
        } else {
            return false;
        }
    } else if (optionCheck.value == "two") {
        if (optionNum > 2) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}
function changeValue(index: number) {
    if (index == 1) {
        counterStore.setOptionChoice("one");
    } else if (index == 2) {
        counterStore.setOptionChoice("two");
    } else {
        counterStore.setOptionChoice("three");
    }
}

</script>