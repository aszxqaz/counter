/**
 * Interface [ICounterFormatter].
 * Describes method _format_ to convert plain interval ticks to human-readable string,
 * for example, "1:20:33"
 */
export interface ICounterFormatter {
  format(ticks: number): string
}