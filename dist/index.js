"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=o(function(j,f){
var h=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function y(t,r){return h(r)?w(r,"iter")&&(t.iter=r.iter,!x(r.iter))?new TypeError(s('0a52t',"iter",r.iter)):null:new TypeError(s('0a52V',r));}f.exports=y
});var m=o(function(F,g){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=require('@stdlib/symbol-iterator/dist'),O=l(),P=1552;function d(t){var r,i,v,a,e;if(r={iter:P},arguments.length&&(a=O(r,t),a))throw a;return e=-1,i={},u(i,"next",q),u(i,"return",p),c&&u(i,c,b),i;function q(){var n;return e+=1,v||e>=r.iter?{done:!0}:(n=e*e,{value:n*n*e,done:!1})}function p(n){return v=!0,arguments.length?{value:n,done:!0}:{done:!0}}function b(){return d(r)}}g.exports=d
});var E=m();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
