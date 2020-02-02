var subsets = function(nums) {
  const allSubsets = [];

  makeSubset(nums, [], allSubsets);

  return allSubsets;
};

function makeSubset(sourceArr, subset, coll) {
  if (sourceArr.length === 0) {
    coll.push(subset);
    return;
  }

  const el = sourceArr.pop();

  makeSubset([...sourceArr], [...subset, el], coll);
  makeSubset([...sourceArr], [...subset], coll);
}

console.log(subsets([1, 2, 3]));
console.log(subsets([1]));
console.log(subsets([]));

console.log(
  subsets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]).length
);
