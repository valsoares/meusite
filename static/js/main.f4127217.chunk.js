(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e,a,t){e.exports={"caixa-conteudo":"styles_caixa-conteudo__f-kXk",alinha:"styles_alinha__3X7i0",faixa:"styles_faixa__1J-8d",cubo:"styles_cubo__h4C6H"}},,,,,,,,,,,,,,function(e,a,t){e.exports={"caixa-conteudo":"styles_caixa-conteudo__3g_bo",faixa:"styles_faixa__1VgL2","cubo-cover":"styles_cubo-cover__3hbTk","cubo-button":"styles_cubo-button__1p_tH"}},,,function(e,a,t){e.exports=t.p+"static/media/val1-6.abed1524.png"},,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/val5.e5a59ee0.png"},function(e,a,t){e.exports=t.p+"static/media/cubo-cover.3231c1f4.png"},function(e,a,t){e.exports=t.p+"static/media/pag1.f0cdbd79.png"},function(e,a,t){e.exports=t.p+"static/media/pag2.aea486de.png"},function(e,a,t){e.exports=t.p+"static/media/pag3.90c8f73b.png"},function(e,a,t){e.exports=t.p+"static/media/pag4.0a10c41d.png"},function(e,a,t){e.exports=t.p+"static/media/pag5.6462d38b.png"},function(e,a,t){e.exports=t.p+"static/media/pag6.68c37bc4.png"},function(e,a,t){e.exports=t.p+"static/media/pag7.0c49850c.png"},function(e,a,t){e.exports=t.p+"static/media/pag8.7e21599f.png"},function(e,a,t){e.exports=t.p+"static/media/pag9.bb436133.png"},function(e,a,t){e.exports=t.p+"static/media/pag10.d5522a79.png"},function(e,a,t){e.exports=t.p+"static/media/pag11.6f052e95.png"},function(e,a,t){e.exports=t.p+"static/media/pag12.088f46a5.png"},function(e,a,t){e.exports=t.p+"static/media/pag13.c7c5efe8.png"},function(e,a,t){e.exports=t.p+"static/media/pag14.33898cfb.png"},function(e,a,t){e.exports=t.p+"static/media/pag15.d5ce4e70.png"},function(e,a,t){e.exports=t.p+"static/media/pag16.5c070410.png"},function(e,a,t){e.exports=t.p+"static/media/pag17.35f16d87.png"},function(e,a,t){e.exports=t.p+"static/media/pag18.85bfcab8.png"},function(e,a,t){e.exports=t.p+"static/media/pag19.a94566b4.png"},function(e,a,t){e.exports=t.p+"static/media/pag20.ff8f13e4.png"},function(e,a,t){e.exports={total:"styles_total__2ZlrF"}},,function(e,a,t){e.exports=t(71)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(29),m=t.n(c),i=(t(63),t(19)),r=t(10),s=t(30),o=t(13),u=t(14),E=t(15),d=t(17),p=t(16),h=t(9),g=t(3),f=t(20),b=(t(28),t(2)),v=t.n(b),N=t(33),x=t.n(N),I=t(18),k=t.n(I),w=t(21),O=t.n(w),_=t(34),q=t.n(_),y=t(35),S=t.n(y),C=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).menuToggle=function(){e.setState({showMenu:!e.state.showMenu})},e.handleChange=function(a,t){e.setState(Object(s.a)({},a,t.target.value))},e.state={className:"menu",showMenu:!1,name:"",email:"",message:""},e.menuToggle=e.menuToggle.bind(Object(E.a)(e)),e}return Object(u.a)(t,[{key:"handleScroll",value:function(){document.documentElement.scrollTop>=50?this.setState({className:"menu-scrolled"}):this.setState({className:"menu"})}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){return e.handleScroll()}}},{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=a.name,n=a.email,l=a.message;if(t&&n&&l){var c={reply_to:n,from_name:t,to_name:"Valesca",message_html:l};x.a.send("gmail","template_vKhbHlBQ",c,"user_Mvckmf7YsyDIcuQvh8n0I").then((function(e){console.log(e.text),alert("Email enviado!")}),(function(e){console.log(e.text),alert("Ocorreu algum erro, tente novamente!")})),this.resetForm()}else alert("Preencha todos os campos, por favor!")}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"total"},l.a.createElement("div",{className:this.state.className},l.a.createElement("ul",null,l.a.createElement("div",{className:"menu-logo"},l.a.createElement("button",{onClick:this.menuToggle,value:"toggle"},l.a.createElement(g.i,null))),l.a.createElement("div",{className:this.state.showMenu?"showMenu":"hideMenu"},l.a.createElement("li",null,l.a.createElement("a",{href:"#home",onClick:this.menuToggle},l.a.createElement(g.e,null)," In\xedcio")),l.a.createElement("li",null,l.a.createElement("a",{href:"#um",onClick:this.menuToggle},l.a.createElement(g.d,null)," Sobre")),l.a.createElement("li",null,l.a.createElement("a",{href:"#dois",onClick:this.menuToggle},l.a.createElement(g.g,null)," Mural")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contato",onClick:this.menuToggle},l.a.createElement(g.h,null)," Contato")),l.a.createElement("h1",null,l.a.createElement(f.a,null),"Sou um mar de mist\xe9rios que ainda n\xe3o fui capaz de decifrar.")))),l.a.createElement("div",{className:"caixa-sobre"},l.a.createElement("img",{src:O.a,alt:"perfil"}),l.a.createElement("h1",null,"Valesca Soares"),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://www.facebook.com/valescasoares2",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.c,null)),l.a.createElement("a",{href:"https://www.instagram.com/valescasoares/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.f,null)),l.a.createElement("a",{href:"https://www.goodreads.com/val22k",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.a,null)),l.a.createElement("a",{href:"https://www.tvshowtime.com/en/user/8323926/profile",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.k,null)))),l.a.createElement("span",{id:"home"},"-"),l.a.createElement("div",{className:"fundo"},l.a.createElement(v.a,{animateIn:"tada",initiallyVisible:!0,animateOnce:!0},l.a.createElement("h1",null,l.a.createElement(f.a,null),"Sou um mar de mist\xe9rios que ainda n\xe3o fui capaz de decifrar."))),l.a.createElement("div",{className:k.a["caixa-conteudo"]},l.a.createElement("div",{id:"um"},"-"),l.a.createElement("h1",null,"Quem sou?"),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("p",null,"Minha fam\xedlia me chama de Valesca, meus amigos grande parte do tempo me chamam de Val e meu namorado tamb\xe9m, al\xe9m de todos os outros apelidos carinhosos. Atualmente tenho 23 anos e nesse tempo j\xe1 fui muitas vers\xf5es diferentes de mim mesma, fui moldada por meus sentimentos diante dos momentos em que vivi e pelas boas pessoas que passaram pela minha vida. Eu poderia falar diversas qualidades e defeitos que tenho consci\xeancia de mim mesma, mas prefiro fazer isso de uma maneira diferente contando uma pequena hist\xf3ria."))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("p",null,"Era uma vez uma menininha que nasceu pequena e foi crescendo com o passar do tempo. Ela s\xf3 era faladeira com pessoas que ela tinha mais apego, o tempo passou mais, ela teve experi\xeancias que foram um divisor de \xe1guas em sua vida e ela j\xe1 n\xe3o era t\xe3o t\xedmida assim. Entretanto, ainda preferia a solid\xe3o.",l.a.createElement("img",{src:q.a,alt:"sobre",style:{width:"170px",position:"relative",float:"right"}}))))),l.a.createElement("div",{id:"dois"},"-"),l.a.createElement("h1",null,"Mural"),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:S.a,alt:"capa cubo",className:k.a["cubo-cover"]}),l.a.createElement("p",null,l.a.createElement(h.HashLink,{to:"/cubo#home",className:k.a["cubo-button"]},"Veja aqui")))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"}))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"})),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("div",{className:k.a.faixa}),l.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},l.a.createElement("div",{id:"contato"},"-"),l.a.createElement("h1",null,"Contato"),l.a.createElement("input",{placeholder:"Nome",value:this.state.name,onChange:this.handleChange.bind(this,"name")}),l.a.createElement("input",{placeholder:"Email",value:this.state.email,type:"email",onChange:this.handleChange.bind(this,"email")}),l.a.createElement("textarea",{placeholder:"Mensagem",value:this.state.message,onChange:this.handleChange.bind(this,"message")}),l.a.createElement("button",{type:"submit"},"Enviar")),l.a.createElement("div",{className:k.a.faixa}),l.a.createElement("footer",null,l.a.createElement(g.j,null)," Feito por Valesca Soares em 2020 ",l.a.createElement(g.b,null)," Bras\xedlia, Brasil."))}}]),t}(l.a.Component),M=t(4),j=t.n(M),L=t(36),T=t.n(L),R=t(37),V=t.n(R),H=t(38),B=t.n(H),z=t(39),D=t.n(z),F=t(40),J=t.n(F),Q=t(41),P=t.n(Q),X=t(42),A=t.n(X),K=t(43),Y=t.n(K),Z=t(44),G=t.n(Z),U=t(45),W=t.n(U),$=t(46),ee=t.n($),ae=t(47),te=t.n(ae),ne=t(48),le=t.n(ne),ce=t(49),me=t.n(ce),ie=t(50),re=t.n(ie),se=t(51),oe=t.n(se),ue=t(52),Ee=t.n(ue),de=t(53),pe=t.n(de),he=t(54),ge=t.n(he),fe=t(55),be=t.n(fe),ve=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).menuToggle=function(){e.setState({showMenu:!e.state.showMenu})},e.state={className:"menu",showMenu:!1},e.menuToggle=e.menuToggle.bind(Object(E.a)(e)),e}return Object(u.a)(t,[{key:"handleScroll",value:function(){document.documentElement.scrollTop>=50?this.setState({className:"menu-scrolled"}):this.setState({className:"menu"})}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){return e.handleScroll()}}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"total"},l.a.createElement("div",{className:j.a.faixa}),l.a.createElement("div",{className:this.state.className},l.a.createElement("ul",null,l.a.createElement("div",{className:"menu-logo"},l.a.createElement("button",{onClick:this.menuToggle,value:"toggle"},l.a.createElement(g.i,null))),l.a.createElement("div",{className:this.state.showMenu?"showMenu":"hideMenu"},l.a.createElement("li",null,l.a.createElement(h.HashLink,{to:"/#home",onClick:this.menuToggle},l.a.createElement(g.e,null)," In\xedcio")),l.a.createElement("li",null,l.a.createElement(h.HashLink,{to:"/#um",onClick:this.menuToggle},l.a.createElement(g.d,null)," Sobre")),l.a.createElement("li",null,l.a.createElement(h.HashLink,{to:"/#dois",onClick:this.menuToggle},l.a.createElement(g.g,null)," Mural")),l.a.createElement("li",null,l.a.createElement(h.HashLink,{to:"/#contato",onClick:this.menuToggle},l.a.createElement(g.h,null)," Contato")),l.a.createElement("h1",null,l.a.createElement(f.a,null),"Sou um mar de mist\xe9rios que ainda n\xe3o fui capaz de decifrar.")))),l.a.createElement("div",{className:"caixa-sobre"},l.a.createElement("img",{src:O.a,alt:"perfil"}),l.a.createElement("h1",null,"Valesca Soares"),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://www.facebook.com/valescasoares2",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.c,null)),l.a.createElement("a",{href:"https://www.instagram.com/valescasoares/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.f,null)),l.a.createElement("a",{href:"https://www.goodreads.com/val22k",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.a,null)),l.a.createElement("a",{href:"https://www.tvshowtime.com/en/user/8323926/profile",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(g.k,null)))),l.a.createElement("div",{className:j.a["caixa-conteudo"]},l.a.createElement("div",{id:"um"},"-"),l.a.createElement("h1",null,"Cubo m\xe1gico"),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:T.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:V.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:B.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:D.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:J.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:P.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:A.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:Y.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:G.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:W.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:ee.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:te.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:le.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:me.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:re.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:oe.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:Ee.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:pe.a,alt:"tutorial",className:j.a.cubo})))),l.a.createElement("div",{className:"alinha"},l.a.createElement(v.a,{animateIn:"bounceInLeft",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:ge.a,alt:"tutorial",className:j.a.cubo}))),l.a.createElement(v.a,{animateIn:"bounceInRight",animateOnce:!0},l.a.createElement("div",{className:"caixa-pequena"},l.a.createElement("img",{src:be.a,alt:"creditos",className:j.a.cubo})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("footer",null,l.a.createElement(g.j,null)," Feito por Valesca Soares em 2020 ",l.a.createElement(g.b,null)," Bras\xedlia, Brasil."))}}]),t}(l.a.Component),Ne=t(57),xe=t(56),Ie=t.n(xe),ke=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:Ie.a.total},l.a.createElement("h1",null,"Opss"),l.a.createElement(Ne.a,null),l.a.createElement("h1",null,"P\xe1gina n\xe3o encontrada"),l.a.createElement("button",null,l.a.createElement(h.HashLink,{to:"/#home"},"Volte para a p\xe1gina inicial")))}}]),t}(l.a.Component);function we(){return l.a.createElement(i.BrowserRouter,{basename:"/meusite"},l.a.createElement(r.g,null,l.a.createElement(r.d,{path:"/",exact:!0,component:C}),l.a.createElement(r.d,{path:"/cubo",component:ve}),l.a.createElement(r.d,{component:ke})))}var Oe=function(){return l.a.createElement(we,null)};m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Oe,null)),document.getElementById("root"))}],[[58,1,2]]]);
//# sourceMappingURL=main.f4127217.chunk.js.map