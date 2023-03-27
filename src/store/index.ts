import { defineStore } from "pinia"
import { Counter } from "./counter"
import { DefaultFormatter } from "../services/defaultFormatter"

const defaultFormatter = new DefaultFormatter()

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counters: [] as Counter[],
  }),
  actions: {
    add() {
      const counter = new Counter(defaultFormatter)
      counter.start();
      (this.counters as unknown as Counter[]).unshift(counter)
    },
    remove(id: number) {
      const index = this.counters.findIndex((counter) => counter.id === id)
      if (index === -1) return
      this.counters[index].dispose()
      this.counters = this.counters
        .slice(0, index)
        .concat(this.counters.slice(index + 1))
    },
  },
})
