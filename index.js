var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  return object;
}
var newObj = updateObjectWithKeyAndValue(recipes, prop1, 1);
