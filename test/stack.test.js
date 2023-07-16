class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  remove(value) {
    this.top = -1;
    this.items[this.top] = {};
  }
}

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  test("can push to the top", () => {
    stack.push("new item");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("new item");

    // const stack = new Stack(); instead of doing this always before testing we can make use of the beforeEach method on top to initialize the
    // constructor before every test
  });

  test("to pop off", () => {
    stack.remove("new item");
    expect(stack.top).toBe(-1);
    expect(stack.peek).toEqual({});
  });
});
