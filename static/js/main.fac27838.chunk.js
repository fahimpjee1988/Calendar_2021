(this.webpackJsonpcalendar_2021=this.webpackJsonpcalendar_2021||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(2),o=n.n(a),r=n(8),s=n.n(r),c=(n(13),n(3)),i=n(4),l=n(6),h=n(5),u=(n(14),n(1)),d=n.n(u),f=(n(16),n(0)),p=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a,o=this;return Object(c.a)(this,n),(a=e.call(this,t)).state={dateContext:d()(),today:d()(),showMonthPopup:!1,showYearPopup:!1,selectedDay:null},a.weekdays=d.a.weekdays(),a.weekdaysShort=d.a.weekdaysShort(),a.months=d.a.months(),a.year=function(){return a.state.dateContext.format("Y")},a.month=function(){return a.state.dateContext.format("MMMM")},a.daysInMonth=function(){return a.state.dateContext.daysInMonth()},a.currentDate=function(){return console.log("currentDate: ",a.state.dateContext.get("date")),a.state.dateContext.get("date")},a.currentDay=function(){return a.state.dateContext.format("D")},a.firstDayOfMonth=function(){var t=a.state.dateContext;return d()(t).startOf("month").format("d")},a.setMonth=function(t){var e=a.months.indexOf(t),n=Object.assign({},a.state.dateContext);n=d()(n).set("month",e),a.setState({dateContext:n})},a.nextMonth=function(){var t=Object.assign({},a.state.dateContext);t=d()(t).add(1,"month"),a.setState({dateContext:t}),a.props.onNextMonth&&a.props.onNextMonth()},a.prevMonth=function(){var t=Object.assign({},a.state.dateContext);t=d()(t).subtract(1,"month"),a.setState({dateContext:t}),a.props.onPrevMonth&&a.props.onPrevMonth()},a.onSelectChange=function(t,e){a.setMonth(e),a.props.onMonthChange&&a.props.onMonthChange()},a.SelectList=function(t){var e=t.data.map((function(t){return Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:"#",onClick:function(e){a.onSelectChange(e,t)},children:t})},t)}));return Object(f.jsx)("div",{className:"month-popup",children:e})},a.onChangeMonth=function(t,e){a.setState({showMonthPopup:!a.state.showMonthPopup})},a.MonthNav=function(){return Object(f.jsxs)("span",{className:"label-month",onClick:function(t){a.onChangeMonth(t,a.month())},children:[a.month(),a.state.showMonthPopup&&Object(f.jsx)(o.SelectList,{data:a.months})]})},a.showYearEditor=function(){a.setState({showYearNav:!0})},a.setYear=function(t){var e=Object.assign({},a.state.dateContext);e=d()(e).set("year",t),a.setState({dateContext:e})},a.onYearChange=function(t){a.setYear(t.target.value),a.props.onYearChange&&a.props.onYearChange(t,t.target.value)},a.onKeyUpYear=function(t){13!==t.which&&27!==t.which||(a.setYear(t.target.value),a.setState({showYearNav:!1}))},a.YearNav=function(){return a.state.showYearNav?Object(f.jsx)("input",{defaultValue:a.year(),className:"editor-year",ref:function(t){a.yearInput=t},onKeyUp:function(t){return a.onKeyUpYear(t)},onChange:function(t){return a.onYearChange(t)},type:"number",placeholder:"year"}):Object(f.jsx)("span",{className:"label-year",onDoubleClick:function(t){a.showYearEditor()},children:a.year()})},a.onDayClick=function(t,e){a.setState({selectedDay:e},(function(){console.log("SELECTED DAY: ",a.state.selectedDay)})),a.props.onDayClick&&a.props.onDayClick(t,e)},a.width=t.width||"350px",a.style=t.style||{},a.style.width=a.width,a}return Object(i.a)(n,[{key:"render",value:function(){for(var t=this,e=this.weekdaysShort.map((function(t){return Object(f.jsx)("td",{className:"week-day",children:t},t)})),n=[],a=0;a<this.firstDayOfMonth();a++)n.push(Object(f.jsx)("td",{className:"emptySlot",children:""},80*a));console.log("blanks: ",n);for(var o=[],r=function(e){var n=e==t.currentDay()?"day current-day":"day",a=e==t.state.selectedDay?" selected-day ":"";o.push(Object(f.jsx)("td",{className:n+a,children:Object(f.jsx)("span",{onClick:function(n){t.onDayClick(n,e)},children:e})},e))},s=1;s<=this.daysInMonth();s++)r(s);console.log("days: ",o);var c=[].concat(n,o),i=[],l=[];c.forEach((function(t,e){if(e%7!==0)l.push(t);else{var n=l.slice();i.push(n),(l=[]).push(t)}if(e===c.length-1){var a=l.slice();i.push(a)}}));var h=i.map((function(t,e){return Object(f.jsx)("tr",{children:t},100*e)}));return Object(f.jsx)("div",{className:"calendar-container",style:this.style,children:Object(f.jsxs)("table",{className:"calendar",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"calendar-header",children:[Object(f.jsxs)("td",{colSpan:"5",children:[Object(f.jsx)(this.MonthNav,{})," ",Object(f.jsx)(this.YearNav,{})]}),Object(f.jsxs)("td",{colSpan:"2",className:"nav-month",children:[Object(f.jsx)("i",{className:"prev fa fa-fw fa-chevron-left",onClick:function(e){t.prevMonth()}}),Object(f.jsx)("i",{className:"prev fa fa-fw fa-chevron-right",onClick:function(e){t.nextMonth()}})]})]})}),Object(f.jsxs)("tbody",{children:[Object(f.jsx)("tr",{children:e}),h]})]})})}}]),n}(o.a.Component),j={position:"relative",margin:"50px auto"},v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).onDayClick=function(t,e){alert(e)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(p,{style:j,width:"302px",onDayClick:function(e,n){return t.onDayClick(e,n)}})})}}]),n}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}s.a.render(Object(f.jsx)(v,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Calendar_2021",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Calendar_2021","/service-worker.js");y?(!function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):b(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):b(t)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.fac27838.chunk.js.map