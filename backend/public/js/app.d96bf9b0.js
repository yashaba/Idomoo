(function(){"use strict";var e={1178:function(e,t,a){var o=a(5130),r=a(6768),n=a(4232),i=a.p+"img/loader.d7ea7e0f.svg";const s=e=>((0,r.Qi)("data-v-4e4caf96"),e=e(),(0,r.jt)(),e),l={key:0,class:"main-container"},d={class:"title"},u={class:"storyboard-info"},c={class:"styled-container"},m={key:0,class:"preview"},f=s((()=>(0,r.Lk)("h2",null,"Preview",-1))),p=["src"],y={key:1,class:"preview"},b=s((()=>(0,r.Lk)("h2",null,"Video Preview",-1))),v={style:{"text-align":"center","min-height":"300px","min-width":"420px"}},g={key:1},h=s((()=>(0,r.Lk)("img",{class:"spinner",src:i},null,-1))),k=[h],L={key:1};function E(e,t,a,o,i,s){const h=(0,r.g2)("IdomooForm"),E=(0,r.g2)("VideoPlayer"),F=(0,r.g2)("Toast");return(0,r.uX)(),(0,r.CE)("div",null,[e.storyboard?((0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("div",d,[(0,r.Lk)("h1",null,(0,n.v_)(e.storyboard.name)+" "+(0,n.v_)(e.storyboard.storyboard_id),1)]),(0,r.Lk)("div",null,[(0,r.Lk)("div",u,[(0,r.bF)(h,{onFormPosted:e.generateVideo,isLoading:e.isLoading,storyboard:e.storyboard},null,8,["onFormPosted","isLoading","storyboard"]),(0,r.Lk)("div",c,[e.url?((0,r.uX)(),(0,r.CE)("div",y,[b,(0,r.Lk)("div",v,[e.isLoading?((0,r.uX)(),(0,r.CE)("div",g,k)):((0,r.uX)(),(0,r.Wv)(E,{key:0,url:e.url},null,8,["url"])),(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...t)=>e.generateLandingPage&&e.generateLandingPage(...t)),class:"styled-button"},"Generate Landing Page")])])):((0,r.uX)(),(0,r.CE)("div",m,[f,(0,r.Lk)("img",{src:e.storyboard.thumbnail,alt:"",srcset:""},null,8,p)]))])])])])):((0,r.uX)(),(0,r.CE)("div",L,"Loading Story Board")),(0,r.bF)(F)])}a(4603),a(7566),a(8721);var F=a(4373);const w=F.A.create({baseURL:`http://localhost:${{NODE_ENV:"production",BASE_URL:"/"}.PORT||3e3}`,headers:{"Content-Type":"application/json"}}),_=e=>w.get(`/storyboards/${e}`),N=e=>w.post("/storyboards/generate-video",e),C=e=>w.post("http://localhost:3000/generate-landing-page",e,{responseType:"blob"}),V=async e=>{const t=20,a=1e3;for(let r=0;r<t;r++)try{const t=await F.A.get(e),o=t.data.status;if("VIDEO_AVAILABLE"===o)return!0;if("ERROR"===o||"NOT_EXIST"===o)return!1;await new Promise((e=>setTimeout(e,a)))}catch(o){throw console.error(`Error fetching video status: ${o}`),new Error("Failed to retrieve video status")}return!1},A=e=>((0,r.Qi)("data-v-a6223306"),e=e(),(0,r.jt)(),e),P={class:"form-container styled-container"},O=A((()=>(0,r.Lk)("h2",null,"Enter the details below in order to generate your video",-1))),T={class:"flex"},I=A((()=>(0,r.Lk)("label",{for:"firstName"},"First Name",-1))),X=A((()=>(0,r.Lk)("label",{for:"lastName"},"Last Name",-1))),S={key:0,class:"form-group"},U=["for"],$={class:"media-container"},j={key:1,class:"form-group"},x=["for"],R=["id","onUpdate:modelValue"],D=["disabled"],M={key:0},B={key:1,class:"spinner",src:i};function z(e,t,a,i,s,l){const d=(0,r.g2)("InputText"),u=(0,r.g2)("FloatLabel"),c=(0,r.g2)("ColorPicker"),m=(0,r.g2)("FileUpload"),f=(0,r.g2)("Toast");return(0,r.uX)(),(0,r.CE)("div",P,[(0,r.Lk)("form",{onSubmit:t[2]||(t[2]=(0,o.D$)(((...t)=>e.submitForm&&e.submitForm(...t)),["prevent"])),class:"styled-form"},[O,(0,r.Lk)("div",T,[(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{id:"firstName",modelValue:e.form.firstName,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.firstName=t)},null,8,["modelValue"]),I])),_:1}),(0,r.bF)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(d,{id:"lastName",modelValue:e.form.lastName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.lastName=t)},null,8,["modelValue"]),X])),_:1})]),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.storyboard.data,((t,a)=>((0,r.uX)(),(0,r.CE)("div",{key:a},[t.key.includes("Media")?((0,r.uX)(),(0,r.CE)("div",S,[(0,r.Lk)("label",{for:`data-${a}`,class:"styled-label"},(0,n.v_)(t.key)+":",9,U),(0,r.Lk)("div",$,[(0,r.bF)(c,{modelValue:t.val,"onUpdate:modelValue":e=>t.val=e,format:"rgb"},null,8,["modelValue","onUpdate:modelValue"]),(0,r.bF)(m,{ref_for:!0,ref:"fileupload",mode:"basic",name:"demo[]",accept:"image/*",auto:"false",maxFileSize:1e6,onSelect:t=>e.onUpload(t,a)},null,8,["onSelect"])])])):((0,r.uX)(),(0,r.CE)("div",j,[(0,r.Lk)("label",{for:`data-${a}`,class:"styled-label"},(0,n.v_)(t.key)+":",9,x),(0,r.bo)((0,r.Lk)("input",{type:"text",id:`data-${a}`,"onUpdate:modelValue":e=>t.val=e,class:"styled-input"},null,8,R),[[o.Jo,t.val]])]))])))),128)),(0,r.Lk)("button",{disabled:e.isValid,type:"submit",class:"styled-button"},[e.isLoading?((0,r.uX)(),(0,r.CE)("img",B)):((0,r.uX)(),(0,r.CE)("span",M,"Generate Video"))],8,D)],32),(0,r.bF)(f)])}var G=a(4511),Q=a(1973),J=a(7214),K=a(1114);class W{constructor(){(0,K.A)(this,"clientId","1ba9a58305fcdf8")}async uploadFile(e){return new Promise(((t,a)=>{const o=e.files[0],r=new FileReader;r.onloadend=async()=>{const e=r?.result,o=e.split(",")[1];try{const e=await F.A.post("https://api.imgur.com/3/image",{image:o,type:"base64"},{headers:{Authorization:`Client-ID ${this.clientId}`}});t(e.data.data.link)}catch(n){console.error("Error uploading image:",n),a(n)}},r.onerror=e=>a(e),r.readAsDataURL(o)}))}}const q=new W;var H=a(6338),Y=a(4127),Z=(0,r.pM)({name:"IdomooForm",components:{ColorPicker:G.A,FileUpload:Q.A,Toast:J.A,InputText:H.A,FloatLabel:Y.A},props:{storyboard:Object,isLoading:Boolean},data(){return{url:"",form:{firstName:"",lastName:""}}},computed:{isValid(){return!this.form.firstName||!this.form.lastName}},methods:{convertRgbToString(e){return`rgb(${e.r}, ${e.g}, ${e.b})`},async onUpload(e,t){try{const a=await q.uploadFile(e);a&&(this.storyboard.data[t].val=a)}catch(a){this.$toast.add({severity:"error",summary:"Error while uploading file",detail:a.response.data.data.error||"",life:3e3})}},submitForm(){this.form.lastName&&this.form.firstName&&this.storyboard&&this.storyboard.data&&(this.storyboard.data.forEach((e=>{"object"===typeof e.val&&void 0!==e.val.r&&(e.val=this.convertRgbToString(e.val))})),this.$emit("formPosted",{...this.form,...this.storyboard.data}))}}}),ee=a(1241);const te=(0,ee.A)(Z,[["render",z],["__scopeId","data-v-a6223306"]]);var ae=te;const oe={id:"idm-player"};function re(e,t,a,o,n,i){return(0,r.uX)(),(0,r.CE)("div",oe)}var ne=(0,r.pM)({name:"VideoPlayer",props:{url:String},mounted(){const e={interactive:!0,size:"hd",src:this.url,autoplay:!1,mute:!0};idmPlayerCreate(e,"idm-player")}});const ie=(0,ee.A)(ne,[["render",re],["__scopeId","data-v-654940c0"]]);var se=ie,le=(0,r.pM)({components:{IdomooForm:ae,VideoPlayer:se,Toast:J.A},data(){return{storyboard:null,storyboardId:5111457,url:"",formData:{lastName:"",firstName:""},isLoading:!1}},created(){const e=this.storyboardId;_(e).then((e=>{this.storyboard=e.data})).catch((e=>{console.error("Failed to fetch storyboard:",e),this.$toast.add({severity:"error",summary:"Failed to fetch storyboard",detail:"",life:3e3})}))},methods:{async generateVideo(e){this.isLoading=!0,this.formData=e;const t=await N(this.storyboard),a=await V(t.data.check_status_url);a&&(this.url=t.data.output.video[0].links.url),this.isLoading=!1},generateLandingPage(){const e={lastName:this.formData.lastName,firstName:this.formData.firstName,url:this.url};C(e).then((e=>{const t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)})).catch((e=>{console.error("Error generating landing page:",e),this.$toast.add({severity:"error",summary:"Error generating landing page",detail:"",life:3e3})}))}}});const de=(0,ee.A)(le,[["render",E],["__scopeId","data-v-4e4caf96"]]);var ue=de,ce=a(8253),me=a(8928),fe=a(9890);(0,o.Ef)(ue).use(ce.Ay,{theme:{preset:fe.A}}).use(me.A).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,n){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],n=e[u][2];for(var s=!0,l=0;l<o.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[o,r,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,n,i=o[0],s=o[1],l=o[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(t&&t(o);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},o=self["webpackChunkmy_vue_ts_app"]=self["webpackChunkmy_vue_ts_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(1178)}));o=a.O(o)})();
//# sourceMappingURL=app.d96bf9b0.js.map