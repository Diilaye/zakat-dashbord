"use strict";(self.webpackChunkzakat=self.webpackChunkzakat||[]).push([[592],{6834:(E,u,t)=>{t.d(u,{J:()=>c});var l=t(5226),s=t.n(l),i=t(4650);let c=(()=>{class r{constructor(){}ngOnInit(){}basicAlert(){s().fire("Any fool can use a computer")}withConfirmation(a="Are you sure?",n="You won't be able to revert this!",h="Yes, delete it!",e="Cancel"){return s().fire({title:a,text:n,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:h,cancelButtonText:e})}handleMessageSuccesDelete(a){s().fire("Deleted!",`${a}`,"success")}}return r.\u0275fac=function(a){return new(a||r)},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6576:(E,u,t)=>{t.d(u,{p:()=>a});var l=t(529),s=t(2843),i=t(262),c=t(2340),r=t(4650),_=t(7185);let a=(()=>{class n{constructor(e,o){this.http=e,this.toastr=o,this.url=c.N.url,this.api=`${this.url}/transactions`,this.statusList=[{text:"En attente",value:"PENDING"},{text:"Valid\xe9",value:"VALID"},{text:"Annul\xe9",value:"CANCELED"}],this.headers=new l.WM({Authorization:"Bearer "+localStorage.getItem("token")})}getAll(){return this.http.get(this.api,{headers:this.headers}).pipe((0,i.K)(e=>(console.log("error serveur!!"),this.toastr.error("Une erreur est survenue."),(0,s._)(e))))}delete(e){return this.http.delete(`${this.api}/${e}`,{headers:this.headers}).pipe((0,i.K)(o=>(console.log("error serveur!! "+JSON.stringify(o)),this.toastr.error("Suppression : Une erreur est survenue."),(0,s._)(o))))}getByType(e){return console.log(this.api),this.http.get(`${this.api}?type=${e}`,{headers:this.headers}).pipe((0,i.K)(o=>(console.log("error serveur!!"),this.toastr.error("Une erreur est survenue."),(0,s._)(o))))}filterListByRef(e,o,v){return console.log("ref "+e),""!==e?(console.log("ref not emp "+e),o=v.filter(d=>d.reference.toLowerCase().includes(e.toLowerCase()))):(console.log("ref emp"+e),o=v),o}}return n.\u0275fac=function(e){return new(e||n)(r.LFG(l.eN),r.LFG(_._W))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);