(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{151:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(48),l=t.n(c),i=t(9),u=t(5),m=t(49),d=function(e){var a=e.children,t=e.query,n=e.id,c=Object(m.a)(t,{variables:{id:n}}),l=c.data,i=c.loading,u=c.error;return i?r.a.createElement("p",null,"Loading..."):u?r.a.createElement("p",null,"Error: ",JSON.stringify(u)):a({data:l})},o=t(19),s=t(17),E=t(18),v=t.n(E);function k(){var e=Object(s.a)(["\n  query Categories {\n    categories {\n      id\n      name\n    }\n  }\n"]);return k=function(){return e},e}var g=v()(k()),f=function(){return r.a.createElement("div",null,r.a.createElement(d,{query:g,id:null},(function(e){var a=e.data.categories;return r.a.createElement("div",null,r.a.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"A Nifty Blog Made with Strapi and React")))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},a.map((function(e,a){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"/category/".concat(e.id),className:"uk-link-reset"},e.name))}))))))})))},h=function(e){var a=e.article,t=a.image.url;return r.a.createElement(o.b,{to:"/article/".concat(a.id),className:"uk-link-reset"},r.a.createElement("div",{className:"uk-card uk-card-muted"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:t,alt:a.image.url,height:"100"})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("p",{id:"category",className:"uk-text-uppercase"},a.category.name),r.a.createElement("p",{id:"title",className:"uk-text-large"},a.title))))},p=function(e){var a=e.articles,t=Math.ceil(a.length/5),n=a.slice(0,t),c=a.slice(t,a.length);return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2","data-uk-grid":!0},r.a.createElement("div",null,n.map((function(e,a){return r.a.createElement(h,{article:e,key:"article__".concat(e.id)})}))),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0},c.map((function(e,a){return r.a.createElement(h,{article:e,key:"article__".concat(e.id)})}))))))};function y(){var e=Object(s.a)(["\n  query Articles {\n    articles {\n      id\n      title\n      category {\n        id\n        name\n      }\n      image {\n        url\n      }\n    }\n  }\n"]);return y=function(){return e},e}var b=v()(y()),N=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("h1",null,"Blog"),r.a.createElement(d,{query:b},(function(e){var a=e.data.articles;return r.a.createElement(p,{articles:a})})))))},q=t(55),x=t.n(q),w=t(56),O=t.n(w);function j(){var e=Object(s.a)(["\n  query Articles($id: ID!) {\n    article(id: $id) {\n      id\n      title\n      content\n      image {\n        url\n      }\n      category {\n        id\n        name\n      }\n      published_at\n    }\n  }\n"]);return j=function(){return e},e}var _=v()(j()),M=function(){var e=Object(u.f)().id;return r.a.createElement(d,{query:_,id:e},(function(e){var a=e.data.article,t=a.image.url;return r.a.createElement("div",null,r.a.createElement("div",{id:"banner",className:"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin","data-src":t,"data-srcset":t,"data-uk-img":!0},r.a.createElement("h1",null,a.title)),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement(x.a,{source:a.content}),r.a.createElement("p",null,r.a.createElement(O.a,{format:"MMM Do YYYY"},a.published_at)))))}))};function A(){var e=Object(s.a)(["\n  query Category($id: ID!){\n    category(id: $id) {\n      name\n      articles {\n           id\n        title\n        content\n        image {\n          url\n        }\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"]);return A=function(){return e},e}var Y=v()(A()),$=function(){var e=Object(u.f)().id;return r.a.createElement(d,{query:Y,id:e},(function(e){var a=e.data.category;return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("h1",null,a.name),r.a.createElement(p,{articles:a.articles}))))}))};var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:N,exact:!0}),r.a.createElement(u.a,{path:"/article/:id",component:M,exact:!0}),r.a.createElement(u.a,{path:"/category/:id",component:$,exact:!0})))},D=t(20),I=t(57),J=t(58),C=new I.a,S=new J.a({uri:"".concat("http://localhost:1337","/graphql")}),L=new D.a({cache:C,link:S});t(151);l.a.render(r.a.createElement(o.a,null,r.a.createElement(i.a,{client:L},r.a.createElement(B,null))),document.getElementById("root"))},59:function(e,a,t){e.exports=t(152)}},[[59,1,2]]]);
//# sourceMappingURL=main.df788c9f.chunk.js.map