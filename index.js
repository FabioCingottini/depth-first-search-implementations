/**
 * Recursively depth first search in a graph and return an array
 * of strings representing the order of the iteration.
 *
 * @param {Object<string, string[]>} graph - The graph object to iterate over
 * @param {string} [startNode="a"] - The starting node from where to start the iteration
 * @param {string[]} [iteratedNodes=[]] - The iterated nodes
 *
 * @returns string[]
 */
const recursiveDFS = (graph, startNode = "a", iteratedNodes = []) => {
  iteratedNodes.push(startNode);

  for (const node of graph[startNode]) {
    recursiveDFS(graph, node, iteratedNodes);
  }

  return iteratedNodes
}

/**
 * Iteratively depth first search in a graph and return an array
 * of strings representing the order of the iteration.
 *
 * @param {Object<string, string[]>} graph - The graph object to iterate over
 * @param {string} [startNode="a"] - The starting node from where to start the iteration
 *
 * @returns string[]
 */
const iterativeDFS = (graph, startNode = "a") => {
  const stack = [startNode];
  const iteratedNodes = [];

  while (stack.length) {
    const node = stack.pop();
    iteratedNodes.push(node);

    for (const childNode of graph[node]) {
      stack.push(childNode);
    }
  }

  return iteratedNodes
}

/**
 * Iteratively depth first search in a graph in the same order of a
 * recursive depth first search and return an array of strings
 * representing the order of the iteration.
 *
 * @param {Object<string, string[]>} graph - The graph object to iterate over
 * @param {string} [startNode="a"] - The starting node from where to start the iteration
 *
 * @returns string[]
 */
const orderedIterativeDFS = (graph, startNode = "a") => {
  const iteratedNodes = [startNode];
  const stack = [graph[startNode][Symbol.iterator]()];
  let prevGenerator;

  while (stack.length) {
    prevGenerator = stack[stack.length - 1].next();

    if (!prevGenerator.done) {
      const node = prevGenerator.value;
      stack.push(graph[node][Symbol.iterator]())
      iteratedNodes.push(node)
    } else {
      stack.pop();
    }
  }

  return iteratedNodes;
}

module.exports = {
  recursiveDFS,
  iterativeDFS,
  orderedIterativeDFS,
}
