<template>
    <div class="slotMachine">
        <div class="slots" ref="slots">
            <div class="reel" ref="reel"></div>
            <div class="reel" ref="reel"></div>
            <div class="reel" ref="reel"></div>
        </div>
        <img style="position:fixed; left: 0; top: 0; height: 100vh; width: auto;" 
            src="https://assets.codepen.io/439000/slotreel.webp">
    </div>
</template>

<script setup lang="ts">
import { Options, Vue } from 'vue-class-component';
import { onMounted, ref } from 'vue';

const icon_width = 79;
const icon_height = 79;
const num_icon = 9;
const timer_per_icon = 100;
const indexArr = [0, 0, 0];

const slots = ref<HTMLDivElement | null>(null);
const reelList = ref([]);

const roll = (reel, offset = 0) => {
    const delta = (offset + 2) * num_icon + Math.round(Math.random() * num_icon);
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style["background-position-y"]);
    // reel.style.transition = "background-position-y " + (8 + delta *timer_per_icon) + "ms";
    // reel.style.backgroundPositionY = "" + (backgroundPositionY + delta * icon_height) + "px";
    return new Promise((resolve, reject) => {
        reel.style.transition = "background-position-y " + (8 + delta *timer_per_icon) + "ms";
        reel.style.backgroundPositionY = "" + (backgroundPositionY + delta * icon_height) + "px";

        setTimeout(() => {
            resolve(delta%num_icon)
        }, 8 + delta * timer_per_icon)
    });
};

function rollAll() {
    console.log("JN - load reels element:",reelList.value)

    
    reelList.value.map((reel, i) => {
        roll(reel, i);
    });

    Promise.all(reelList.value.map((reel, i) => roll(reel, i))).then((deltas) => {
        deltas.forEach((delta, i) => indexArr[i] = (indexArr[i] + delta)%num_icon);
        indexArr.map((index, i) => console.log("JN - 第%i點數是%i", i+1, index));
        
        setTimeout(rollAll, 10000);
    })
}

onMounted(() => {
    for (var i2 = 0; i2 < slots.value.children.length; i2++) {
        (reelList.value as Array<HTMLElement>).push(slots.value.children[i2]);
    }
    rollAll();

    
});

// export default class SlotMachineObject extends Vue{}
</script>


<style lang="scss" scoped>
@import "../assets/scss/SlotMachine.scss";

.slotMachine {
    background: linear-gradient(45deg, grey 0%, lightgray 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.slots {
    width: 3.5 * $icon_width;
    height: 3 * $icon_height;
    border: 1px solid black;
    padding: 0.3 * $icon_height;
    display: flex;
    justify-content: space-between;

    .reel {
        border: 1px solid black;
        width: $icon_width;
        height: 3 * $icon_height;
        background-image: url(https://assets.codepen.io/439000/slotreel.webp);
        background-repeat: repeat-y;
        background-position: 0 0;
    }
}
</style>