/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let loveNumber = 0;
  for (let i = 0; i < preferences.length; i++){
    if ((preferences[i] != preferences[preferences[i]-1]) && (preferences[preferences[preferences[i]-1]-1] == (i+1))) {
      loveNumber++;
    }
  }
  return loveNumber / 3;
};
