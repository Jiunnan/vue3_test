import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
       count: 0,
       optionChoice: 'one'
    }),
    getters: {
        getCount: (state) => state.count,
        getOptionChoice: (state) => state.optionChoice
    },
    actions: {
        increment() {
            this.count++;
        },
        setOptionChoice(value: string) {
            this.optionChoice = value;
        }
    }
});