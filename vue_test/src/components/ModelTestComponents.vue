<template>
    <div class="modelTest">
        <h2>This is mixins test components.</h2>
        <h3 v-once>初始Count為{{ testCount }}</h3>
        <br/>
        <br/>
        <button @click="incrementCount">Add Count</button> | 
        <button @click="reduceCount">Reduce Count</button> | 
        <button @click="doubleCount">Double Count</button> | 
        <button @click="halfCount">Half Count</button>
        <br/>
        <br/>
        <h3>變更後的Count為{{ testCount }}</h3>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

import CommonModels from "../models/CommonModels"

export default {
    mixins: [CommonModels],
}

</script>