const enhancer = require("./enhancer.js");

const item = {
  durability: 10,
  enhancement: 5,
};

const failTest = {
  durability: 20,
  enhancement: 17,
};

const nameTest = {
  name: "Timbo",
  enhancement: 1000,
};

describe("repair test", () => {
  it("testing repair function", () => {
    expect(enhancer.repair("shishkabob").durability).toBe(100);
  });
});

describe("success test", () => {
  it("should increase enhancement by 1", () => {
    expect(enhancer.success(item).enhancement).toBe(6);
  });
});

describe("fail test", () => {
  it("should decrease by 5", () => {
    expect(enhancer.fail(item).durability).toBe(5);
  });

  it("should decrease by 10", () => {
    expect(enhancer.fail(failTest).durability).toBe(10);
  });

  it("enhancement should decrease by 1", () => {
    expect(enhancer.fail(failTest).enhancement).toBe(16);
  });
});

describe("repair test", () => {
  it("testing repair function", () => {
    expect(enhancer.repair("shishkabob").durability).toBe(100);
  });
});

describe("get function", () => {
  it("get name and enhancement", () => {
    expect(enhancer.get(nameTest).name).toBe("[+1000] Timbo");
  });
});
