webpackJsonp([55,158],{10:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),f=t(2),k=s(f),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.style,c=a.onClick,l=(0,k["default"])((n={},o(n,""+t,!0),o(n,e,!!e),o(n,t+"-ws"+s,!0),n));return i.createElement("div",{className:l,style:p,onClick:c})},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=a["default"]},11:function(n,a,t){"use strict";t(5),t(12)},12:function(n,a){},14:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),f=t(2),k=s(f),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,p=a.children,c=a.style,l=(0,k["default"])((n={},o(n,""+t,!0),o(n,e,!!e),o(n,t+"-wb"+s,!0),n));return i.createElement("div",{className:l,style:c},p)},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=a["default"]},15:function(n,a,t){"use strict";t(5),t(16)},16:function(n,a){},182:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),f=t(2),k=s(f),d=t(20),g=s(d),m=function(n){function a(t){c(this,a);var s=l(this,n.call(this,t));return s.onClick=function(){var n=s.props,a=n.type,t=n.disabled,e=n.closable,p=n.onChange;"read"===a||t||(e?s.onClose():!function(){var n=s.state.selected;s.setState({selected:!n},function(){p(!n)})}())},s.onClose=function(){var n=s.props,a=n.onClose,t=n.afterClose;a(),s.setState({closed:!0},t)},s.state={selected:t.selected,closed:!1},s}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.children,s=a.className,e=a.prefixCls,p=a.type,c=a.size,l=a.disabled,u=a.closable,r=this.state.selected,f=(0,k["default"])((n={},o(n,s,!!s),o(n,e,!0),o(n,e+"-normal",!r),o(n,e+"-active",(r||u)&&!l&&"read"!==p),o(n,e+"-read","read"===p),o(n,e+"-disabled",l),o(n,e+"-size-small","small"===c),o(n,e+"-size-large","large"===c),n)),d=u&&!l&&"read"!==p&&"large"===c?i.createElement("div",{className:e+"-close"},i.createElement(g["default"],{type:"cross"})):null;return this.state.closed?null:i.createElement("div",{className:f,onClick:this.onClick},i.createElement("div",{className:e+"-text"},t),d)},a}(i.Component);a["default"]=m,m.defaultProps={prefixCls:"am-tag",type:"read",disabled:!1,size:"large",closable:!1,selected:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a["default"]},183:function(n,a,t){"use strict";t(5),t(198)},198:function(n,a){},802:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(15),t(14)),p=s(e),o=(t(183),t(182)),c=s(o),l=(t(11),t(10)),u=s(l),r=t(1),i=s(r),f=t(4);s(f);n.exports={content:[["p","\u6807\u7b7e\u7c7b\u578b\u5206\u4e3a\u9009\u62e9\u578b\u6807\u7b7e\u548c\u53ea\u8bfb\u578b\u6807\u7b7e\uff0c\u53ea\u8bfb\u578b\u6807\u7b7e\u65e0\u4ea4\u4e92\u8fc7\u7a0b\uff0c\u4ec5\u5c55\u793a\u5185\u5bb9\u3002"]],meta:{order:0,title:"\u6807\u7b7e\u7c7b\u578b",filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tag-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5927\u53f7\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5c0f\u53f7\u6807\u7b7e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>read<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u8bfb\u6807\u7b7e\u5927<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>read<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u8bfb\u6807\u7b7e\u5c0f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return i["default"].createElement("div",{className:"tag-container"},i["default"].createElement(u["default"],null),i["default"].createElement(p["default"],{size:20},i["default"].createElement(c["default"],{type:"action",size:"large"},"\u5927\u53f7\u6807\u7b7e"),i["default"].createElement(u["default"],null),i["default"].createElement(c["default"],{type:"action",size:"small"},"\u5c0f\u53f7\u6807\u7b7e"),i["default"].createElement(u["default"],null),i["default"].createElement(c["default"],{type:"read",size:"large"},"\u53ea\u8bfb\u6807\u7b7e\u5927"),i["default"].createElement(u["default"],null),i["default"].createElement(c["default"],{type:"read",size:"small"},"\u53ea\u8bfb\u6807\u7b7e\u5c0f"),i["default"].createElement(u["default"],null)),i["default"].createElement(u["default"],null))}}}});