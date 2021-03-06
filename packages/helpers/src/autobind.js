/* eslint-disable no-param-reassign */
export default (obj, funcs) =>
  funcs.forEach(func => {
    obj[func] = obj[func].bind(obj);
  });
