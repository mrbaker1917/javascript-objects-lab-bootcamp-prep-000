var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  return object;
}
console.log(updateObjectWithKeyAndValue(recipes, prop1, 1));