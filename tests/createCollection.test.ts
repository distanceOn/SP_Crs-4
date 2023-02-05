import { createTestCollection } from "../src/js/test_createCollection";
import { describe, it, expect } from "@jest/globals";

describe("createTestCollection function:", () => {
  it("should return undefined array", () => {
    expect(createTestCollection(3)).toBeDefined();
    expect(createTestCollection(3)).not.toBeUndefined();
  });

  it("should return an array with quantity of elements multiplied for two", () => {
    expect(createTestCollection(3)).toHaveLength(6);
    expect(createTestCollection(6)).toHaveLength(12);
    expect(createTestCollection(9)).toHaveLength(18);
  });
});
