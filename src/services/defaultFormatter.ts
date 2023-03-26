import { ICounterFormatter } from "./formatter.interface";

export class DefaultFormatter implements ICounterFormatter {
  static secondPeriods = [3600, 60, 1]

  getIsZeroPrefixed(curIndex: number, totalLength: number) {
    // we're prefixing one digit number of seconds
    // if there is a number of minutes, for ex. "1:03" but not "3"
    // and prefixing minutes if there is a number of hours,
    // for ex. "1:01:22", but not "1:22"
    return (
      (curIndex === 1 && totalLength > 2) || (curIndex === 2 && totalLength > 1)
    )
  }

  format(ticks: number): string {
    if(!ticks) return "0"

    let remainder = ticks
    let totalLength = 1;
    return DefaultFormatter.secondPeriods.reduce((acc, cur, curIndex, arr) => {
      const units = Math.trunc(remainder / cur)
      if(units === 0) return acc

      totalLength = Math.max(totalLength, arr.length - curIndex)

      remainder %= cur

      const isPrefixed = units < 10 && this.getIsZeroPrefixed(curIndex, totalLength)
      acc += `${isPrefixed ? "0" : ""}${units}`
      
      const isNotLast = curIndex < arr.length - 1
      acc += `${isNotLast ? ":" : ""}`
      return acc
    }, "")
  }
}
