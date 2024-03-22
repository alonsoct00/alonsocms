"use strict";(self.webpackChunkalonsoctcms=self.webpackChunkalonsoctcms||[]).push([[7607],{47607:(_s,N,s)=>{s.d(N,{ReviewWorkflowsCreatePage:()=>Z});var t=s(92132),l=s(21272),z=s(85963),c=s(83997),V=s(43064),A=s(30893),D=s(91134),k=s(54514),h=s(61535),Y=s(54894),i=s(82437),H=s(17703),Q=s(42293),$=s(30979),o=s(62163),I=s(80646),P=s(64092),r=s(45084),O=s(25524),X=s(79445),ls=s(35658),rs=s(56336),is=s(48940),Es=s(12083),ds=s(15126),Ms=s(63299),Ds=s(67014),Ps=s(59080),Os=s(79275),gs=s(14718),ms=s(5790),fs=s(35223),vs=s(5409),cs=s(74930),hs=s(2600),Ls=s(41286),Cs=s(51187),Ts=s(39404),Rs=s(58692),Ws=s(54257),As=s(501),Is=s(57646),Bs=s(23120),Ks=s(44414),Us=s(25962),ys=s(14664),us=s(42588),ws=s(90325),js=s(62785),xs=s(87443),Ss=s(41032),ps=s(22957),Fs=s(93179),Ns=s(73055),zs=s(15747),Vs=s(85306),ks=s(77965),Ys=s(26509),Hs=s(84624),Qs=s(71210),$s=s(32058),Xs=s(81185),Zs=s(82261),Gs=s(12308);const Z=()=>{const{formatMessage:a}=(0,Y.A)(),{push:G}=(0,H.W6)(),{_unstableFormatAPIError:J,_unstableFormatValidationErrors:b}=(0,D.wq)(),_=(0,i.wA)(),E=(0,D.hN)(),{collectionTypes:B,singleTypes:K,isLoading:L}=(0,$.u)(),{isLoading:g,meta:U,workflows:m,createWorkflow:q}=(0,X.u)(),{isLoading:C,roles:y}=(0,Q.u)(),f=(0,i.d4)(o.s),ss=(0,i.d4)(o.a),n=(0,i.d4)(o.b),u=(0,i.d4)(o.c),[w,d]=l.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=l.useState(),[x,T]=l.useState({}),v=ts("review-workflows"),S=v?.[O.C],M=v?.[O.a],p=m?.flatMap(e=>e.contentTypes),F=async()=>{T({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:J(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),G(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{T({})},R=(0,h.Wx)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(W=>p?.includes(W));U&&S&&U?.workflowCount>=parseInt(S,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?T(W=>({...W,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(O.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&m&&_((0,o.d)({workflows:m})),L||_((0,o.e)({collectionTypes:B,singleTypes:K})),C||_((0,o.f)(y)),_((0,o.g)(L||C)),_((0,o.h)({name:""}))},[B,_,L,C,g,y,K,m]),l.useEffect(()=>{!g&&!j&&n.stages&&v?.[O.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,v,n.stages,M]),l.useEffect(()=>{!f&&u?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,f,u,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.D,{}),(0,t.jsx)(h.QI,{value:R,children:(0,t.jsxs)(h.lV,{onSubmit:R.handleSubmit,children:[(0,t.jsx)(P.H,{navigationAction:(0,t.jsx)(P.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(z.$,{startIcon:(0,t.jsx)(k.A,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(P.R,{children:(0,t.jsx)(c.s,{alignItems:"stretch",direction:"column",gap:7,children:f?(0,t.jsx)(V.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(c.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:R.values?.stages})]})})})]})}),(0,t.jsx)(D.TM.Root,{isConfirmButtonLoading:f,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(D.TM.Body,{children:(0,t.jsxs)(c.s,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:p?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:w==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:w==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
