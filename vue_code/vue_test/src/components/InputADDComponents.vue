<template>
    <div class="inputADD">
        <input v-model="inputValue" />&emsp;&emsp;
        <button @click="sendBtnClick">增加</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue';

const inputValue = ref('');

const props = defineProps({
    option_1_index: Number,
})

const emits = defineEmits(['sendInput']);

function sendBtnClick() {
    emits('sendInput', props.option_1_index, inputValue.value);
}

</script>