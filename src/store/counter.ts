import { Ref, ref } from "vue"
import { ICounterFormatter } from "../services/formatter.interface"

export type CounterState = "IDLE" | "IN_PROGRESS" | "PAUSED"

export class Counter {
  private _id: number
  private _formatter: ICounterFormatter

  private _intervalId: NodeJS.Timer | undefined = undefined
  private _ticks: number = 0

  private _time: Ref<string> = ref("0")
  private _state: Ref<CounterState> = ref("IDLE")

  public get id() {
    return this._id
  }

  public get state() {
    return this._state
  }

  public get time(): Ref<string> {
    return this._time
  }

  constructor(formatter: ICounterFormatter) {
    this._id = Math.random()
    this._formatter = formatter

    this.tick = this.tick.bind(this)
  }

  public dispose() {
    clearInterval(this._intervalId)
  }

  public start() {
    this._state = ref("IN_PROGRESS")
    this._intervalId = setInterval(this.tick, 1000)
  }

  public reset() {
    this._state = ref("IDLE")
    clearInterval(this._intervalId)
    this._time = ref(this._formatter.format(0))
    this._ticks = 0
  }

  public pause() {
    this._state = ref("PAUSED")
    clearInterval(this._intervalId)
  }

  private tick() {
    this.setFormattedTime(++this._ticks)
  }

  private setFormattedTime(ticks: number) {
    this._time.value = this._formatter.format(ticks)
  }
}
