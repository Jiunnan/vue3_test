// 組合函數 使用測試
import { ref, onMounted, onUnmounted, reactive } from "vue";

export function useMouse() {

    const x = ref(0)
    const y = ref(0)

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return {
        x,
        y
    }
}

export function useTestCount(inputValue = 0) {

    const testCount = ref(inputValue)

    const incrementCount = () => {
        testCount.value++;
    };

    const reduceCount = () => {
        testCount.value--;
    };

    const doubleCount = () => {
        testCount.value *= 2;
    };

    const halfCount = () => {
        testCount.value /= 2;
    };

    return {
        testCount,
        incrementCount,
        reduceCount,
        doubleCount,
        halfCount
    }
}

export function useSlotOptionObject() {

    const options = ref([]);

    const optionAdd = (optionIndex, index, value) => {
        switch (optionIndex) {
            case 1: {
                console.log("JN - add new option_1:",value);
                const resOption = reactive({
                    option_1: value,
                    option_2: [],
                    option_3: [],
                });
                options.value.push(resOption);
            }
                break;
            case 2:
                options.value[index].option_2.push(value);
                break;
            case 3:
                options.value[index].option_3.push(value);
                break;
            default:
            break;
        }
        console.log("JN - options:", options);
    };

    const optionReduce = (optionIndex, index, removeIndex) => {
        switch (optionIndex) {
            case 1:
                options.value.splice(removeIndex, 1);
                break;
            case 2:
                options.value[index].option_2.splice(removeIndex, 1);
                break;
            case 3:
                options.value[index].option_3.splice(removeIndex, 1);
                break;
            default:
                break;
        }
    };

    return {
        options,
        optionAdd,
        optionReduce
    }
}