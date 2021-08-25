(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/error.cc9a421e.jpg"},37:function(e,t,a){e.exports=a(68)},42:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),o=a(5),s=a(7),u=a(9),i=a(8),m=a(10),d=a(71),h=a(69),f=a(70),p=(a(42),a(14)),E=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h3",{className:"header-title"},r.a.createElement(p.b,{to:"/"},"Game of Thrones DB")),r.a.createElement("ul",{className:"header-list"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/characters/"},"Characters")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/houses/"},"Houses")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/books/"},"Books"))))},g=(a(48),a(4)),v=a.n(g),b=a(16),j=function e(){var t=this;Object(o.a)(this,e),this.getResource=function(){var e=Object(b.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", status ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllBooks=Object(b.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformBook));case 4:case"end":return e.stop()}},e,this)})),this.getBook=function(){var e=Object(b.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/books/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformBook(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllHouses=Object(b.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformHouse));case 4:case"end":return e.stop()}},e,this)})),this.getHouse=function(){var e=Object(b.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/houses/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformHouse(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters?page=5&pageSize=10");case 2:return a=e.sent,e.abrupt("return",a.map(t._transformCharacter));case 4:case"end":return e.stop()}},e,this)})),this.getCharacter=function(){var e=Object(b.a)(v.a.mark(function e(a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/characters/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformCharacter(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)$/)[1]},this._transformCharacter=function(e){return{id:t._extractId(e),name:e.name||"no data",gender:e.gender||"no data",born:e.born||"no data",died:e.died||"no data",culture:e.culture||"no data"}},this._transformHouse=function(e){return{id:t._extractId(e),name:e.name||"no data",region:e.region||"no data",words:e.words||"no data",titles:e.titles||"no data",overload:e.overload||"no data",ancestralWeapons:e.ancestralWeapons||"no data"}},this._transformBook=function(e){return{id:t._extractId(e),name:e.name,numberOfPages:e.numberOfPages,puplisher:e.publisher,released:e.released}},this._apiBase="https://www.anapioficeandfire.com/api"},O=(a(52),function(){return r.a.createElement("div",{class:"loadingio-spinner-spin-iplcastgf5f"},r.a.createElement("div",{class:"ldio-cj09jxjgtt5"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),w=(a(54),a(33)),k=a.n(w),C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:k.a,alt:"error"}),r.a.createElement("span",null,"Something goes wrong!"))},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={char:{},loading:!0,error:!1},a.onCharLoaded=function(e){a.setState({char:e,loading:!1})},a.onError=function(){a.setState({error:!0,loading:!1})},a.updateChar=function(){var e=Math.floor(140*Math.random()+25);a.gotService.getCharacter(e).then(a.onCharLoaded).catch(a.onError)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log("mounting"),this.updateChar(),this.timerId=setInterval(this.updateChar,this.props.interval)}},{key:"componentWillUnmount",value:function(){console.log("unmounting"),clearInterval(this.timerId)}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.char,a=e.loading,n=e.error,c=a?r.a.createElement(O,null):null,l=n?r.a.createElement(C,null):null,o=a||n?null:r.a.createElement(y,{char:t});return r.a.createElement("div",{className:"random-block rounded some"},l,c,o)}}]),t}(n.Component);S.defaultProps={interval:15e3};var y=function(e){var t=e.char,a=t.name,n=t.gender,c=void 0===n?"no data":n,l=t.born,o=t.died,s=t.culture;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,o)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,s))))},x=S,I=a(20),N=(a(56),a(34)),B=a.n(N);var D=function(e){var t=e.getData,a=e.onItemSelected,c=e.renderItem,l=Object(n.useState)([]),o=Object(I.a)(l,2),s=o[0],u=o[1];if(Object(n.useEffect)(function(){t().then(function(e){u(e)},[])}),!s)return r.a.createElement(B.a,null);var i=s.map(function(e){var t=e.id,n=c(e);return r.a.createElement("li",{key:t,className:"list-group-item",onClick:function(){return a(t)}},n)});return r.a.createElement("ul",{className:"item-list list-group"},i)},R=(a(30),O),A=function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",null,t[a]))};var _=function(e){var t=e.itemId,a=e.getData,c=Object(n.useState)(null),l=Object(I.a)(c,2),o=l[0],s=l[1],u=Object(n.useState)(!0),i=Object(I.a)(u,2),m=i[0],d=i[1],h=Object(n.useState)(!1),f=Object(I.a)(h,2),p=f[0],E=f[1];function g(e){s(e),d(!1)}if(Object(n.useEffect)(function(){t&&(d(!0),a(t).then(g).catch(function(){return s(null),void E(!0)}))},[t]),!o&&p)return r.a.createElement(C,null);if(!o)return r.a.createElement("span",{className:"select-error"},"Please select an item");var v=o.name;return m?r.a.createElement("div",{className:"char-details rounded"},r.a.createElement(R,null)):r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h4",null,v),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.Children.map(e.children,function(e){return r.a.cloneElement(e,{item:o})})))},H=function(e){var t=e.left,a=e.right;return r.a.createElement(h.a,null,r.a.createElement(f.a,{md:"6"},t),r.a.createElement(f.a,{md:"6"},a))},P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedChar:null,error:!1},a.onItemSelected=function(e){a.setState({selectedChar:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(C,null);var e=r.a.createElement(D,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllCharacters,renderItem:function(e){var t=e.name,a=e.gender;return"".concat(t," (").concat(a,")")}}),t=r.a.createElement(_,{itemId:this.state.selectedChar,getData:this.gotService.getCharacter},r.a.createElement(A,{field:"gender",label:"Gender"}),r.a.createElement(A,{field:"born",label:"Born"}),r.a.createElement(A,{field:"died",label:"Died"}),r.a.createElement(A,{field:"culture",label:"Culture"}));return r.a.createElement(H,{left:e,right:t})}}]),t}(n.Component),W=a(1),G=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedBook:null,error:!1},a.onItemSelected=function(e){a.setState({selectedBook:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(C,null):r.a.createElement(D,{onItemSelected:function(t){e.props.history.push(t)},getData:this.gotService.getAllBooks,renderItem:function(e){return e.name}})}}]),t}(n.Component),M=Object(W.f)(G),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={selectedHouse:null,error:!1},a.onItemSelected=function(e){a.setState({selectedHouse:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){if(this.state.error)return r.a.createElement(C,null);var e=r.a.createElement(D,{onItemSelected:this.onItemSelected,getData:this.gotService.getAllHouses,renderItem:function(e){return e.name}}),t=r.a.createElement(_,{itemId:this.state.selectedHouse,getData:this.gotService.getHouse},r.a.createElement(A,{field:"region",label:"Region"}),r.a.createElement(A,{field:"words",label:"Words"}),r.a.createElement(A,{field:"titles",label:"Titles"}),r.a.createElement(A,{field:"ancestralWeapons",label:"Ancestral Weapons"}));return r.a.createElement(H,{left:e,right:t})}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_,{itemId:this.props.bookId,getData:this.gotService.getBook},r.a.createElement(A,{field:"numberOfPages",label:"Number of pages"}),r.a.createElement(A,{field:"publisher",label:"Publisher"}),r.a.createElement(A,{field:"released",label:"Released"}))}}]),t}(n.Component),z=function(){return r.a.createElement("div",{className:"char-details rounded"},r.a.createElement("h1",null,"Hello! It's GOT DataBase!"),r.a.createElement("span",null,"Please select category"))},J=(a(62),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new j,a.state={showRandomChar:!0,error:!1,selectedHouse:20},a.toggleRandomChar=function(){a.setState(function(e){return{showRandomChar:!e.showRandomChar}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(){console.log("error"),this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.showRandomChar?r.a.createElement(x,{interval:5e3,getChar:this.gotService.getCharacter}):null;return this.state.error?r.a.createElement(C,null):r.a.createElement(p.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(d.a,null,r.a.createElement(E,null)),r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(f.a,{lg:{size:5,offset:0}},e,r.a.createElement("button",{className:"toggle-btn",onClick:this.toggleRandomChar},"Toggle random character"))),r.a.createElement(W.c,null,r.a.createElement(W.a,{path:"/",component:z,exact:!0}),r.a.createElement(W.a,{path:"/characters",component:P}),r.a.createElement(W.a,{path:"/books",component:M,exact:!0}),r.a.createElement(W.a,{path:"/books/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(F,{bookId:t})}}),r.a.createElement(W.a,{path:"/houses",component:T}),r.a.createElement(W.a,{render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement("button",{className:"toggle-btn"},r.a.createElement(p.b,{to:"/"},"MAIN PAGE")))}})))))}}]),t}(n.Component));a(64),a(66);l.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[37,2,1]]]);
//# sourceMappingURL=main.aec1b3b9.chunk.js.map