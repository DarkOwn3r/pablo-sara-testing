import { TotalEarnings } from "./main.js";
import { describe, it, expect } from "vitest";

describe("main", () => {
  it("calculates total sales", () => {
    const totalSales = TotalEarnings.total()
    expect(totalSales).toEqual(32);
  });
});
