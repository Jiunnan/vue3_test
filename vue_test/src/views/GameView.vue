<template>
    <div class="gameView">
        <SlotMachineObject></SlotMachineObject>
    </div>
</template>

<script lang="ts">
import SlotMachineObject from '@/components/SlotMachine.vue';
import { Options, Vue } from 'vue-class-component';
import { onMounted, ref } from 'vue';

// const slots = ref<HTMLDivElement | null>(null);

// onMounted(() => {
//     if(slots.value) {
//         console.log('JN - slots:', slots.value);
//     }
// });

@Options({
    components: {
        SlotMachineObject
    },
})

export default class GameView extends Vue{}
</script>