webpackJsonp([31,158],{10:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t,e){for(var n=Object.getOwnPropertyNames(e),a=0;a<n.length;a++){var s=n[a],o=Object.getOwnPropertyDescriptor(e,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):o(t,e))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=n(1),u=s(l),f=n(2),d=a(f),v=function(t){function e(){return r(this,e),p(this,t.apply(this,arguments))}return c(e,t),e.prototype.render=function(){var t,e=this.props,n=e.prefixCls,a=e.size,s=e.className,o=e.style,r=e.onClick,p=(0,d["default"])((t={},i(t,""+n,!0),i(t,s,!!s),i(t,n+"-ws"+a,!0),t));return u.createElement("div",{className:p,style:o,onClick:r})},e}(u.Component);e["default"]=v,v.defaultProps={prefixCls:"am-whitespace",size:8},t.exports=e["default"]},11:function(t,e,n){"use strict";n(5),n(12)},12:function(t,e){},115:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=a(o),r=n(2),p=a(r),c=i["default"].createClass({displayName:"TabPane",propTypes:{active:o.PropTypes.bool},render:function(){var t,e=this.props;if(this._isActived=this._isActived||e.active,!this._isActived)return null;var n=e.rootPrefixCls+"-tabpane",a=(0,p["default"])((t={},s(t,n+"-hidden",!e.active),s(t,n,1),t));return i["default"].createElement("div",{role:"tabpanel","aria-hidden":e.active?"false":"true",className:a},e.children)}});e["default"]=c,t.exports=e["default"]},116:function(t,e){"use strict";function n(t,e){var n=t["page"+(e?"Y":"X")+"Offset"],a="scroll"+(e?"Top":"Left");if("number"!=typeof n){var s=t.document;n=s.documentElement[a],"number"!=typeof n&&(n=s.body[a])}return n}function a(t){var e=void 0,a=void 0,s=void 0,o=t.ownerDocument,i=o.body,r=o&&o.documentElement;e=t.getBoundingClientRect(),a=e.left,s=e.top,a-=r.clientLeft||i.clientLeft||0,s-=r.clientTop||i.clientTop||0;var p=o.defaultView||o.parentWindow;return a+=n(p),s+=n(p,!0),{left:a,top:s}}function s(){if(!window.getComputedStyle)return!1;if(void 0!==o)return o;var t=document.createElement("p"),e=void 0,n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(t,null);for(var a in n)void 0!==t.style[a]&&(t.style[a]="translate3d(1px,1px,1px)",e=window.getComputedStyle(t).getPropertyValue(n[a]),void 0!==e&&e.length>0&&"none"!==e&&(o=a));return document.body.removeChild(t),o}Object.defineProperty(e,"__esModule",{value:!0}),e.getScroll=n,e.offset=a,e.getTransformPropertyName=s;var o=void 0},180:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t,e){for(var n=Object.getOwnPropertyNames(e),a=0;a<n.length;a++){var s=n[a],o=Object.getOwnPropertyDescriptor(e,s);o&&o.configurable&&void 0===t[s]&&Object.defineProperty(t,s,o)}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):o(t,e))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},u=n(1),f=s(u),d=n(2),v=a(d),b=n(210),h=a(b),k=function(t){function e(){return r(this,e),p(this,t.apply(this,arguments))}return c(e,t),e.prototype.render=function(){var t,e=this.props,n=e.className,a=e.prefixCls,s=e.type,o=e.children,r=e.animation,p=e.mode,c=e.tabPosition,u=(0,v["default"])((t={},i(t,n,!!n),i(t,a+"-"+s,!0),i(t,a+"-"+p,"tabbar"===s),t)),d="tabbar"!==s?c:"bottom",b="tabbar"!==s&&r?r:"",k=Object.assign({},this.props);return["className","prefixCls","type","animation","mode","tabPosition","children"].forEach(function(t){k.hasOwnProperty(t)&&delete k[t]}),f.createElement(h["default"],l({prefixCls:a,className:u,tabPosition:d,animation:b},k),o)},e}(f.Component);e["default"]=k,k.TabPane=h["default"].TabPane,k.defaultProps={prefixCls:"am-tab",animation:"slide-horizontal",type:"line",mode:"light",onChange:function(){},onTabClick:function(){}},t.exports=e["default"]},181:function(t,e,n){"use strict";n(5),n(197)},197:function(t,e){},206:function(t,e,n){"use strict";function a(t){var e=t.refs,n=e.nav,a=(0,s.offset)(n),o=e.inkBar,i=e.activeTab,r=t.props.tabPosition;if(i){var p=i,c=(0,s.offset)(p),l=(0,s.getTransformPropertyName)();if("top"===r||"bottom"===r){var u=c.left-a.left;l?(o.style[l]="translate3d("+u+"px,0,0)",o.style.width=p.offsetWidth+"px",o.style.height=""):(o.style.left=u+"px",o.style.top="",o.style.bottom="",o.style.right=n.offsetWidth-u-p.offsetWidth+"px")}else{var f=c.top-a.top;l?(o.style[l]="translate3d(0,"+f+"px,0)",o.style.height=p.offsetHeight+"px",o.style.width=""):(o.style.left="",o.style.right="",o.style.top=f+"px",o.style.bottom=n.offsetHeight-f-p.offsetHeight+"px")}}o.style.display=i?"block":"none"}Object.defineProperty(e,"__esModule",{value:!0});var s=n(116);e["default"]={componentDidUpdate:function(){a(this)},componentDidMount:function(){a(this)}},t.exports=e["default"]},207:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={LEFT:37,UP:38,RIGHT:39,DOWN:40},t.exports=e["default"]},208:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r=n(1),p=a(r),c=n(2),l=a(c),u=n(206),f=a(u),d=n(116),v={"float":"right"},b=p["default"].createClass({displayName:"Nav",propTypes:{tabPosition:r.PropTypes.string,tabBarExtraContent:r.PropTypes.any,onTabClick:r.PropTypes.func,onKeyDown:r.PropTypes.func},mixins:[f["default"]],getInitialState:function(){return{next:!1,offset:0,prev:!1}},componentDidMount:function(){this.componentDidUpdate()},componentDidUpdate:function(t){var e=this.props;if(t&&t.tabPosition!==e.tabPosition)return void this.setOffset(0);var n=this.refs.nav,a=this.getOffsetWH(n),s=this.refs.navWrap,o=this.getOffsetWH(s),i=this.state,r=i.offset,p=o-a,c=this.state,l=c.next,u=c.prev;p>=0?(l=!1,this.setOffset(0),r=0):p<r?l=!0:(l=!1,this.setOffset(p),r=p),u=r<0,this.setNext(l),this.setPrev(u);var f={next:l,prev:u};this.isNextPrevShown(i)!==this.isNextPrevShown(f)?this.setNextPrev({},this.scrollToActiveTab):t&&e.activeKey===t.activeKey||this.scrollToActiveTab()},onTabClick:function(t){this.props.onTabClick(t)},setNextPrev:function(t,e){this.setState(t,e)},getTabs:function(){var t=this,e=this.props,n=e.panels,a=e.activeKey,s=[],o=e.prefixCls;return p["default"].Children.forEach(n,function(e){var n=e.key,r=a===n?o+"-tab-active":"";r+=" "+o+"-tab";var c={};e.props.disabled?r+=" "+o+"-tab-disabled":c={onClick:t.onTabClick.bind(t,n)};var l={};a===n&&(l.ref="activeTab"),s.push(p["default"].createElement("div",i({role:"tab","aria-disabled":e.props.disabled?"true":"false","aria-selected":a===n?"true":"false"},c,{className:r,key:n},l),p["default"].createElement("div",{className:o+"-tab-inner"},e.props.tab)))}),s},getOffsetWH:function(t){var e=this.props.tabPosition,n="offsetWidth";return"left"!==e&&"right"!==e||(n="offsetHeight"),t[n]},getOffsetLT:function(t){var e=this.props.tabPosition,n="left";return"left"!==e&&"right"!==e||(n="top"),t.getBoundingClientRect()[n]},setOffset:function(t){var e=Math.min(0,t);if(this.state.offset!==e){this.setState({offset:e});var n={},a=this.props.tabPosition,s=(0,d.getTransformPropertyName)();n="left"===a||"right"===a?s?{name:s,value:"translate3d(0,"+e+"px,0)"}:{name:"top",value:e+"px"}:s?{name:s,value:"translate3d("+e+"px,0,0)"}:{name:"left",value:e+"px"},this.refs.nav.style[n.name]=n.value}},setPrev:function(t){this.state.prev!==t&&this.setState({prev:t})},setNext:function(t){this.state.next!==t&&this.setState({next:t})},isNextPrevShown:function(t){return t.next||t.prev},scrollToActiveTab:function(){var t=this.refs,e=t.activeTab,n=t.navWrap;if(e){var a=this.getOffsetWH(e),s=this.getOffsetWH(n),o=this.state.offset,i=this.getOffsetLT(n),r=this.getOffsetLT(e);i>r?(o+=i-r,this.setState({offset:o})):i+s<r+a&&(o-=r+a-(i+s),this.setState({offset:o}))}},prev:function(){var t=this.refs.navWrap,e=this.getOffsetWH(t),n=this.state,a=n.offset;this.setOffset(a+e)},next:function(){var t=this.refs.navWrap,e=this.getOffsetWH(t),n=this.state,a=n.offset;this.setOffset(a-e)},render:function(){var t=this.props,e=this.state,n=t.prefixCls,a=this.getTabs(),i=t.tabMovingDirection,r=n+"-ink-bar";i&&(r+=" "+n+"-ink-bar-transition-"+i);var c=void 0,u=void 0,f=e.prev||e.next;if(f){var d,b;u=p["default"].createElement("span",{onClick:e.prev?this.prev:o,unselectable:"unselectable",className:(0,l["default"])((d={},s(d,n+"-tab-prev",1),s(d,n+"-tab-btn-disabled",!e.prev),d))},p["default"].createElement("span",{className:n+"-tab-prev-icon"})),c=p["default"].createElement("span",{onClick:e.next?this.next:o,unselectable:"unselectable",className:(0,l["default"])((b={},s(b,n+"-tab-next",1),s(b,n+"-tab-btn-disabled",!e.next),b))},p["default"].createElement("span",{className:n+"-tab-next-icon"}))}var h=this.props.tabBarExtraContent;return p["default"].createElement("div",{role:"tablist",className:n+"-bar",tabIndex:"0",onKeyDown:this.props.onKeyDown},h?p["default"].createElement("div",{style:v},h):null,p["default"].createElement("div",{className:n+"-nav-container "+(f?n+"-nav-container-scrolling":""),style:t.style,ref:"container"},u,c,p["default"].createElement("div",{className:n+"-nav-wrap",ref:"navWrap"},p["default"].createElement("div",{className:n+"-nav-scroll"},p["default"].createElement("div",{className:n+"-nav",ref:"nav"},p["default"].createElement("div",{className:r,ref:"inkBar"}),a)))))}});e["default"]=b,t.exports=e["default"]},209:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){}function i(t){var e=void 0;return p["default"].Children.forEach(t.children,function(t){e||t.props.disabled||(e=t.key)}),e}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),p=a(r),c=n(207),l=a(c),u=n(115),f=a(u),d=n(208),v=a(d),b=n(60),h=a(b),k=n(2),y=a(k),m=p["default"].createClass({displayName:"Tabs",propTypes:{destroyInactiveTabPane:r.PropTypes.bool,onTabClick:r.PropTypes.func,onChange:r.PropTypes.func,children:r.PropTypes.any,tabBarExtraContent:r.PropTypes.any,animation:r.PropTypes.string,prefixCls:r.PropTypes.string,className:r.PropTypes.string,tabPosition:r.PropTypes.string},getDefaultProps:function(){return{prefixCls:"rc-tabs",destroyInactiveTabPane:!1,tabBarExtraContent:null,onChange:o,tabPosition:"top",style:{},contentStyle:{},navStyle:{},onTabClick:o}},getInitialState:function(){var t=this.props,e=void 0;return e="activeKey"in t?t.activeKey:"defaultActiveKey"in t?t.defaultActiveKey:i(t),{activeKey:e}},componentWillReceiveProps:function(t){var e=this.state.activeKey;if("activeKey"in t&&(e=t.activeKey,!e))return void this.setState({activeKey:e});var n=void 0;p["default"].Children.forEach(t.children,function(t){t.key===e&&(n=!0)}),n?this.setActiveKey(e,t):this.setActiveKey(i(t),t)},onTabClick:function(t){this.setActiveKey(t),this.props.onTabClick(t),this.state.activeKey!==t&&this.props.onChange(t)},onNavKeyDown:function(t){var e=t.keyCode;if(e===l["default"].RIGHT||e===l["default"].DOWN){t.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(e===l["default"].LEFT||e===l["default"].UP){t.preventDefault();var a=this.getNextActiveKey(!1);this.onTabClick(a)}},getNextActiveKey:function(t){var e=this.state.activeKey,n=[];p["default"].Children.forEach(this.props.children,function(e){e.props.disabled||(t?n.push(e):n.unshift(e))});var a=n.length,s=a&&n[0].key;return n.forEach(function(t,o){t.key===e&&(s=o===a-1?n[0].key:n[o+1].key)}),s},getTabPanes:function(){var t=this.state,e=this.props,n=t.activeKey,a=e.children,s=[];return p["default"].Children.forEach(a,function(t){var a=t.key,o=n===a;s.push(p["default"].cloneElement(t,{active:o,rootPrefixCls:e.prefixCls}))}),s},getIndexPair:function(t,e,n){var a=[];p["default"].Children.forEach(t.children,function(t){a.push(t.key)});var s=a.indexOf(e),o=a.indexOf(n);return{currentIndex:s,nextIndex:o}},setActiveKey:function(t,e){var n=e||this.props,a=this.state.activeKey;if(!(a===t||"activeKey"in n&&n===this.props))if(a){var s=this.getIndexPair(n,a,t),o=s.currentIndex,i=s.nextIndex;if(o===-1){var r=this.getIndexPair(this.props,a,t);o=r.currentIndex,i=r.nextIndex}var p=o>i?"backward":"forward";this.setState({activeKey:t,tabMovingDirection:p})}else this.setState({activeKey:t})},render:function(){var t,e=this.props,n=e.destroyInactiveTabPane,a=e.prefixCls,o=e.tabPosition,i=e.className,r=e.animation,c=(0,y["default"])((t={},s(t,a,1),s(t,a+"-"+o,1),s(t,i,!!i),t)),l=this.state.tabMovingDirection,u=this.getTabPanes(),f=void 0;f=e.transitionName&&e.transitionName[l||"backward"],!f&&r&&(f=a+"-"+r+"-"+(l||"backward")),n&&(u=u.filter(function(t){return t.props.active})),f&&(u=n?p["default"].createElement(h["default"],{exclusive:!0,component:"div",transitionName:f},u):p["default"].createElement(h["default"],{showProp:"active",exclusive:!0,component:"div",transitionName:f},u));var d=[p["default"].createElement(v["default"],{prefixCls:a,key:"nav",onKeyDown:this.onNavKeyDown,tabBarExtraContent:this.props.tabBarExtraContent,tabPosition:o,style:e.navStyle,onTabClick:this.onTabClick,tabMovingDirection:l,panels:this.props.children,activeKey:this.state.activeKey}),p["default"].createElement("div",{className:a+"-content",style:e.contentStyle,key:"content"},u)];return"bottom"===o&&d.reverse(),p["default"].createElement("div",{className:c,style:e.style},d)}});m.TabPane=f["default"],e["default"]=m,t.exports=e["default"]},210:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.TabPane=e["default"]=void 0;var s=n(209),o=a(s),i=n(115),r=a(i);e["default"]=o["default"],e.TabPane=r["default"]},798:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var s=(n(11),n(10)),o=a(s),i=(n(181),n(180)),r=a(i),p=n(1),c=a(p),l=n(4);a(l);t.exports={content:[["p","\u4e3b\u8981\u5e94\u7528\u5728\u9875\u9762\u7684NavBar\u533a\u5757\uff0c\u4e00\u822c\u8d77\u7740\u63a7\u5236\u5168\u5c40\u9875\u9762\u5185\u5bb9\u5207\u6362\u7684\u4f5c\u7528\u3002\u9009\u9879\u5361\u7684\u6587\u5b57\u5185\u5bb9\u5efa\u8bae\u4e0d\u8d85\u8fc7\u56db\u4e2a\u3002"]],meta:{order:1,title:"\u80f6\u56ca\u578b\u9009\u9879\u5361",filename:"components/tabs/demo/capsule.md",id:"components-tabs-demo-capsule"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >callback</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >let</span> TabExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >defaultActiveKey</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>capsule<span class="token punctuation" >"</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>callback<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function t(t){console.log(t)}var e=r["default"].TabPane,n=c["default"].createClass({displayName:"TabExample",render:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],null),c["default"].createElement(r["default"],{defaultActiveKey:"1",type:"capsule",onChange:t},c["default"].createElement(e,{tab:"\u9009\u9879\u5361\u4e00",key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),c["default"].createElement(e,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9"),c["default"].createElement(e,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09\u5185\u5bb9")),c["default"].createElement(o["default"],null))}});return c["default"].createElement(n,null)}}}});