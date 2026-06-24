const machines=[
{name:'SMH 80',ton:'80 Ton',mould:'570 × 570 mm',motor:'10 kW',desc:'Compact Hydroline machine for smaller moulding work and reliable production.'},
{name:'SMH 110',ton:'110 Ton',mould:'610 × 610 mm',motor:'15 kW',desc:'Balanced model for medium plastic parts with stable clamping.'},
{name:'SMH 150',ton:'150 Ton',mould:'760 × 760 mm',motor:'20 kW',desc:'Strong machine for regular manufacturing and better mould space.'},
{name:'SMH 250',ton:'250 Ton',mould:'970 × 970 mm',motor:'27 kW',desc:'Heavy-duty option for larger moulds and higher production needs.'},
{name:'SMH 350',ton:'350 Ton',mould:'1130 × 1130 mm',motor:'37 kW',desc:'Industrial machine for bigger components and continuous production.'},
{name:'SMH 650',ton:'650 Ton',mould:'1400 × 1400 mm',motor:'65 kW',desc:'High-capacity Hydroline model for large moulding applications.'}
];
const grid=document.getElementById('machineGrid');
const select=document.getElementById('machineSelect');
machines.forEach((m,i)=>{grid.innerHTML+=`<article class="card"><h3>${m.name}</h3><p>${m.desc}</p><ul><li>${m.ton}</li><li>Mould platen: ${m.mould}</li><li>Servo motor: ${m.motor}</li></ul><button class="btn" onclick="showDetails(${i})">View Details</button></article>`;select.innerHTML+=`<option value="${m.name}">${m.name} - ${m.ton}</option>`});
function showDetails(i){const m=machines[i];document.getElementById('machineDetails').classList.remove('hidden');document.getElementById('detailName').textContent=m.name+' Hydroline';document.getElementById('detailDesc').textContent=m.desc;document.getElementById('detailSpecs').innerHTML=`<div class="spec"><b>${m.ton}</b><span>Clamping Force</span></div><div class="spec"><b>${m.mould}</b><span>Mould Platen</span></div><div class="spec"><b>${m.motor}</b><span>Servo Motor</span></div><div class="spec"><b>Hydroline</b><span>Series</span></div>`;select.value=m.name;document.getElementById('machineDetails').scrollIntoView({behavior:'smooth'});}
document.getElementById('closeDetails').onclick=()=>document.getElementById('machineDetails').classList.add('hidden');
document.getElementById('menuBtn').onclick=()=>document.getElementById('nav').classList.toggle('active');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>document.getElementById('nav').classList.remove('active'));
document.getElementById('inquiryForm').addEventListener('submit',e=>{e.preventDefault();const data={name:name.value,phone:phone.value,machine:machineSelect.value,message:message.value,date:new Date().toLocaleString()};localStorage.setItem('supermac-last-inquiry',JSON.stringify(data));const text=`Supermac Inquiry%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AMachine: ${encodeURIComponent(data.machine)}%0AMessage: ${encodeURIComponent(data.message)}`;window.open(`https://wa.me/919998040433?text=${text}`,'_blank');});
function setOffline(){offlineBox.classList.toggle('hidden',navigator.onLine)};window.addEventListener('online',setOffline);window.addEventListener('offline',setOffline);setOffline();
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('service-worker.js'));}
