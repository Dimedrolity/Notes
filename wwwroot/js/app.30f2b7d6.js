(function(t){function e(e){for(var s,a,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},2660:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("main",{staticClass:"section"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"column is-one-quarter"},[i("div",{staticClass:"field is-grouped"},[i("div",{staticClass:"control is-expanded has-icons-right"},[i("input",{ref:"searchInput",staticClass:"input is-rounded",attrs:{type:"text",placeholder:"Найти"},on:{input:t.filterNotesByContainsInputValue}}),i("span",{staticClass:"icon is-small is-right"},[i("font-awesome-icon",{attrs:{icon:["fa","search"]}})],1)]),i("div",{staticClass:"control"},[i("button",{staticClass:"button is-info is-rounded",attrs:{type:"button"},on:{click:t.setCurrentNoteToEmptyNote}},[t._v("Создать ")])])]),i("aside",{staticClass:"field menu"},[t._m(1),i("div",{staticClass:"control"},[i("NotesList",{staticClass:"menu-list",attrs:{notes:t.notes},on:{setCurrentNoteToNoteWithId:t.setCurrentNoteToNoteWithId}})],1)])]),this.isCurrentNoteInitialized?i("Note",{staticClass:"column is-one-third",attrs:{id:this.currentNote.id,content:this.currentNote.content,title:this.currentNote.title,"date-of-last-change":this.currentNote.dateOfLastChange},on:{deleteNoteWithId:t.deleteNoteWithId,editNoteWithId:t.editNoteWithId,createNote:t.createNote}}):t._e()],1)]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"box"},[i("h1",{staticClass:"title is-2 has-text-centered"},[t._v("Заметки")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control"},[i("p",{staticClass:"menu-label"},[t._v("Ваши заметки")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer has-text-centered"},[i("p",[t._v("Тестовое задание на практику от компании VR Supersonic. 2020")]),i("p",[t._v("Код тут -> "),i("a",{attrs:{href:"https://github.com/Dimedrolity/Notes",target:"_blank"}},[t._v("github")])])])}],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(this.notes,(function(e){return i("li",{key:e.id,on:{click:function(i){return t.emitSetCurrentNoteToNoteWithId(e.id)}}},[i("a",[null!=e.title?i("span",[t._v(t._s(e.title))]):i("span",[t._v(t._s(e.content))])])])})),0)},r=[],l={name:"NotesList",props:{notes:{type:Array,required:!0}},methods:{emitSetCurrentNoteToNoteWithId(t){this.$emit("setCurrentNoteToNoteWithId",t)}}},c=l,u=i("2877"),d=Object(u["a"])(c,a,r,!1,null,"a8c29be0",null),h=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"field is-grouped is-grouped-right"},[i("div",{staticClass:"control"},[i("button",{staticClass:"button is-danger is-outlined is-rounded",attrs:{type:"button"},on:{click:function(e){return t.emitDeleteOfThisNote()}}},[t._v("Удалить заметку ")])])]),i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("input",{ref:"noteTitle",staticClass:"input",attrs:{type:"text",placeholder:"Введите заголовок заметки"},domProps:{value:this.title}})])]),i("div",{staticClass:"field"},[i("div",{staticClass:"control"},[i("textarea",{ref:"noteContent",staticClass:"textarea",attrs:{placeholder:"Введите содержимое заметки"},domProps:{value:this.content}})])]),i("div",{staticClass:"field jcsb"},[i("div",{staticClass:"control"},[null!=this.dateOfLastChange?i("span",[t._v(t._s(this.dateOfLastChange))]):t._e()]),i("div",{staticClass:"control"},[i("button",{staticClass:"button is-success is-rounded",attrs:{type:"button"},on:{click:t.emitSaveOfThisNote}},[t._v("Сохранить ")])])])])},f=[],v={name:"Note",props:{id:{validator:t=>"number"===typeof t||null===t,required:!0},title:{validator:t=>"string"===typeof t||null===t,required:!0},content:{type:String,required:!0},dateOfLastChange:{validator:t=>"string"===typeof t||null===t,required:!0}},methods:{emitDeleteOfThisNote(){this.$emit("deleteNoteWithId",this.id)},emitSaveOfThisNote(){""===this.$refs.noteContent.value?alert("Введите содержимое заметки"):null!==this.id?this.emitEditOfThisNote():this.emitCreateOfThisNote()},emitEditOfThisNote(){this.$emit("editNoteWithId",this.id,this.$refs.noteTitle.value,this.$refs.noteContent.value)},emitCreateOfThisNote(){this.$emit("createNote",this.$refs.noteTitle.value,this.$refs.noteContent.value)}}},N=v,m=(i("80c3"),Object(u["a"])(N,p,f,!1,null,"c4a1e75c",null)),C=m.exports,b={name:"App",components:{NotesList:h,Note:C},data(){return{notes:[],currentNote:{},isCurrentNoteInitialized:!1}},mounted(){this.initializeNotes()},methods:{async initializeNotes(){const t=await fetch("https://localhost:5001/api/notes",{method:"GET"});t.ok&&(this.notes=await t.json(),this.initializeCurrentNote())},async deleteNoteWithId(t){const e=await fetch("https://localhost:5001/api/notes/delete/"+t,{method:"DELETE"});e.ok&&this.initializeNotes()},async filterNotesByContainsInputValue(){const t=this.$refs.searchInput.value,e=await fetch("https://localhost:5001/api/notes/contains/"+t,{method:"GET"});e.ok&&(this.notes=await e.json(),this.initializeCurrentNote())},async editNoteWithId(t,e,i){const s=new FormData;s.append("Id",t),s.append("Title",e),s.append("Content",i);const n=await fetch("https://localhost:5001/api/notes/edit",{method:"PUT",body:s});n.ok&&this.initializeNotes()},async createNote(t,e){const i=new FormData;i.append("Title",t),i.append("Content",e);const s=await fetch("https://localhost:5001/api/notes/create",{method:"POST",body:i});s.ok&&this.initializeNotes()},setCurrentNoteToEmptyNote(){this.currentNote={id:null,title:"",content:"",dateOfLastChange:null}},setCurrentNoteToNoteWithId(t){this.currentNote=this.notes.find(e=>e.id===t)},initializeCurrentNote(){this.notes.length>0?this.currentNote=this.notes[0]:this.setCurrentNoteToEmptyNote(),this.isCurrentNoteInitialized=!0}}},y=b,_=Object(u["a"])(y,n,o,!1,null,"a5ba282e",null),g=_.exports,T=(i("eb46"),i("ad3d")),O=i("ecee"),w=i("c074");O["c"].add(w["a"]),s["a"].component("font-awesome-icon",T["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(g)}}).$mount("#app")},"80c3":function(t,e,i){"use strict";var s=i("2660"),n=i.n(s);n.a}});
//# sourceMappingURL=app.30f2b7d6.js.map