"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[962],{1962:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var n=s(8683),r=s(5671),o=s(3144),i=s(136),a=s(516),u=s(2791),l=s(885),c="ProfileInfo_descriptionBlock__tv5jO",d="ProfileInfo_contact__DdAPu",p="ProfileInfo_formSummeryError__x33KM",f=s(5399),h=s(184),v=function(e){var t=(0,u.useState)(!1),s=(0,l.Z)(t,2),n=s[0],r=s[1],o=(0,u.useState)(e.status),i=(0,l.Z)(o,2),a=i[0],c=i[1];(0,u.useEffect)((function(){c(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[!n&&(0,h.jsxs)("div",{children:["Status:",(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:a})]}),n&&(0,h.jsxs)("div",{children:["Status:",(0,h.jsx)("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(a)},onChange:function(e){c(e.currentTarget.value)},value:a})]})]})},x=s(4353),j=s(6139),m=s(704),P=s(77),g=s(8349),k=(0,g.W)("input"),b=(0,g.W)("textarea"),Z=(0,P.D)(30),S=(0,m.Z)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,n=e.error;return(0,h.jsxs)("form",{onSubmit:t,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{children:"save"}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{className:p,children:n})})]}),(0,h.jsxs)("h2",{children:[" Full name:",(0,h.jsx)(j.Z,{component:k,name:"fullName",placeholder:"Full Name",validate:[]})]}),(0,h.jsxs)("div",{children:["Searching for a job:",(0,h.jsx)(j.Z,{component:k,name:"lookingForAJob",validate:[],type:"checkbox"})]}),(0,h.jsxs)("div",{children:["About me:",(0,h.jsx)(j.Z,{component:k,name:"aboutMe",placeholder:"About Me",validate:[]})]}),(0,h.jsxs)("div",{children:["My professional skills:",(0,h.jsx)(j.Z,{component:b,name:"lookingForAJobDescription",placeholder:"Enter your skills",validate:[P.C,Z]})]}),(0,h.jsxs)("div",{children:["Contacts ",Object.keys(s.contacts).map((function(e,t){return(0,h.jsx)("div",{className:d,children:(0,h.jsxs)("div",{children:[e,":",(0,h.jsx)(j.Z,{component:k,name:"contacts."+e,validate:[],placeholder:e})]})},t)}))]})]})})),_=function(e){var t=e.contactTitle,s=e.contactValue;return(0,h.jsxs)("div",{className:d,children:[t,":",s]})},y=function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:e.profile.fullName}),(0,h.jsx)("div",{children:e.isOwner?(0,h.jsx)("button",{onClick:e.activateEditMode,children:"edit"}):""}),(0,h.jsxs)("div",{children:["Searching for a job: ",e.profile.lookingForAJob?"yes":"no"]}),(0,h.jsxs)("div",{children:["About me: ",e.profile.aboutMe]}),(0,h.jsxs)("div",{children:["My professional skills: ",e.profile.lookingForAJobDescription]}),(0,h.jsxs)("div",{children:["Contacts ",Object.keys(e.profile.contacts).map((function(t,s){return(0,h.jsx)(_,{contactTitle:t,contactValue:e.profile.contacts[t]},s)}))]})]})},C=function(e){var t=e.profile,s=e.status,n=e.updateStatus,r=e.isOwner,o=e.savePhoto,i=e.saveProfile,a=(0,u.useState)(!1),d=(0,l.Z)(a,2),p=d[0],j=d[1];if(!t)return(0,h.jsx)(f.Z,{});return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("img",{src:t.photos.large||x,alt:"avatar"}),r&&(0,h.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}}),p?(0,h.jsx)(S,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){j(!1)}))}}):(0,h.jsx)(y,{profile:t,isOwner:r,activateEditMode:function(){j(!0)}}),(0,h.jsx)(v,{status:s,updateStatus:n})]})})},w=s(6070),A="MyPosts_postsBlock__IYssI",I="MyPosts_posts__ofBDy",D="Post_item__KQEHL",M=function(e){return(0,h.jsxs)("div",{className:D,children:[(0,h.jsx)("img",{src:"https://wallpapercave.com/uwp/uwp753612.png",alt:"description of image"}),e.message,(0,h.jsx)("div",{children:(0,h.jsxs)("span",{children:["likes ",e.likesCount]})})]})},N=(0,g.W)("textarea"),O=(0,P.D)(30),E=(0,m.Z)({form:"ProfileAddPostForm"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(j.Z,{component:N,name:"newPostText",placeholder:"Enter your text",validate:[P.C,O]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:(0,h.jsx)("h3",{children:"Add post"})})})]})})),F=u.memo((function(e){var t=e.postsElements.map((function(e){return(0,h.jsx)(M,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,h.jsxs)("div",{className:A,children:[(0,h.jsx)("h2",{children:"Posts"}),(0,h.jsx)(E,{onSubmit:function(t){e.addPost(t.newPostText)}}),(0,h.jsx)("div",{className:I,children:t})]})})),T=s(8687),U=(0,T.$j)((function(e){return{newPostText:e.profilePage.newPostText,postsElements:e.profilePage.posts}}),(function(e){return{addPost:function(t){e((0,w.Wl)(t))}}}))(F),J=function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)(C,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,h.jsx)(U,{})]})},z=s(7689),B=s(7781),W=s(1548),V=function(e){(0,i.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,r.Z)(this,s),t.apply(this,arguments)}return(0,o.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(J,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(u.Component);var $=(0,B.qC)((0,T.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:w.et,getStatus:w.lR,updateStatus:w.Nf,savePhoto:w.Ju,saveProfile:w.Ii}),(function(e){return function(t){var s=(0,z.TH)(),r=(0,z.s0)(),o=(0,z.UO)();return(0,h.jsx)(e,(0,n.Z)((0,n.Z)({},t),{},{router:{location:s,navigate:r,params:o}}))}}),W.D)(V)},1548:function(e,t,s){s.d(t,{D:function(){return f}});var n=s(8683),r=s(5671),o=s(3144),i=s(136),a=s(516),u=s(7689),l=s(2791),c=s(8687),d=s(184),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){(0,i.Z)(l,t);var s=(0,a.Z)(l);function l(){return(0,r.Z)(this,l),s.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(p)(t)}}}]);
//# sourceMappingURL=962.0fcfd156.chunk.js.map