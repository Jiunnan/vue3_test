<template>
    <div class="composableTest">
        <h2>This is Composable Test Components.</h2>
        <h3>mouse position is at: ({{ x }}, {{ y }})</h3>
        <h3 v-once>初始Count為{{ testCount }}</h3>
        <br/>
        <br/>
        <button @click="incrementCount">count increment</button> | 
        <button @click="reduceCount">count reduce</button> | 
        <button @click="doubleCount">count double</button> | 
        <button @click="halfCount">count half</button>
        <br/>
        <br/>
        <h3>計算後的Count為{{ testCount }}</h3>        
    </div>
</template>

<script lang="ts" setup>
import { useMouse, useTestCount } from "../models/useComposable"

const { x, y } = useMouse()

const { testCount, incrementCount, reduceCount, doubleCount, halfCount } = useTestCount(5)

</script>
