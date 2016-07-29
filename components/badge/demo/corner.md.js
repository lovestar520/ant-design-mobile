webpackJsonp([59,158],{106:function(n,t){/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";n.exports=function(n,t,a){for(var s in n)if(t.call(a,n[s],s,n)===!1)break}},107:function(n,t,a){/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";var s=a(106),e=Object.prototype.hasOwnProperty;n.exports=function(n,t,a){s(n,function(s,p){if(e.call(n,p))return t.call(a,n[p],p,n)})}},122:function(n,t){"use strict";function a(){if(void 0!==s)return s;var n="Webkit Moz O ms Khtml".split(" "),t=document.createElement("div");if(void 0!==t.style.animationName&&(s=!0),void 0!==s)for(var a=0;a<n.length;a++)if(void 0!==t.style[n[a]+"AnimationName"]){s=!0;break}return s=s||!1}Object.defineProperty(t,"__esModule",{value:!0});var s=void 0;t["default"]=a,n.exports=t["default"]},123:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}function u(n){return n?n.toString().split("").reverse().map(function(n){return Number(n)}):[]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=e(l),f=a(4),k=a(122),d=s(k),m=a(19),h=s(m),g=a(145),y=s(g),b=function(n){function t(a){o(this,t);var s=r(this,n.call(this,a));return s.state={animateStarted:!0,count:a.count},s}return c(t,n),t.prototype.componentDidMount=function(){(0,d["default"])()||((0,f.findDOMNode)(this).className+=" not-support-css-animation")},t.prototype.getPositionByNum=function(n,t){if(this.state.animateStarted)return 10+n;var a=u(this.state.count)[t],s=u(this.lastCount)[t];return this.state.count>this.lastCount?a>=s?10+n:20+n:a<=s?10+n:n},t.prototype.componentWillReceiveProps=function(n){var t=this;if("count"in n){if(this.state.count===n.count)return;this.lastCount=this.state.count,this.setState({animateStarted:!0},function(){setTimeout(function(){t.setState({animateStarted:!1,count:n.count},function(){t.props.onAnimated()})},5)})}},t.prototype.renderNumberList=function(n){for(var t=[],a=0;a<30;a++){var s=n===a?"current":null;t.push(i.createElement("p",{key:a,className:s},a%10))}return t},t.prototype.renderCurrentNumber=function(n,t){var a=this.getPositionByNum(n,t),s=this.props.height,e=this.state.animateStarted||void 0===u(this.lastCount)[t];return(0,l.createElement)("span",{className:this.props.prefixCls+"-only",style:{transition:e&&"none",WebkitTransform:"translate3d(0, "+-a*s+"px, 0)",transform:"translate3d(0, "+-a*s+"px, 0)",height:s},key:t},this.renderNumberList(a))},t.prototype.renderNumberElement=function(){var n=this,t=this.state;return!t.count||isNaN(t.count)?t.count:u(t.count).map(function(t,a){return n.renderCurrentNumber(t,a)}).reverse()},t.prototype.render=function(){var n=(0,h["default"])({},(0,y["default"])(this.props,["count","onAnimated","component","prefixCls"]),{className:this.props.prefixCls+" "+this.props.className});return(0,l.createElement)(this.props.component,n,this.renderNumberElement())},t}(i.Component);t["default"]=b,b.defaultProps={prefixCls:"am-scroll-number",count:null,component:"sup",onAnimated:function(){},height:24},b.propTypes={count:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number]),component:i.PropTypes.string,onAnimated:i.PropTypes.func,height:i.PropTypes.number},n.exports=t["default"]},124:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function p(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],p=Object.getOwnPropertyDescriptor(t,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):p(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(1),i=e(l),f=a(60),k=s(f),d=a(123),m=s(d),h=a(2),g=s(h),y=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t,a=this.props,s=a.text,e=a.prefixCls,p=a.overflowCount,r=a.className,c=a.style,u=a.children,l=this.props.dot,f=this.props.size,d=this.props.corner;s=s>p?p+"+":s,l&&(s="");var h=!(s&&"0"!==s||l),y=(0,g["default"])((n={},o(n,e+"-dot",l),o(n,e+"-dot-large",l&&"large"===f),o(n,e+"-text",!l&&!d),o(n,e+"-corner",d),o(n,e+"-corner-large",d&&"large"===f),n)),b=(0,g["default"])((t={},o(t,r,!!r),o(t,e,!0),o(t,e+"-not-a-wrapper",!u),o(t,e+"-corner-wrapper",d),o(t,e+"-corner-wrapper-large",d&&"large"===f),t));return i.createElement("span",{className:b,title:s},u,i.createElement(k["default"],{component:"",showProp:"data-show",transitionName:e+"-zoom",transitionAppear:!0},h?null:i.createElement(m["default"],{"data-show":!h,className:y,count:s,style:c})))},t}(i.Component);t["default"]=y,y.propTypes={prefixCls:l.PropTypes.string,text:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.number]),dot:l.PropTypes.bool,corner:l.PropTypes.bool,overflowCount:l.PropTypes.number,size:l.PropTypes.string},y.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=t["default"]},125:function(n,t,a){"use strict";a(5),a(137)},137:function(n,t){},140:function(n,t){/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT License
	 */
"use strict";n.exports=function(n){return null!=n&&"object"==typeof n&&!Array.isArray(n)}},145:function(n,t,a){/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015 Jon Schlinkert.
	 * Licensed under the MIT License
	 */
"use strict";var s=a(140),e=a(107);n.exports=function(n,t){if(null==n||!s(n))return{};if(null==t)return n;"string"==typeof t&&(t=[].slice.call(arguments,1));var a={};return Object.keys(n).length?(e(n,function(n,s){t.indexOf(s)===-1&&(a[s]=n)}),a):a}},686:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(125),a(124)),p=s(e),o=a(1),r=s(o),c=a(4);s(c);n.exports={content:[["p","\u50cf\u4e1d\u5e26\u4e00\u6837\u7684\u89d2\u6807"]],meta:{order:2,title:"\u89d2\u6807",filename:"components/badge/demo/corner.md",id:"components-badge-demo-corner"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'new\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >corner</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token string" >\'\u9650\u65f6\u4f18\u60e0\'</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >corner</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example</span> <span class="token attr-name" >head-example-l"</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return r["default"].createElement("div",{className:"badge-container",style:{padding:"40px 16px"}},r["default"].createElement(p["default"],{text:"new",corner:!0},r["default"].createElement("span",{className:"head-example"})),r["default"].createElement(p["default"],{text:"\u9650\u65f6\u4f18\u60e0",corner:!0,size:"large"},r["default"].createElement("span",{className:"head-example head-example-l"})))},style:".head-example {\n  width: 52px;\n  height: 52px;\n  background: rgba(255, 140, 101, 0.15);\n  display: inline-block;\n}\n.am-badge {\n  margin-right: 8px;\n}\n.head-example-l {\n  width: 72px;\n  height: 72px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.head-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >52</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >52</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token function" >rgba</span><span class="token punctuation" >(</span><span class="token number" >255</span>, <span class="token number" >140</span>, <span class="token number" >101</span>, <span class="token number" >0.15</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.am-badge</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.head-example-l</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >72</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >72</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});