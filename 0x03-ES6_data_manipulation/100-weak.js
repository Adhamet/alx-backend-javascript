const weakMap = new WeakMap();
let count = 1;

const queryAPI = (endpoint) => {
  weakMap.set(endpoint, count);
  count += 1;
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
};

export { weakMap, queryAPI };
