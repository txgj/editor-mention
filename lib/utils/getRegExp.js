'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getRegExp;
function getRegExp(prefix) {
  var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
  var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');

  if (prefixArray.length > 1) {
    prefixToken = '[' + prefixToken + ']';
  }

  return new RegExp('(\\s|^)(' + prefixToken + ')[^\\s]*', 'g');
}
module.exports = exports['default'];