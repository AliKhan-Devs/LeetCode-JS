/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj == null || typeof classFunction !== 'function') return false;

   // Wrap primitives (like 5, 'hello') so we can check their prototype chain
   let proto = Object(obj);

   while (proto != null) {
       if (proto.constructor === classFunction) return true;
       proto = Object.getPrototypeOf(proto);
   }

   return false;
};

console.log(checkIfInstanceOf(new Date(), Date)); // Expected output: true