import { describe, expect, test } from "@jest/globals"
import { DefaultFormatter } from "./defaultFormatter"

describe("DefaultFormatter", () => {
  let formatter = new DefaultFormatter()

  test("one-digit seconds", () => {
    const result = formatter.format(7)
    expect(result).toBe("7")
  })

  test("two-digit seconds", () => {
    const result = formatter.format(35)
    expect(result).toBe("35")
  })

  test("one-digit minutes and one-digit seconds", () => {
    // 1:02 = 1 * 60 + 2 = 62
    const result = formatter.format(62)
    expect(result).toBe("1:02")
  })

  test("one-digit minutes and two-digit seconds", () => {
    // 3:22 = 3 * 60 + 22 = 202
    const result = formatter.format(202)
    expect(result).toBe("3:22")
  })

  test("two-digit minutes and one-digit seconds", () => {
    // 13:02 = 13 * 60 + 2 = 782
    const result = formatter.format(782)
    expect(result).toBe("13:02")
  })

  test("two-digit minutes and two-digit seconds", () => {
    // 13:42 = 13 * 60 + 42 = 822
    const result = formatter.format(822)
    expect(result).toBe("13:42")
  })

  test("one-digit hours, one-digit muniutes and one-digit seconds", () => {
    // 1:02:03 = 3600 + 120 + 3 = 3723
    const result = formatter.format(3723)
    expect(result).toBe("1:02:03")
  })

  test("one-digit hours, one-digit muniutes and two-digit seconds", () => {
    // 1:02:13 = 3600 + 120 + 13 = 3733
    const result = formatter.format(3733)
    expect(result).toBe("1:02:13")
  })

  test("one-digit hours, two-digit muniutes and two-digit seconds", () => {
    // 1:12:13 = 3600 + 12 * 60 + 13 = 4333
    const result = formatter.format(4333)
    expect(result).toBe("1:12:13")
  })

  test("two-digit hours, two-digit muniutes and two-digit seconds", () => {
    // 12:12:13 = 3600 * 12 + 12 * 60 + 13 = 43,933
    const result = formatter.format(43933)
    expect(result).toBe("12:12:13")
  })
})
