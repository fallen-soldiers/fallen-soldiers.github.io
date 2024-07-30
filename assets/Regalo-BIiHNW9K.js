import{_ as b,u as k,c as m,b as s,a as t,w as a,n as u,F as w,r as n,o as h,e as y,p as x,d as C}from"./index-HdUWlvsZ.js";const D={data(){return{store:k(),passwordDialog:!1,rickrollDialog:!1,showRickroll:!1,clueDialog:!1,secretPassword:""}},methods:{handleLink1(){this.passwordDialog=!0},handleLink2(){this.rickrollDialog=!0,setTimeout(()=>{this.showRickroll=!0},5e3)},handleLink3(){this.$router.push({name:"regaloForm"})},handleLink4(){this.clueDialog=!0},handleCheckSecretPass(){this.secretPassword.toLowerCase()=="siete"?this.$router.push({name:"regalo-1"}):this.showSecretPassError()},showSecretPassError(){this.$toast.add({severity:"error",summary:"Vaya!",detail:"Parece que no conoces la contraseña... Sigue abriendo regalos para encontrarla!",life:3e3})}}},i=d=>(x("data-v-8cb18683"),d=d(),C(),d),S={class:"card m-3"},P={class:"flex flex-column justify-content-center align-items-center gap-4"},L=i(()=>s("img",{src:"https://fallen-soldiers.github.io/static/logo/fns_logo_light_large.png",class:"main-img-logo my-5"},null,-1)),j={class:"inline-flex align-items-center justify-content-center gap-2"},R=i(()=>s("span",{class:"font-bold white-space-nowrap"},"Fallen Soldiers",-1)),B={class:"flex flex-column justify-content-center align-items-center gap-3"},F=i(()=>s("span",{class:"p-text block m-0"},"Escribe la contraseña secreta para desbloquear el contenido:",-1)),I={class:"inline-flex align-items-center justify-content-center gap-2"},V=i(()=>s("span",{class:"font-bold white-space-nowrap"},"Fallen Soldiers",-1)),E={class:"flex flex-column justify-content-center align-items-center gap-3"},U={key:0,src:"https://fallen-soldiers.github.io/static/video/rickroll.mp4",controls:"",autoplay:"",loop:"",class:"responsive-video"},q={class:"inline-flex align-items-center justify-content-center gap-2"},T=i(()=>s("span",{class:"font-bold white-space-nowrap"},"Fallen Soldiers",-1)),z=i(()=>s("div",{class:"flex flex-column justify-content-center align-items-center gap-3"},[s("h3",{class:"text-center"},"Una pista te voy a dar. La suma o resta de dos números alfabetizados, ya mencionados, será la llave que toda puerta abrirá.")],-1));function A(d,e,N,O,l,r){const c=n("Button"),p=n("Avatar"),_=n("InputOtp"),f=n("Toast"),g=n("Dialog"),v=n("ProgressSpinner");return h(),m(w,null,[s("div",S,[s("div",P,[L,t(c,{label:"Regalo 1",severity:"contrast",class:"w-10 p-2 link-tree-btn",onClick:e[0]||(e[0]=o=>r.handleLink1())}),t(c,{label:"Regalo 2",severity:"contrast",class:"w-10 p-2 link-tree-btn",onClick:e[1]||(e[1]=o=>r.handleLink2())}),t(c,{label:"Regalo 3",severity:"contrast",class:"w-10 p-2 link-tree-btn",onClick:e[2]||(e[2]=o=>r.handleLink3())}),t(c,{label:"Pista",severity:"contrast",class:"w-10 p-2 link-tree-btn",onClick:e[3]||(e[3]=o=>r.handleLink4())})])]),t(g,{visible:l.passwordDialog,"onUpdate:visible":e[6]||(e[6]=o=>l.passwordDialog=o),modal:"",header:"Cargando datos...",style:{width:"25rem"},class:u(["custom-dialog"])},{header:a(()=>[s("div",j,[t(p,{image:"https://fallen-soldiers.github.io/static/logo/fns_logo_red_large.png",shape:"circle"}),R])]),default:a(()=>[s("div",B,[F,t(_,{modelValue:l.secretPassword,"onUpdate:modelValue":e[4]||(e[4]=o=>l.secretPassword=o),length:5},null,8,["modelValue"]),t(c,{label:"Enviar",severity:"success",class:"w-full",onClick:e[5]||(e[5]=o=>r.handleCheckSecretPass())})]),t(f)]),_:1},8,["visible"]),t(g,{visible:l.rickrollDialog,"onUpdate:visible":e[7]||(e[7]=o=>l.rickrollDialog=o),modal:"",header:"Cargando datos...",style:{width:"25rem"},class:u(["custom-dialog"])},{header:a(()=>[s("div",I,[t(p,{image:"https://fallen-soldiers.github.io/static/logo/fns_logo_red_large.png",shape:"circle"}),V])]),default:a(()=>[s("div",E,[l.showRickroll?(h(),m("video",U)):(h(),y(v,{key:1}))])]),_:1},8,["visible"]),t(g,{visible:l.clueDialog,"onUpdate:visible":e[8]||(e[8]=o=>l.clueDialog=o),modal:"",header:"Cargando datos...",style:{width:"25rem"},class:u(["custom-dialog"])},{header:a(()=>[s("div",q,[t(p,{image:"https://fallen-soldiers.github.io/static/logo/fns_logo_red_large.png",shape:"circle"}),T])]),default:a(()=>[z]),_:1},8,["visible"])],64)}const H=b(D,[["render",A],["__scopeId","data-v-8cb18683"]]);export{H as default};