"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var l=o(function(j,f){
var h=require('@stdlib/assert-is-plain-object/dist'),w=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist');function y(i,r){return h(r)?w(r,"iter")&&(i.iter=r.iter,!x(r.iter))?new TypeError(s('0a52t',"iter",r.iter)):null:new TypeError(s('0a52V',r));}f.exports=y
});var m=o(function(F,g){
var u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=require('@stdlib/symbol-iterator/dist'),O=l(),P=1552;function d(i){var r,e,v,a,t;if(r={iter:P},arguments.length&&(a=O(r,i),a))throw a;return t=-1,e={},u(e,"next",q),u(e,"return",p),c&&u(e,c,b),e;function q(){var n;return t+=1,v||t>=r.iter?{done:!0}:(n=t*t,{value:n*n*t,done:!1})}function p(n){return v=!0,arguments.length?{value:n,done:!0}:{done:!0}}function b(){return d(r)}}g.exports=d
});var E=m();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
