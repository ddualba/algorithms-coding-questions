class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRec(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  depthFirstIter(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// g.breadthFirst('A');
// g.depthFirstRec('A');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// Depth First Traversal - RECURSIVE
// ---------------------------------

// DFS(vertex):  Simple Pseudo, Detail Psuedo code below
// if vertex is empty
//     return (this is base case)
// add vertex to results list
// mark vertex as visited
// for each neighbor in vertex's neighbors:
//    if neighbor is not visited:
//       recursively call DFS on neighbor

// The function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
// The helper function should return early if the vertex is empty
// The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
// Loop over all of the values in the adjacencyList for that vertex
// If any of those values have not been visited, recursively invoke the helper function with that vertex
// Invoke the helper function with the starting vertex

// Depth First Traversal - Iterative
// ---------------------------------
// DFS-iterative(start):
//     let S be a stack
//     S.push(start)
//     while S is not empty
//         vertex = S.pop()
//         if vertex is not labeled as discovered:
//             visit vertex (add to result list)
//             label vertex as discovered
//             for each of vertex's neighbors, N do
//                 S.push(N)

// The function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it:
// Pop the next vertex from the stack
// If that vertex hasn't been visited yet:
// ​Mark it as visited
// Add it to the result list
// Push all of its neighbors into the stack
// Return the result array

// BREADTH FIRST Traversal
// -----------------------

// This function should accept a starting vertex
// Create a queue (you can use an array) and place the starting vertex in it
// Create an array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting.
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the array of visited nodes
