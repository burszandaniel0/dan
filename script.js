setInterval(()=>{
const now=new Date();
const diff=new Date(now.getFullYear(),8,1)-now;
const sign=diff<0?"-":"";
let rem=Math.abs(diff);
const mo=Math.floor(rem/2629800000);rem%=2629800000;
const wk=Math.floor(rem/604800000);rem%=604800000;
const d=Math.floor(rem/86400000);rem%=86400000;
const h=Math.floor(rem/3600000);rem%=3600000;
const m=Math.floor(rem/60000);rem%=60000;
const s=(rem/1000).toFixed(3).padStart(6,"0");
const n=document.getElementById("countdown");
const t=document.getElementById("totalcount");
if(n)n.textContent=`${sign}${mo}m ${wk}w ${d}d ${h}h ${m}m ${s}s`;
if(t)t.textContent=`${(diff/1000).toFixed(3)}s`;
},33);