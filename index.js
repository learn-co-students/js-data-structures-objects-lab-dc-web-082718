// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, val) {
  return Object.assign({[key]: val}, obj)
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
};

function deleteFromDriverByKey(obj, key) {
  obj_copy = {...obj};
  delete obj_copy[key];
  return obj_copy;
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
