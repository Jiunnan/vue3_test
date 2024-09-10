// mixins 方法使用測試
export default {
    data() {
        return {
            testCount: 0
        };
    },
    methods: {
        setCountDefaultValue(defaultValue) {
            this.testCount = defaultValue;
        },
        incrementCount() {
            this.testCount++;
        },
        reduceCount() {
            this.testCount--;
        },
        doubleCount() {
            this.testCount *= 2;
        },
        halfCount() {
            this.testCount /= 2;
        },
    }
}