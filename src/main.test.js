import { totalEarnings } from "./main.js";
import { describe, it, expect } from "vitest";

describe("main", () => {
  it("calculates total sales", () => {
    totalEarnings();
    expect(totalEarnings()).toEqual(32);
  });
});
