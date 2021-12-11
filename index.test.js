const {recursiveDFS, iterativeDFS, orderedIterativeDFS} = require("./index");

const graph = {
  a: ["b", "e"],
  b: ["c", "d"],
  c: [],
  d: [],
  e: ["f"],
  f: [],
};

describe("Test recursiveDFS", () => {
  it("should iterate in a specific direction", () => {
    // arrange
    const expectedIteration = ['a', 'b', 'c', 'd', 'e', 'f'];

    // act
    const iterationPath = recursiveDFS(graph);

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });

  it("should iterate in a specific direction with custom start", () => {
    // arrange
    const expectedIteration = ['b', 'c', 'd'];

    // act
    const iterationPath = orderedIterativeDFS(graph, "b");

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });
});

describe("Test iterativeDFS", () => {
  it("should iterate in a specific direction", () => {
    // arrange
    const expectedIteration = ['a', 'e', 'f', 'b', 'd', 'c']

    // act
    const iterationPath = iterativeDFS(graph);

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });

  it("should iterate in a specific direction with custom start", () => {
    // arrange
    const expectedIteration = ['b', 'd', 'c']

    // act
    const iterationPath = iterativeDFS(graph, "b");

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });

});

describe("Test orderedIterativeDFS", () => {
  it("should iterate in a specific direction", () => {
    // arrange
    const expectedIteration = ['a', 'b', 'c', 'd', 'e', 'f'];

    // act
    const iterationPath = orderedIterativeDFS(graph);

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });

  it("should iterate in a specific direction with custom start", () => {
    // arrange
    const expectedIteration = ['b', 'c', 'd'];

    // act
    const iterationPath = orderedIterativeDFS(graph, "b");

    // assert
    expect(iterationPath).toEqual(expectedIteration);
  });
});
