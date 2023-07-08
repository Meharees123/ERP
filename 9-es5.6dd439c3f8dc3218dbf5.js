function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{eGC9:function(e,t,a){"use strict";a.r(t),a.d(t,"ChartsDemoModule",(function(){return m}));var r,n,o=a("ofXK"),l=a("fXoL"),i=a("ZMOI"),s=a("LPYB"),d=((r=function(){function e(){_classCallCheck(this,e),this.barChartData=[{label:"# of Votes",data:[12,39,20,10,55,18]}],this.barChartColors=[{backgroundColor:"#560bd0"}],this.barChartLabels=["Jan","Feb","Mar","Apr","May","Jun"],this.barChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0,fontSize:10,min:0,max:80}}],xAxes:[{barPercentage:.6,ticks:{beginAtZero:!0,fontSize:11}}]},legend:{display:!1},elements:{point:{radius:0}}},this.barChartData2=[{label:"# of Votes",data:[12,39,20,10,25,18]}],this.barChartColors2=[{borderColor:"rgba(0,123,255,.5)",backgroundColor:"rgba(0,123,255,.5)"}],this.barChartColors3=[{backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00","#f10075"]}],this.barChartData3=[{data:[12,39,20,10,25,18],backgroundColor:["#560bd0","#007bff","#74de00","#f10075","#74de00","#f10075"]},{data:[22,30,25,30,20,60],backgroundColor:"#cad0e8"}],this.barChartColors4=[{backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00","#f10075"]},{backgroundColor:"#cad0e8"}],this.lineChartData=[{data:[12,15,18,40,35,38,32,20,25,15,25,30],borderColor:"#f10075",borderWidth:1,fill:!1},{data:[10,20,25,55,50,45,35,30,45,35,55,40],borderColor:"#007bff",borderWidth:1,fill:!1}],this.lineChartLabels=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],this.lineChartOptions={scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}},this.lineChartData2=[{data:[12,15,18,40,35,38,32,20,25,15,25,30],borderWidth:1,fill:!0},{data:[10,20,25,55,50,45,35,30,45,35,55,40],borderWidth:1,fill:!0}],this.lineChartColors2=[{borderColor:"rgba(241,0,117,1)",backgroundColor:"rgba(241,0,117,.2)"},{borderColor:"rgba(0,123,255,1)",backgroundColor:"rgba(0,123,255,.2)"}],this.doughnutPieChartData=[{label:"# of Votes",data:[20,20,30,5,25]}],this.doughnutPieChartLabels=["Jan","Feb","Mar","Apr","May"],this.doughnutPieChartOptions={responsive:!0,animation:{animateScale:!0,animateRotate:!0},legend:!1},this.doughnutPieChartColors=[{backgroundColor:["#560bd0","#007bff","#00cccc","#cbe0e3","#74de00"]}]}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l["\u0275\u0275defineComponent"]({type:r,selectors:[["app-chartjs"]],decls:61,vars:39,consts:[[1,"az-content"],[1,"container"],[1,"az-content-body","pd-lg-l-40","d-flex","flex-column"],[1,"az-content-breadcrumb"],[1,"az-content-title"],[1,"az-content-label","mg-b-5"],[1,"mg-b-20"],[1,"row","row-sm"],[1,"col-sm-8","col-md-6"],[1,"az-content-label","az-content-label-sm","mg-b-15"],["baseChart","",3,"chartType","datasets","labels","options","colors"],[1,"col-sm-8","col-md-6","mg-t-20","mg-md-t-0"],[1,"mg-y-30"],["baseChart","",3,"chartType","datasets","labels","options"],[1,"d-md-flex"],[1,""],[1,"ht-40"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275element"](2,"app-components-sidebar"),l["\u0275\u0275elementStart"](3,"div",2),l["\u0275\u0275elementStart"](4,"div",3),l["\u0275\u0275elementStart"](5,"span"),l["\u0275\u0275text"](6,"Components"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](7,"span"),l["\u0275\u0275text"](8,"Charts"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"span"),l["\u0275\u0275text"](10,"ChartJS Charts"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"h2",4),l["\u0275\u0275text"](12,"ChartJS Charts"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"div",5),l["\u0275\u0275text"](14,"Bar Chart"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](15,"p",6),l["\u0275\u0275text"](16,"Below is the basic bar chart example."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](17,"div",7),l["\u0275\u0275elementStart"](18,"div",8),l["\u0275\u0275elementStart"](19,"div",9),l["\u0275\u0275text"](20,"Solid Color"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](21,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](22,"div",11),l["\u0275\u0275elementStart"](23,"div",9),l["\u0275\u0275text"](24,"With Transparency"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](25,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](26,"hr",12),l["\u0275\u0275elementStart"](27,"div",5),l["\u0275\u0275text"](28,"Horizontal Bar Chart"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"p",6),l["\u0275\u0275text"](30,"Below is the horizontal bar chart example."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](31,"div",7),l["\u0275\u0275elementStart"](32,"div",8),l["\u0275\u0275element"](33,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](34,"div",11),l["\u0275\u0275element"](35,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](36,"hr",12),l["\u0275\u0275elementStart"](37,"div",7),l["\u0275\u0275elementStart"](38,"div",8),l["\u0275\u0275elementStart"](39,"div",5),l["\u0275\u0275text"](40,"Line Chart"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](41,"p",6),l["\u0275\u0275text"](42,"Below is the basic line chart example."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](43,"canvas",13),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](44,"div",11),l["\u0275\u0275elementStart"](45,"div",5),l["\u0275\u0275text"](46,"Area Chart"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](47,"p",6),l["\u0275\u0275text"](48,"Below is the basic area chart example."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](49,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](50,"hr",12),l["\u0275\u0275elementStart"](51,"div",5),l["\u0275\u0275text"](52,"Pie & Donut Chart"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](53,"p",6),l["\u0275\u0275text"](54,"Below are an example of data in a pie and donut chart."),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](55,"div",14),l["\u0275\u0275elementStart"](56,"div",15),l["\u0275\u0275element"](57,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](58,"div"),l["\u0275\u0275element"](59,"canvas",10),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](60,"div",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](21),l["\u0275\u0275property"]("chartType","bar")("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.barChartColors),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("chartType","bar")("datasets",t.barChartData2)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.barChartColors2),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("chartType","horizontalBar")("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.barChartColors3),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("chartType","horizontalBar")("datasets",t.barChartData3)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.barChartColors4),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("chartType","line")("datasets",t.lineChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions),l["\u0275\u0275advance"](6),l["\u0275\u0275property"]("chartType","line")("datasets",t.lineChartData2)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors2),l["\u0275\u0275advance"](8),l["\u0275\u0275property"]("chartType","pie")("datasets",t.doughnutPieChartData)("labels",t.doughnutPieChartLabels)("options",t.doughnutPieChartOptions)("colors",t.doughnutPieChartColors),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("chartType","doughnut")("datasets",t.doughnutPieChartData)("labels",t.doughnutPieChartLabels)("options",t.doughnutPieChartOptions)("colors",t.doughnutPieChartColors))},directives:[i.a,s.a],styles:[""]}),r),c=a("PCNd"),h=a("tyNb"),b=[{path:"chartjs",component:d}],m=((n=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=l["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||n)},imports:[[o.CommonModule,c.a,h.g.forChild(b),s.b]]}),n)}}]);