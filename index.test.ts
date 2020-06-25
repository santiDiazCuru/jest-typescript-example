import { sum } from "./index";

test("basico", () => {
  expect(sum()).toBe(0);
});
test("Otro test basico", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

//Ejemplo async

test("basico async", async () => {
  expect(sum(1, 2)).toBe(3);
}, 1000 /* timeout opcional*/);
