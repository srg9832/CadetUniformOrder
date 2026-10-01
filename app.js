const CFG = window.UNIFORM_APP_CONFIG || {};
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const app = $('#app');

const DEMO_PRODUCTS = [
  {id:'OCP-HAT-VG',name:'OCP Flat-Top Cap',category:'OCP Uniform',component:'Headgear',description:'CAP OCP flat-top cap with loop on back.',price:14.45,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-uniform-ocp-cap-flat-top',options:'6 3/4|7|7 1/4|7 1/2|7 3/4',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-HAT-AMZ',name:'OCP Cap - Amazon option',category:'OCP Uniform',component:'Headgear',description:'Alternate OCP cap from Amazon. Current price should be checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/dp/B098KWXLSY?th=1',options:'Select size at supplier',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true},

  {id:'OCP-COAT-A-VG',name:'OCP Coat - Adult',category:'OCP Uniform',component:'Coat',description:'Vanguard hot-weather adult OCP coat.',price:69,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-ocp-uniform-adult-shirt-1',options:'X-Small|Small|Medium|Large|X-Large|2XL',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-COAT-Y-VG',name:'OCP Coat - Youth',category:'OCP Uniform',component:'Coat',description:'Vanguard youth OCP coat.',price:59.20,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-ocp-uniform-youth-shirt',options:'Youth 8|Youth 10|Youth 12',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-COAT-AMZ',name:'Propper OCP Coat - Amazon option',category:'OCP Uniform',component:'Coat',description:'Alternate Propper hot-weather OCP coat. Price is checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/Propper-Weather-Combat-Uniform-Extra/dp/B08DS6RBVT',options:'Select supplier size',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true},

  {id:'OCP-PANTS-A-VG',name:'OCP Trousers - Adult',category:'OCP Uniform',component:'Trousers',description:'Vanguard hot-weather adult OCP trousers.',price:69,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-ocp-uniform-adult-pants-ocp',options:'X-Small|Small|Medium|Large|X-Large|2XL',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-PANTS-Y-VG',name:'OCP Trousers - Youth',category:'OCP Uniform',component:'Trousers',description:'Vanguard youth OCP trousers. Vanguard notes these are not recommended for people over 5 ft 4 in.',price:59.20,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/civil-air-patrol-abu-uniform-youth-pants',options:'Youth 8|Youth 10|Youth 12',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-PANTS-AMZ',name:'Propper OCP Trousers - Amazon option',category:'OCP Uniform',component:'Trousers',description:'Alternate Propper hot-weather OCP trousers. Price is checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/Propper-Weather-Uniform-Trouser-Regular/dp/B08DS7GDJ1',options:'Select supplier size',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true},

  {id:'OCP-BELT-39-VG',name:'Tan 499 Rigger Belt - 39 inch',category:'OCP Uniform',component:'Belt',description:'Vanguard 39-inch Tan 499 rigger belt with buckle.',price:9.85,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-rigger-belt-khaki-nylon-39-waist-rigger-belt-with-buckle',options:'39 inches',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-BELT-VG',name:'Tan 499 Rigger Belt - 44/55 inch',category:'OCP Uniform',component:'Belt',description:'Vanguard Tan 499 rigger belt with buckle.',price:14.10,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-rigger-belt-khaki-nylon-rigger-belt-with-buckle',options:'44 inches|55 inches',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-BELT-AMZ',name:'Tan 499 Belt - Amazon option',category:'OCP Uniform',component:'Belt',description:'Alternate Tan 499 belt. Price is checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/gp/product/B01M20UIVA?th=1',options:'Select supplier size',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true},

  {id:'BLOUSING-LOCAL',name:'Blousing Bands - 1 pair',category:'OCP Uniform',component:'Blousing bands',description:'One pair from the unit bulk supply. Admin sets the current per-pair bulk cost.',price:0,source:'Local',sourceUrl:'https://www.amazon.com/CABODYALS-Military-Stretchy-Polyester-Gardening/dp/B0GQT65R1Q/',options:'',customLabel:'',active:false,required:true,verified:'Set current bulk cost',paymentHold:true},
  {id:'BLOUSING-VG',name:'Blousing Bands - Vanguard pair',category:'OCP Uniform',component:'Blousing bands',description:'Vanguard khaki trouser blousers, priced per pair.',price:2.70,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/khaki-trouser-blousers-boot-bands',options:'',customLabel:'',active:true,required:false,verified:'Vanguard verified 2026-09-29'},

  {id:'UNIT-TSHIRT',name:'Unit Coyote T-Shirt',category:'OCP Uniform',component:'T-Shirt',description:'Default unit shirt made locally with DTF transfer. Sold at the current material cost.',price:0,source:'Local',sourceUrl:'',options:'Adult S|Adult M|Adult L|Adult XL|Adult 2XL|Adult 3XL',customLabel:'',active:false,required:true,verified:'Set current material cost',paymentHold:true,recommended:true},
  {id:'OCP-TSHIRT-VG',name:'Plain Coyote OCP T-Shirt',category:'OCP Uniform',component:'T-Shirt',description:'Plain Vanguard OCP coyote-brown T-shirt.',price:8.00,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-uniform-t-shirt-coyote-brown',options:'Small|Medium|Large|X-Large|2XL|3XL',customLabel:'',active:true,required:false,verified:'Vanguard verified 2026-09-29'},
  {id:'OCP-TSHIRT-AMZ6',name:'Coyote T-Shirts - Amazon 6-pack',category:'OCP Uniform',component:'T-Shirt',description:'Bulk six-pack option. User-provided current reference: $59.99 (~$10 each).',price:59.99,source:'Amazon',sourceUrl:'https://www.amazon.com/dp/B07T76FNV8?th=1',options:'Select pack size',customLabel:'',active:false,required:false,verified:'User reference 2026-09-29; verify before ordering',paymentHold:true},

  {id:'NAME-TAPE',name:'OCP Name Tape - Hook Back',category:'Insignia & Patches',component:'Name tape',description:'Dark blue embroidered last-name tape with black hook closure.',price:4.65,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/cap-embroidered-name-tape-last-name-only-w-black-hook-closure-not-civil-air-patrol-new-insignia',options:'',customLabel:'Last name exactly as it should appear',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'CAP-TAPE',name:'CIVIL AIR PATROL Tape - Hook Back',category:'Insignia & Patches',component:'CAP tape',description:'Blue CAP tape with hook closure for the OCP uniform.',price:4.15,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-tape-civil-air-patrol-with-black-hook-closure-new-insignia',options:'',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'WING-PATCH',name:'Montana Wing Patch - Hook Back',category:'Insignia & Patches',component:'Wing patch',description:'Montana Wing patch with hook backing.',price:5.10,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/civil-air-patrol-patch-montana-wing-w-hook',options:'',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'UNIT-PATCH',name:'Unit Patch',category:'Insignia & Patches',component:'Unit patch',description:'Locally supplied unit patch. Admin sets the current at-cost price.',price:0,source:'Local',sourceUrl:'',options:'',customLabel:'',active:false,required:true,verified:'Set local cost',paymentHold:true},
  {id:'AUX-PATCH',name:'AUX Patch - Hook Back',category:'Insignia & Patches',component:'AUX patch',description:'Civil Air Patrol AUX patch with hook backing.',price:3.00,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-aux-with-hook-embroidered-civil-air-patrol-new-insignia',options:'',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},
  {id:'FLAG-LOCAL',name:'Reverse U.S. Flag - Amazon 2-pack allocation',category:'Insignia & Patches',component:'Flag',description:'Reverse U.S. flag sourced from the Amazon two-pack. Admin sets the current per-piece at-cost price.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/Tactical-Patches-Reverse-American-Military/dp/B0CZVTZC8Z',options:'1 flag',customLabel:'',active:false,required:true,verified:'Set current bulk cost',paymentHold:true,recommended:true},
  {id:'FLAG-VG',name:'Reverse U.S. Flag - Vanguard',category:'Insignia & Patches',component:'Flag',description:'Reverse U.S. flag with hook closure and gold edge.',price:6.30,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/flag-patch-united-states-of-america-hook-closure-gold-edge-reversed',options:'',customLabel:'',active:true,required:false,verified:'Vanguard verified 2026-09-29'},
  {id:'RANK-NCO',name:'OCP/Fleece Rank Tab',category:'Insignia & Patches',component:'Rank',description:'Required OCP/fleece rank tab for cadets. Vanguard may still use older NCO wording on the supplier listing.',price:2.15,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/civil-air-patrol-fleece-rank-non-commissioned-officers-new-insignia',options:'',customLabel:'',active:true,required:true,verified:'Vanguard verified 2026-09-29'},

  {id:'BOOTS-AMZ',name:'Coyote Boots - Amazon option',category:'Footwear',component:'Boots',description:'NORTIV 8 coyote tactical boot option. Price and size availability checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/NORTIV-Military-Tactical-Leather-Motorcycle/dp/B0CFTD9K8N?th=1&tag=supersavin0cc-20',options:'Select boot size',customLabel:'',active:false,required:true,verified:'Live price not stored',paymentHold:true,recommended:true},
  {id:'BOOTS-VG',name:'Coyote Boots - Vanguard',category:'Footwear',component:'Boots',description:'Vanguard CAP coyote side-zip boots.',price:119.90,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/products/civil-air-patrol-coyote-boots-side-zip-unisex',options:'3|4|5|6|7|7.5|8|8.5|9|9.5|10|10.5|11|11.5|12|13|14|15',customLabel:'',active:true,required:false,verified:'Vanguard verified 2026-09-29; low stock'},
  {id:'BOOTS-WM',name:'Coyote Boots - Walmart option',category:'Footwear',component:'Boots',description:'Walmart Interceptor tactical boot option. Price and size availability checked before payment.',price:0,source:'Walmart',sourceUrl:'https://www.walmart.com/ip/Men-s-Interceptor-Frontier-6-Inch-Tactical-Boot/206143379',options:'Select boot size',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true},
  {id:'SOCKS-LOCAL',name:'Boot Socks',category:'Footwear',component:'Socks',description:'Boot socks sold by the pair from unit bulk supply. Choose how many pairs are needed.',price:3.67,source:'Local',sourceUrl:'',options:'',customLabel:'',active:true,required:false,verified:'User bulk cost: $3.67/pair'},

  {id:'FLEECE-VG',name:'Tan 499 Fleece Jacket - Vanguard',category:'Cold Weather',component:'Fleece',description:'Tan 499 fleece jacket. Size must be checked before payment because stock is frequently limited.',price:50.00,source:'Vanguard',sourceUrl:'https://www.vanguardmil.com/collections/cap-ocp/products/civil-air-patrol-uniform-fleece-jacket-tan-499',options:'X-Small|Small|Medium|Large|X-Large|2XL|3XL',customLabel:'',active:false,required:false,verified:'Vanguard verified 2026-09-29; low stock',paymentHold:true,availabilityCheck:true},
  {id:'FLEECE-AMZ',name:'Tan 499 Propper Fleece - Amazon option',category:'Cold Weather',component:'Fleece',description:'Propper Gen III Tan 499 fleece option. Price and size availability checked before payment.',price:0,source:'Amazon',sourceUrl:'https://www.amazon.com/Propper-F549407233L2-Jacket-Large-Regular/dp/B081T6FG99',options:'Select supplier size',customLabel:'',active:false,required:false,verified:'Live price not stored',paymentHold:true,availabilityCheck:true}
];

const DEMO_KITS = [
  {id:'KIT-OCP',name:'New Cadet OCP Starter',description:'Walk through every major part of the new OCP uniform. Choose a supplier for each part, skip anything already owned, and add optional cold-weather items if needed.'}
];

const OCP_STARTER_GROUPS = [
  {name:'1. Headgear',required:true,choices:['OCP-HAT-VG'],default:'OCP-HAT-VG'},
  {name:'2. OCP Coat',required:true,choices:['OCP-COAT-A-VG','OCP-COAT-Y-VG'],default:'OCP-COAT-A-VG',combined:true,combinedLabel:'OCP Coat'},
  {name:'3. OCP Trousers',required:true,choices:['OCP-PANTS-A-VG','OCP-PANTS-Y-VG'],default:'OCP-PANTS-A-VG',combined:true,combinedLabel:'OCP Trousers'},
  {name:'4. Tan 499 Belt',required:true,choices:['OCP-BELT-39-VG','OCP-BELT-VG'],default:'OCP-BELT-39-VG',combined:true,combinedLabel:'Tan 499 Rigger Belt'},
  {name:'5. Blousing Bands',required:true,choices:['BLOUSING-LOCAL','BLOUSING-VG'],default:'BLOUSING-LOCAL'},
  {name:'6. Coyote T-Shirt',required:true,choices:['UNIT-TSHIRT'],default:'UNIT-TSHIRT'},
  {name:'7. Name Tape',required:true,choices:['NAME-TAPE'],default:'NAME-TAPE'},
  {name:'8. CIVIL AIR PATROL Tape',required:true,choices:['CAP-TAPE'],default:'CAP-TAPE'},
  {name:'9. Montana Wing Patch',required:true,choices:['WING-PATCH'],default:'WING-PATCH'},
  {name:'10. Unit Patch',required:true,choices:['UNIT-PATCH'],default:'UNIT-PATCH'},
  {name:'11. AUX Patch',required:true,choices:['AUX-PATCH'],default:'AUX-PATCH'},
  {name:'12. Reverse U.S. Flag',required:true,choices:['FLAG-VG'],default:'FLAG-VG'},
  {name:'13. Coyote Boots',required:true,choices:['BOOTS-VG'],selfLinks:['BOOTS-AMZ','BOOTS-VG'],default:'BOOTS-VG',defaultSelf:true,bootWarning:true},
  {name:'14. Boot Socks',required:false,choices:['SOCKS-LOCAL'],default:'SOCKS-LOCAL',selected:true},
  {name:'15. Rank / Grade Tab',required:true,choices:['RANK-NCO'],default:'RANK-NCO'},
  {name:'16. Tan 499 Fleece (optional)',required:false,choices:['FLEECE-VG'],default:'FLEECE-VG',selected:false}
]

const SIZE_GUIDES = {
  'OCP-HAT-VG': {title:'OCP Cap Size Guide', note:'Measure around the head about 1/2 inch above the eyebrows, keeping the tape level.', columns:['Cap size','Head circumference'], rows:[['6 3/4','20 1/2 in'],['7','21 7/8 in'],['7 1/4','22 1/4 in'],['7 1/2','23 in'],['7 3/4','24 in']]},
  'OCP-COAT-A-VG': {title:'Adult OCP Coat Size Guide', note:'Use body chest and waist measurements. Back and sleeve measurements are garment guidance.', columns:['Size','Chest','Waist','Back length','Over-arm sleeve'], rows:[['X-Small','33 in','23-27 in','30 in','32 in'],['Small','33-37 in','27-31 in','30 in','33.5 in'],['Medium','37-41 in','31-35 in','31 in','35 in'],['Large','41-45 in','35-39 in','31 in','36 in'],['X-Large','45-49 in','39-43 in','31.5 in','37 in'],['2XL','49-53 in','43-47 in','32 in','38 in']]},
  'OCP-COAT-Y-VG': {title:'Youth OCP Coat Size Guide', note:'Use chest and waist measurements first, then compare sleeve and back length.', columns:['Size','Chest','Waist','Back length','Over-arm sleeve'], rows:[['Youth 8','35 in','34 in','26.5 in','29 in'],['Youth 10','36 in','34.5 in','27 in','30 in'],['Youth 12','37 in','35 in','28 in','31 in']]},
  'OCP-PANTS-A-VG': {title:'Adult OCP Trouser Size Guide', note:'These are regular-length trousers.', columns:['Size','Waist','Inseam'], rows:[['X-Small','24-27 in','29.5-32.5 in'],['Small','27-31 in','29.5-32.5 in'],['Medium','31-35 in','29.5-32.5 in'],['Large','35-39 in','29.5-32.5 in'],['X-Large','39-43 in','29.5-32.5 in'],['2XL','43-47 in','29.5-32.5 in']]},
  'OCP-PANTS-Y-VG': {title:'Youth OCP Trouser Size Guide', note:'Vanguard notes youth pants are not recommended for people over 5 ft 4 in.', columns:['Size','Waist','Inseam'], rows:[['Youth 8','24 in','24 in'],['Youth 10','25 in','25 in'],['Youth 12','26-29.5 in','26 in']]},
  'OCP-COAT-COMBINED': {title:'OCP Coat Size Guide', note:'Choose the size that best matches chest and waist measurements. Youth and adult prices are selected automatically from the matching Vanguard item.', columns:['Size','Chest','Waist','Back length','Over-arm sleeve','Type'], rows:[['Youth 8','35 in','34 in','26.5 in','29 in','Youth'],['Youth 10','36 in','34.5 in','27 in','30 in','Youth'],['Youth 12','37 in','35 in','28 in','31 in','Youth'],['X-Small','33 in','23-27 in','30 in','32 in','Adult'],['Small','33-37 in','27-31 in','30 in','33.5 in','Adult'],['Medium','37-41 in','31-35 in','31 in','35 in','Adult'],['Large','41-45 in','35-39 in','31 in','36 in','Adult'],['X-Large','45-49 in','39-43 in','31.5 in','37 in','Adult'],['2XL','49-53 in','43-47 in','32 in','38 in','Adult']]},
  'OCP-TSHIRT-VG': {title:'Coyote T-Shirt Size Guide', note:'Chest measurement shown by Vanguard for the shirt sizing.', columns:['Size','Chest'], rows:[['Small','36 in'],['Medium','40 in'],['Large','42 in'],['X-Large','48 in'],['2XL','50 in']]},
  'OCP-PANTS-COMBINED': {title:'OCP Trouser Size Guide', note:'Choose the size that best matches waist and inseam. Youth trousers are not recommended for people over 5 ft 4 in.', columns:['Size','Waist','Inseam','Type'], rows:[['Youth 8','24 in','24 in','Youth'],['Youth 10','25 in','25 in','Youth'],['Youth 12','26-29.5 in','26 in','Youth'],['X-Small','24-27 in','29.5-32.5 in','Adult'],['Small','27-31 in','29.5-32.5 in','Adult'],['Medium','31-35 in','29.5-32.5 in','Adult'],['Large','35-39 in','29.5-32.5 in','Adult'],['X-Large','39-43 in','29.5-32.5 in','Adult'],['2XL','43-47 in','29.5-32.5 in','Adult']]},
  'OCP-BELT-COMBINED': {title:'Tan 499 Rigger Belt Size Guide', note:'Choose the belt length that provides enough adjustment for the cadet.', columns:['Belt option','Supplier item'], rows:[['39 inches','Vanguard 39-inch belt'],['44 inches','Vanguard 44/55-inch belt'],['55 inches','Vanguard 44/55-inch belt']]},
  'BOOTS-VG': {title:'Vanguard Coyote Boot Size Guide', note:'Vanguard lists these as unisex. The product selector also includes smaller sizes; this chart is the published conversion range.', columns:['US','UK','EU','Foot length'], rows:[['7','6','40','25 cm'],['7.5','6.5','40.5','25.5 cm'],['8','7','41','26 cm'],['8.5','7.5','41.5','26.5 cm'],['9','8','42','27 cm'],['9.5','8.5','42.5','27.5 cm'],['10','9','43','28 cm'],['10.5','9.5','43.5','28.5 cm'],['11','10','44','29 cm'],['11.5','10.5','44.5','29.5 cm'],['12','11','45','30 cm'],['13','12','46','31 cm'],['14','13','47','32 cm'],['15','14','48','33 cm']]},
  'FLEECE-VG': {title:'Tan 499 Fleece Size Guide', note:'Use chest measurement as the primary fit guide.', columns:['Size','Chest'], rows:[['X-Small','30-32 in'],['Small','34-36 in'],['Medium','38-40 in'],['Large','42-44 in'],['X-Large','46-48 in'],['2XL','50-52 in'],['3XL','54-56 in']]}
};

function sizeGuideFor(p){return p ? SIZE_GUIDES[p.id] : null}
function showSizeGuide(p){
  const g=sizeGuideFor(p); if(!g)return;
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="sizeGuideModal"><div class="modal-card size-guide-modal"><div class="modal-head"><div><div class="eyebrow">Sizing help</div><h2 style="margin:0">${esc(g.title)}</h2></div><button id="closeSizeGuide">×</button></div><p class="muted">${esc(g.note||'')}</p><div class="table-wrap"><table class="size-guide-table"><thead><tr>${g.columns.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${g.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="tiny size-guide-source">Sizing guide stored in this app from the supplier's published measurements. Always confirm fit if measurements are near a boundary.</div></div></div>`);
  $('#closeSizeGuide').onclick=()=>$('#sizeGuideModal').remove();
  $('#sizeGuideModal').addEventListener('click',e=>{if(e.target.id==='sizeGuideModal')e.currentTarget.remove()});
}

const DEMO_CATALOG_VERSION = '2026-09-30-starter-v22';
if(load('uniform_demo_catalog_version','')!==DEMO_CATALOG_VERSION){ save('uniform_demo_catalog_version',DEMO_CATALOG_VERSION); }

let state = {
  products: [], cart: load('uniform_cart', []), settings: {}, view:'shop', category:'All', search:'',
  deferredPrompt:null, adminToken:sessionStorage.getItem('uniform_admin_token')||'', adminTab:'orders', adminOrders:[], distributionBatch:'', showDistributed:false, showOldOrders:false, batchSort:{key:'name',dir:'asc'}
};

function save(key,val){localStorage.setItem(key,JSON.stringify(val))}
function load(key,fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}}
function money(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:CFG.CURRENCY||'USD'}).format(Number(n||0))}
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function linkedName(name,url,extraClass=''){const label=esc(name);if(!url)return `<span class="${esc(extraClass)}">${label}</span>`;return `<a class="product-name-link ${esc(extraClass)}" href="${esc(url)}" target="_blank" rel="noopener noreferrer" title="Open supplier item in a new tab">${label}</a>`}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2300)}
function uid(){return (CFG.ORDER_PREFIX||'UNIF')+'-'+Date.now().toString(36).toUpperCase().slice(-6)}
function apiEnabled(){return !!CFG.API_URL && !CFG.DEMO_MODE}
function isActiveProduct(p){return !!p && !(p.active===false || String(p.active).toLowerCase()==='false') && Number(p.price||0)>0}
function localDateStamp(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function normalizeLegacyProduct(p){
  if(!p)return p;
  let n={...p};
  // Carry older saved demo records forward while applying current catalog structure.
  if(n.source==='Local DTF' || n.source==='Unit Bulk Stock') n={...n,source:'Local'};
  if(n.id==='FLAG-LOCAL') n={...n,source:'Amazon'};
  if(n.id==='UNIT-TSHIRT') n={...n,options:'Adult S|Adult M|Adult L|Adult XL|Adult 2XL|Adult 3XL'};
  if(n.id==='RANK-NCO') n={...n,name:'OCP/Fleece Rank Tab',options:'',description:'Required OCP/fleece rank tab for every cadet. Choose only the quantity needed.'};
  if(n.id==='SOCKS-LOCAL') n={...n,name:'Boot Socks',options:'',description:'Boot socks sold by the pair from unit bulk supply. Choose how many pairs are needed.'};
  if(n.id==='BLOUSING-LOCAL' || n.id==='BLOUSING-VG') n={...n,options:''};
  const note=String(n.verified||'');
  // Older versions could save an approved price while an obsolete hold flag still remained.
  if(Number(n.price||0)>0 && /price approved/i.test(note) && !/deactivated/i.test(note)) n={...n,active:true,paymentHold:false};
  return n;
}
function manualPriceNote(p){
  const src=String(p?.source||'').toLowerCase();
  if(src==='amazon') return 'Manual price check required: Amazon pricing is not live in this app. Open the item, confirm the current price, then click Verify Price.';
  if(src==='walmart') return 'Manual price check required: Walmart pricing is not live in this app. Open the item, confirm the current price, then click Verify Price.';
  if(src==='vanguard') return 'Stored price only: Vanguard pricing is not live in this app. Recheck the supplier page whenever you want to refresh or reactivate the item.';
  if(src==='local') return 'Manual cost: enter your current per-item cost, then click Verify Price to make it available to families.';
  return 'Manual price check: confirm the current cost, then click Verify Price to make this item available.';
}

async function api(action, payload={}, method='GET'){
  if(!apiEnabled()) return demoApi(action,payload,method);
  if(method==='GET'){
    const u=new URL(CFG.API_URL);u.searchParams.set('action',action);
    Object.entries(payload).forEach(([k,v])=>u.searchParams.set(k,typeof v==='string'?v:JSON.stringify(v)));
    const r=await fetch(u.toString());if(!r.ok)throw new Error('Server request failed');return r.json();
  }
  const r=await fetch(CFG.API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action,...payload})});
  if(!r.ok)throw new Error('Server request failed');return r.json();
}

async function demoApi(action,payload,method){
  await new Promise(r=>setTimeout(r,120));
  let orders=load('uniform_demo_orders',[]), products=load('uniform_demo_products',DEMO_PRODUCTS).map(normalizeLegacyProduct);
  if(!apiEnabled()) save('uniform_demo_products',products);
  if(action==='getProducts') return {ok:true,products,settings:{siteName:CFG.SITE_NAME||'Cadet Uniform Order Center',unitName:CFG.UNIT_NAME||'Your Squadron'}};
  if(action==='createOrder'){
    const order={...payload.order,id:payload.order.id||uid(),created:new Date().toISOString(),status:'Submitted',paid:false};orders.unshift(order);save('uniform_demo_orders',orders);return {ok:true,order};
  }
  if(action==='lookupOrder'){
    const o=orders.find(x=>x.id.toLowerCase()===String(payload.id||'').toLowerCase() && String(x.email||'').toLowerCase()===String(payload.email||'').toLowerCase());return {ok:!!o,order:o||null};
  }
  if(action==='adminOrders') return payload.token==='demo' ? {ok:true,orders} : {ok:false,error:'Use admin token: demo'};
  if(action==='adminProducts') return payload.token==='demo' ? {ok:true,products} : {ok:false,error:'Use admin token: demo'};
  if(action==='createBatch'){
    if(payload.token!=='demo')return {ok:false,error:'Use admin token: demo'};
    const ids=payload.orderIds||[]; if(!ids.length)return {ok:false,error:'No orders selected'};
    const existing=orders.map(o=>o.batchId).filter(Boolean);
    const today=new Date().toISOString().slice(0,10).replace(/-/g,'');
    let n=1,batchId=''; do{batchId=`BULK-${today}-${String(n++).padStart(2,'0')}`}while(existing.includes(batchId));
    const when=new Date().toISOString();
    orders=orders.map(o=>ids.includes(o.id)?{...o,batchId,batchOrderedAt:when,status:'Ordered'}:o); save('uniform_demo_orders',orders);
    return {ok:true,batchId,batchOrderedAt:when};
  }
  if(action==='updateOrder'){
    if(payload.token!=='demo')return {ok:false,error:'Use admin token: demo'};
    orders=orders.map(o=>o.id===payload.id?{...o,...payload.patch}:o);save('uniform_demo_orders',orders);return {ok:true};
  }
  if(action==='updateDistribution'){
    if(payload.token!=='demo')return {ok:false,error:'Use admin token: demo'};
    orders=orders.map(o=>o.id===payload.id?{...o,distributedItems:payload.distributedItems||{},distributedAt:payload.distributedAt||''}:o);save('uniform_demo_orders',orders);return {ok:true};
  }
  if(action==='saveProduct'){
    if(payload.token!=='demo')return {ok:false,error:'Use admin token: demo'};
    const p=payload.product;const i=products.findIndex(x=>x.id===p.id);if(i>=0)products[i]=p;else products.push(p);save('uniform_demo_products',products);return {ok:true};
  }
  if(action==='deleteProduct'){
    if(payload.token!=='demo')return {ok:false,error:'Use admin token: demo'};
    products=products.filter(x=>x.id!==payload.id);save('uniform_demo_products',products);return {ok:true};
  }
  return {ok:false,error:'Unknown action'};
}

async function init(){
  document.title=CFG.SITE_NAME||document.title;$('#siteName').textContent=CFG.SITE_NAME||'Cadet Uniform Order Center';$('#footerName').textContent=CFG.SITE_NAME||'Cadet Uniform Order Center';
  try{const r=await api('getProducts');state.products=(r.products||[]).map(normalizeLegacyProduct);state.settings=r.settings||{}}catch(e){state.products=DEMO_PRODUCTS;toast('Using local catalog: '+e.message)}
  bindNav();updateCartCount();navigate(location.hash.replace('#','')||'shop');
  if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
}

function bindNav(){
  document.addEventListener('click',e=>{
    const nav=e.target.closest('[data-nav]');
    if(nav){e.preventDefault();navigate(nav.dataset.nav);return;}
    const action=e.target.closest('[data-action]');
    if(!action)return;
    if(action.dataset.action==='review-back'){
      e.preventDefault();
      if(!starterWizard)return renderShop();
      starterWizard.index=Math.max(0,OCP_STARTER_GROUPS.length-1);
      renderStarterWizard();
      return;
    }
    if(action.dataset.action==='review-continue'){
      e.preventDefault();
      continueStarterToCart();
      return;
    }
    if(action.dataset.action==='review-exit'){
      e.preventDefault();starterWizard=null;renderShop();
    }
  });
  window.addEventListener('hashchange',()=>navigate(location.hash.replace('#','')||'shop',false));
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();state.deferredPrompt=e;render()});
}
function navigate(view,push=true){state.view=view||'shop';if(push)history.replaceState(null,'','#'+state.view);render();scrollTo({top:0,behavior:'smooth'})}
function updateCartCount(){const n=state.cart.reduce((a,x)=>a+x.qty,0);$('#cartCount').textContent=n}
function categories(){return ['All',...new Set(state.products.map(p=>p.category).filter(Boolean))]}

function render(){
  if(state.view==='shop') return renderShop();
  if(state.view==='cart') return renderCart();
  if(state.view==='track') return renderTrack();
  if(state.view==='admin') return renderAdmin();
}

function installBanner(){return state.deferredPrompt?`<div class="install-banner"><div><strong>Install this on your phone</strong><div class="tiny">It works like the other web-to-mobile apps: add the PWA to your home screen.</div></div><button class="btn primary" id="installBtn">Install App</button></div>`:''}
function renderShop(){
  app.innerHTML=`${installBanner()}<section class="simple-home">
    <div class="eyebrow">New Cadet Uniform</div>
    <h1>Build the OCP uniform without guessing.</h1>
    <p>Go through the uniform one piece at a time. For each item, choose to order it through the unit, buy it yourself, or mark that you already have it.</p>
    <div class="home-steps">
      <div class="home-step"><div class="home-step-num">1</div><div><strong>Choose each uniform item</strong><span>Select the item, size, and quantity as you go.</span></div></div>
      <div class="home-step"><div class="home-step-num">2</div><div><strong>Review the complete list</strong><span>We make sure nothing was accidentally missed.</span></div></div>
      <div class="home-step"><div class="home-step-num">3</div><div><strong>Submit and pay</strong><span>Pay at-cost by Venmo, PayPal, or cash.</span></div></div>
    </div>
    <button class="btn primary start-button" data-kit="KIT-OCP">Start OCP Uniform Order</button>
    <div class="home-links">Already ordered? <a href="#track" data-nav="track">Track an order</a>.</div>
  </section>`;
  $$('#app [data-kit]').forEach(b=>b.addEventListener('click',()=>openKit(b.dataset.kit)));
  $('#installBtn')?.addEventListener('click',async()=>{if(state.deferredPrompt){state.deferredPrompt.prompt();await state.deferredPrompt.userChoice;state.deferredPrompt=null;render()}})
}

function productPriceText(p){return Number(p.price||0)<=0 ? 'Price check' : money(p.price)}
function productCard(p){const src=(p.source||'').toLowerCase();const cls=src.includes('vanguard')?'vanguard':'local';return `<article class="product"><div class="product-top"><div><h3>${linkedName(p.name,p.sourceUrl)}</h3><div class="badges"><span class="badge ${cls}">${esc(p.source||'Local')}</span>${p.required?'<span class="badge required">Starter item</span>':''}${!isActiveProduct(p)?'<span class="badge hold">Price not verified</span>':''}</div></div><div class="price">${productPriceText(p)}</div></div><p>${esc(p.description||'')}</p><div class="tiny">${esc(p.verified||'Verify before ordering')}</div><div class="actions"><button class="btn primary" data-product="${esc(p.id)}">Select</button>${p.sourceUrl?`<a class="btn ghost" href="${esc(p.sourceUrl)}" target="_blank" rel="noopener">Supplier</a>`:''}</div></article>`}
function openProduct(id,onAdded=null){const p=state.products.find(x=>x.id===id);if(!p)return;const opts=String(p.options||'').split('|').filter(Boolean);document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="modal"><div class="modal-card"><div class="modal-head"><div><h2>${esc(p.name)}</h2><div class="price">${productPriceText(p)}</div></div><button id="closeModal">×</button></div><p class="muted">${esc(p.description||'')}</p>${!isActiveProduct(p)?`<div class="notice warning"><strong>Not available for unit purchase yet.</strong><br><span class="tiny">The administrator must verify the current price first.</span></div>`:''}<div class="grid">${opts.length?`<div class="field"><label>Size / option</label><select id="pOption">${opts.map(o=>`<option>${esc(o)}</option>`).join('')}</select></div>`:''}${p.customLabel?`<div class="field"><label>${esc(p.customLabel)}</label><input id="pCustom" maxlength="80"></div>`:''}<div class="field"><label>Quantity</label><input id="pQty" type="number" min="1" max="20" value="1"></div><button class="btn primary" id="addItem" ${isOrderable(p)?'':'disabled'}>Add to Order</button></div></div></div>`);$('#closeModal').onclick=()=>$('#modal').remove();$('#modal').addEventListener('click',e=>{if(e.target.id==='modal')e.currentTarget.remove()});$('#addItem').onclick=()=>{const option=$('#pOption')?.value||'',custom=($('#pCustom')?.value||'').trim(),qty=Math.max(1,Number($('#pQty').value||1));if(p.customLabel&&!custom)return toast('Please enter '+p.customLabel);addCart(p,option,custom,qty);$('#modal').remove();if(onAdded)setTimeout(onAdded,30)}}
function addCart(p,option='',custom='',qty=1){const key=[p.id,option,custom].join('|');const found=state.cart.find(x=>x.key===key);if(found)found.qty+=qty;else state.cart.push({key,productId:p.id,name:p.name,price:Number(p.price||0),source:p.source,option,custom,qty,paymentHold:false,availabilityCheck:!!p.availabilityCheck,sourceUrl:p.sourceUrl||''});save('uniform_cart',state.cart);updateCartCount()}
function isOrderable(p){return isActiveProduct(p)}
function supplierLink(p){return p?.sourceUrl?`<a class="supplier-inline" href="${esc(p.sourceUrl)}" target="_blank" rel="noopener">${esc(p.source||'Supplier')}: ${esc(p.name)} ↗</a>`:''}

let starterWizard=null;
function cleanGroupName(name=''){return String(name).replace(/^\d+\.\s*/, '')}
function memberVisibleProduct(p){return !!p && ['Vanguard','Local'].includes(String(p.source||''))}
function combinedVariants(g){
  const out=[];
  (g.choices||[]).forEach(pid=>{
    const p=state.products.find(x=>x.id===pid);
    if(!memberVisibleProduct(p))return;
    String(p.options||'').split('|').filter(Boolean).forEach(option=>out.push({product:p,option,value:`${p.id}::${option}`}));
  });
  return out;
}
function selectedProductAndOption(g,sel){
  if(g?.combined && sel?.variant){
    const [pid,...rest]=String(sel.variant).split('::');
    const p=state.products.find(x=>x.id===pid);
    return {p,option:rest.join('::')};
  }
  return {p:state.products.find(x=>x.id===sel?.choice),option:sel?.option||''};
}
function combinedGroupGuideId(g){
  if(cleanGroupName(g?.name)==='OCP Coat')return 'OCP-COAT-COMBINED';
  if(cleanGroupName(g?.name)==='OCP Trousers')return 'OCP-PANTS-COMBINED';
  if(cleanGroupName(g?.name)==='Tan 499 Belt')return 'OCP-BELT-COMBINED';
  return '';
}
function quantityLimitFor(p){return p?.id==='SOCKS-LOCAL'?12:20}
function defaultStarterSelection(g){
  const products=g.choices.map(pid=>state.products.find(p=>p.id===pid)).filter(memberVisibleProduct);
  const preferred=products.find(p=>p.id===g.default&&isOrderable(p))||products.find(isOrderable);
  if(g.combined){
    const variants=combinedVariants(g).filter(v=>isOrderable(v.product));
    const first=variants.find(v=>v.product.id===g.default)||variants[0];
    if(g.required) return {choice:first?.product.id||'__SELF__',variant:first?.value||'',option:first?.option||'',custom:'',qty:1};
    return {choice:g.selected&&first?first.product.id:'__SKIP__',variant:first?.value||'',option:first?.option||'',custom:'',qty:1};
  }
  if(g.defaultSelf) return {choice:'__SELF__',option:'',custom:'',qty:1};
  if(g.required) return {choice:preferred?.id||'__SELF__',option:'',custom:'',qty:1};
  return {choice:g.selected&&preferred?preferred.id:'__SKIP__',option:'',custom:'',qty:1};
}
function openKit(id){
  if(id!=='KIT-OCP')return;
  starterWizard={index:0,selections:OCP_STARTER_GROUPS.map(defaultStarterSelection)};
  renderStarterWizard();
}
function starterCombinedRow(g,sel){
  const variants=combinedVariants(g);
  const available=variants.filter(v=>isOrderable(v.product));
  const checked=!String(sel.choice||'').startsWith('__');
  const current=available.find(v=>v.value===sel.variant)||available[0];
  const guideId=combinedGroupGuideId(g);
  return `<div class="choice-row ${available.length?'':'unavailable'}">
    <label class="choice-main">
      <input type="radio" name="wizardChoice" value="__COMBINED__" ${checked?'checked':''} ${available.length?'':'disabled'}>
      <span><strong>${esc(g.combinedLabel||cleanGroupName(g.name))}</strong><span class="choice-meta">Choose the size below. The correct Vanguard item and price are selected automatically.</span></span>
      <span class="choice-price" id="combinedPrice">${current?money(current.product.price):'Price not verified'}</span>
    </label>
    ${checked&&available.length?`<div class="choice-details"><label>Size / option</label><div class="size-select-line"><select id="wizardVariant">${available.map(v=>`<option value="${esc(v.value)}" ${v.value===(current?.value||'')?'selected':''}>${esc(v.option)} — ${money(v.product.price)}</option>`).join('')}</select>${guideId?`<button type="button" class="size-guide-button" data-combined-guide="${esc(guideId)}">Size guide</button>`:''}</div></div><div class="choice-details"><label>Quantity</label><input id="wizardQty" type="number" min="1" max="20" inputmode="numeric" value="${Math.max(1,Number(sel.qty||1))}"></div>`:''}
  </div>`;
}

function starterChoiceRow(p,sel){
  const orderable=isOrderable(p),checked=sel.choice===p.id,opts=String(p.options||'').split('|').filter(Boolean),guide=sizeGuideFor(p);
  const inactive=!isActiveProduct(p);
  const unavailableText=inactive?'Price not verified':'Not available';
  const qmax=quantityLimitFor(p);
  return `<div class="choice-row ${orderable?'':'unavailable'}">
    <label class="choice-main">
      <input type="radio" name="wizardChoice" value="${esc(p.id)}" ${checked?'checked':''} ${orderable?'':'disabled'}>
      <span><strong>${esc(p.name)}</strong>${p.description?`<span class="choice-meta">${esc(p.description)}</span>`:''}</span>
      <span class="choice-price">${orderable?money(p.price):esc(unavailableText)}</span>
    </label>
    ${checked&&orderable&&opts.length?`<div class="choice-details"><label>Size / option</label><div class="size-select-line"><select id="wizardOption">${opts.map(o=>`<option ${o===sel.option?'selected':''}>${esc(o)}</option>`).join('')}</select>${guide?`<button type="button" class="size-guide-button" data-size-guide="${esc(p.id)}">Size guide</button>`:''}</div></div>`:''}
    ${checked&&orderable&&p.customLabel?`<div class="choice-details"><label>${esc(p.customLabel)}</label><input id="wizardCustom" maxlength="80" value="${esc(sel.custom||'')}" ${p.id==='NAME-TAPE'?'style="text-transform:uppercase" autocomplete="family-name"':''}></div>`:''}
    ${checked&&orderable?`<div class="choice-details"><label>${p.id==='SOCKS-LOCAL'?'Quantity (pairs)':'Quantity'}</label><input id="wizardQty" type="number" min="1" max="${qmax}" inputmode="numeric" value="${Math.max(1,Math.min(qmax,Number(sel.qty||1)))}"></div>`:''}
  </div>`
}
function saveWizardStep(){
  if(!starterWizard||starterWizard.index>=OCP_STARTER_GROUPS.length)return true;
  const i=starterWizard.index,g=OCP_STARTER_GROUPS[i],radio=$('input[name="wizardChoice"]:checked');
  if(!radio){toast('Choose an option before continuing');return false}
  const sel=starterWizard.selections[i];
  if(g.combined && radio.value==='__COMBINED__'){
    const variant=$('#wizardVariant')?.value||'';
    const [pid,...rest]=variant.split('::');
    const p=state.products.find(x=>x.id===pid);
    if(!p||!isOrderable(p)){toast('That size is not available for unit purchase yet');return false}
    sel.choice=pid;sel.variant=variant;sel.option=rest.join('::');sel.custom='';sel.qty=Math.max(1,Math.min(quantityLimitFor(p),Number($('#wizardQty')?.value||1)));
    return true;
  }
  sel.choice=radio.value;
  if(!String(sel.choice).startsWith('__')){
    const p=state.products.find(x=>x.id===sel.choice);
    if(!isOrderable(p)){toast('That item is not available for unit purchase yet');return false}
    sel.option=$('#wizardOption')?.value||'';sel.custom=($('#wizardCustom')?.value||'').trim();
    if(p.id==='NAME-TAPE')sel.custom=sel.custom.toUpperCase();
    sel.qty=Math.max(1,Math.min(quantityLimitFor(p),Number($('#wizardQty')?.value||1)));
    if(p.customLabel&&!sel.custom){toast('Please enter '+p.customLabel);return false}
  } else {sel.option='';sel.custom='';sel.variant='';sel.qty=1}
  return true
}
function showBootRequirementWarning(){
  if($('#bootRequirementModal')) return;
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="bootRequirementModal"><div class="modal-card boot-warning-modal"><div class="modal-head"><div><div class="eyebrow">Required uniform item</div><h2 style="margin:0">Coyote boots are required</h2></div></div><p>Cadets need coyote-brown boots for the OCP uniform. Vanguard sells a pair, but it is expensive. We highly recommend purchasing suitable coyote-brown boots somewhere else when possible.</p><p class="muted">The next screen includes a lower-cost Amazon option under <strong>Parent/member will purchase separately</strong>, or you can still choose the Vanguard boots to order through the unit.</p><div class="modal-actions"><button type="button" class="btn primary" id="bootWarningOk">OK</button></div></div></div>`);
  $('#bootWarningOk').onclick=()=>$('#bootRequirementModal')?.remove();
}

function renderStarterWizard(){
  if(!starterWizard)return renderShop();
  const total=OCP_STARTER_GROUPS.length,i=starterWizard.index;
  if(i>=total)return renderStarterReview();
  const g=OCP_STARTER_GROUPS[i],sel=starterWizard.selections[i];
  const products=g.choices.map(pid=>state.products.find(p=>p.id===pid)).filter(memberVisibleProduct);
  const selfLinkProducts=[...new Set([...(g.selfLinks||[]),...g.choices])].map(pid=>state.products.find(p=>p.id===pid)).filter(p=>p&&p.sourceUrl);
  const supplierLinks=selfLinkProducts.map(supplierLink).join(' ');
  app.innerHTML=`<section class="wizard-shell">
    <div class="wizard-top"><button type="button" id="wizardExit">← Exit</button><span class="wizard-count">Item ${i+1} of ${total}</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${((i+1)/total)*100}%"></div></div>
    <div class="wizard-question"><div class="eyebrow">${g.required?'Starter uniform item':'Optional'}</div><h1>${esc(cleanGroupName(g.name))}</h1><p>How will this item be handled?</p></div>
    <div class="choice-list">
      ${g.combined?starterCombinedRow(g,sel):products.map(p=>starterChoiceRow(p,sel)).join('')}
      <div class="choice-row self-choice"><label><input type="radio" name="wizardChoice" value="__SELF__" ${sel.choice==='__SELF__'?'checked':''}><span><strong>Parent/member will purchase separately</strong><span class="choice-meta">Do not include this in the unit order.</span></span><span></span></label>${sel.choice==='__SELF__'&&supplierLinks?`<div class="supplier-links"><strong>Purchase links:</strong><br>${supplierLinks}</div>`:''}</div>
      <div class="choice-row self-choice"><label><input type="radio" name="wizardChoice" value="__SKIP__" ${sel.choice==='__SKIP__'?'checked':''}><span><strong>Already have / not needed</strong><span class="choice-meta">Skip this item.</span></span><span></span></label></div>
    </div>
    <div class="wizard-actions"><button type="button" class="btn ghost" id="wizardBack" ${i===0?'disabled':''}>Back</button><button type="button" class="btn primary" id="wizardNext">${i===total-1?'Review Order':'Next'}</button></div>
  </section>`;
  $('#wizardExit').addEventListener('click',()=>{starterWizard=null;renderShop()});
  $('#wizardBack').addEventListener('click',e=>{e.preventDefault();if(!saveWizardStep())return;starterWizard.index=Math.max(0,starterWizard.index-1);renderStarterWizard()});
  $('#wizardNext').addEventListener('click',e=>{e.preventDefault();if(!saveWizardStep())return;starterWizard.index++;renderStarterWizard()});
  $$('input[name="wizardChoice"]').forEach(r=>r.addEventListener('change',()=>{const old=starterWizard.selections[i];if(r.value==='__COMBINED__'){const v=combinedVariants(g).filter(v=>isOrderable(v.product))[0];old.choice=v?.product.id||'__SELF__';old.variant=v?.value||'';old.option=v?.option||'';}else{old.choice=r.value;old.option='';old.variant='';}old.custom='';old.qty=1;renderStarterWizard()}));
  $('#wizardVariant')?.addEventListener('change',e=>{const variant=e.target.value;const [pid,...rest]=variant.split('::');const p=state.products.find(x=>x.id===pid);sel.choice=pid;sel.variant=variant;sel.option=rest.join('::');const price=$('#combinedPrice');if(price&&p)price.textContent=money(p.price)});
  $('#wizardCustom')?.addEventListener('input',e=>{if(state.products.find(p=>p.id===sel.choice)?.id==='NAME-TAPE'){const pos=e.target.selectionStart;e.target.value=e.target.value.toUpperCase();try{e.target.setSelectionRange(pos,pos)}catch{}}});
  $$('[data-size-guide]').forEach(b=>b.onclick=()=>showSizeGuide(state.products.find(p=>p.id===b.dataset.sizeGuide)));
  $$('[data-combined-guide]').forEach(b=>b.onclick=()=>showSizeGuide({id:b.dataset.combinedGuide}));
  if(g.bootWarning && !starterWizard.bootWarningSeen){ starterWizard.bootWarningSeen=true; showBootRequirementWarning(); }
}
function renderStarterReview(){
  if(!starterWizard)return renderShop();
  const selections=OCP_STARTER_GROUPS.map((g,i)=>({g,s:starterWizard.selections[i]}));
  const rows=selections.map(({g,s})=>{
    if(s.choice==='__SELF__')return `<div class="wizard-review-row"><strong>${esc(cleanGroupName(g.name))}</strong><span>Parent purchasing separately</span></div>`;
    if(s.choice==='__SKIP__')return `<div class="wizard-review-row"><strong>${esc(cleanGroupName(g.name))}</strong><span>Already have / not needed</span></div>`;
    const {p,option}=selectedProductAndOption(g,s),q=Math.max(1,Number(s.qty||1));
    return `<div class="wizard-review-row"><strong>${esc(cleanGroupName(g.name))}</strong><span>${esc(g.combined?(g.combinedLabel||p?.name||''):p?.name||'')}${option?' · '+esc(option):''}${s.custom?' · '+esc(s.custom):''}<br>${q} × ${money(p?.price||0)} = <strong>${money((p?.price||0)*q)}</strong></span></div>`
  }).join('');
  const unitItems=selections.filter(x=>!String(x.s.choice).startsWith('__')).map(x=>{const chosen=selectedProductAndOption(x.g,x.s);return {p:chosen.p,option:chosen.option,custom:x.s.custom,qty:x.s.qty}}).filter(x=>isOrderable(x.p));
  const total=unitItems.reduce((a,x)=>a+Number(x.p.price||0)*Math.max(1,Number(x.qty||1)),0);
  app.innerHTML=`<section class="wizard-shell"><div class="wizard-top"><button type="button" id="reviewExit">← Exit</button><span class="wizard-count">Review</span></div><div class="progress-track"><div class="progress-fill" style="width:100%"></div></div><div class="wizard-question"><div class="eyebrow">Almost finished</div><h1>Review the uniform list</h1><p>Check the sizes, quantities, and personalization below before continuing to contact and payment.</p></div><div class="wizard-review">${rows}<div class="wizard-total"><span>Unit order total</span><span>${money(total)}</span></div></div><div class="wizard-actions"><button type="button" class="btn ghost" id="reviewBack">Back</button><button type="button" class="btn primary" id="reviewContinue">Continue to Contact & Payment</button></div></section>`;
  $('#reviewExit').onclick=()=>{starterWizard=null;renderShop()};
  $('#reviewBack').onclick=()=>{starterWizard.index=Math.max(0,OCP_STARTER_GROUPS.length-1);renderStarterWizard()};
  $('#reviewContinue').onclick=()=>continueStarterToCart();
}
function continueStarterToCart(){
  if(!starterWizard)return navigate('shop');
  const unitItems=OCP_STARTER_GROUPS.map((g,i)=>({g,s:starterWizard.selections[i]}))
    .filter(x=>!String(x.s.choice).startsWith('__'))
    .map(x=>{const chosen=selectedProductAndOption(x.g,x.s);return {p:chosen.p,option:chosen.option,custom:x.s.custom,qty:x.s.qty}})
    .filter(x=>isOrderable(x.p));
  state.cart=[];
  unitItems.forEach(x=>addCart(x.p,x.option,x.custom,Math.max(1,Number(x.qty||1))));
  save('uniform_cart',state.cart);
  updateCartCount();
  starterWizard=null;
  navigate('cart');
}

function cartTotals(){
  const confirmedItems=state.cart.filter(x=>!x.paymentHold);
  const pending=state.cart.filter(x=>x.paymentHold);
  const confirmed=confirmedItems.reduce((sum,x)=>sum+Number(x.price||0)*Math.max(1,Number(x.qty||1)),0);
  const pendingKnown=pending.reduce((sum,x)=>sum+Number(x.price||0)*Math.max(1,Number(x.qty||1)),0);
  return {confirmed,pending,pendingKnown};
}

function renderCart(){
  if(!state.cart.length){app.innerHTML=`<div class="empty panel"><h2>Your cart is empty</h2><p class="muted">Choose the uniform items you need, then come back here.</p><button class="btn primary" data-nav="shop">Shop Items</button></div>`;return}
  const {confirmed,pending,pendingKnown}=cartTotals();
  app.innerHTML=`<div class="section-head"><div><h2>Review Order</h2><p>Check sizes, spelling, and quantities before submitting.</p></div></div><div class="grid two"><section class="panel"><h3>Items</h3>${state.cart.map((x,i)=>`<div class="cart-row ${x.paymentHold?'pending-row':''}"><div><strong>${linkedName(x.name,x.sourceUrl)}</strong>${x.paymentHold?'<span class="badge hold">Pending check</span>':''}<br><small>${esc([x.option,x.custom].filter(Boolean).join(' · ')||x.source||'')}</small></div><div class="qty"><button data-dec="${i}">−</button><strong>${x.qty}</strong><button data-inc="${i}">+</button></div><div class="price">${x.paymentHold?(x.price?money(x.price*x.qty)+'*':'TBD'):money(x.price*x.qty)}</div></div>`).join('')}<div class="summary"><div class="total"><span>Pay now</span><span>${money(confirmed)}</span></div>${pending.length?`<div><span>Pending price/availability</span><strong>${pending.length} item${pending.length===1?'':'s'}</strong></div>${pendingKnown?`<div class="tiny"><span>*Known reference value</span><span>${money(pendingKnown)} (not charged yet)</span></div>`:''}`:''}<div class="tiny">Only confirmed items are included in the pay-now amount. Pending items stay on your order for review.</div></div></section>
  <section class="panel"><h3>Who is this for?</h3><form id="checkout" class="form-grid"><div class="field"><label>Cadet first name *</label><input name="cadetFirstName" required></div><div class="field"><label>Cadet last name *</label><input name="cadetLastName" required></div><div class="field"><label>CAPID</label><input name="capid" inputmode="numeric"></div><div class="field"><label>Phone *</label><input name="phone" type="tel" required></div><div class="field"><label>Parent / purchaser first name *</label><input name="parentFirstName" required></div><div class="field"><label>Parent / purchaser last name *</label><input name="parentLastName" required></div><div class="field span-2"><label>Email *</label><input name="email" type="email" required></div><div class="field span-2"><label>Preferred payment method</label><div class="radio-grid">${['Venmo','PayPal','Cash'].map((x,i)=>`<label class="radio-card"><input type="radio" name="paymentMethod" value="${x}" ${i===0?'checked':''}><span><strong>${x}</strong>${x==='Venmo'?'<br><span class="tiny">Pay @'+esc((CFG.PAYMENTS||{}).VENMO_USERNAME||'')+'</span>':x==='PayPal'?'<br><span class="tiny">Pay @'+esc((CFG.PAYMENTS||{}).PAYPAL_USERNAME||'')+'</span>':'<br><span class="tiny">Pay in person; administrator marks it paid.</span>'}</span></label>`).join('')}</div></div><div class="field span-2"><label>Notes</label><textarea name="notes" rows="3" placeholder="Sizing notes, special requests, etc."></textarea></div>${pending.length?`<div class="span-2 notice warning"><strong>${pending.length} item${pending.length===1?' needs':'s need'} verification.</strong><br><span class="tiny">You are submitting these items now, but you are not being asked to pay for them yet.</span></div>`:''}<button class="btn primary span-2" type="submit">Submit Order · Pay ${money(confirmed)} Now</button></form></section></div>`;
  $$('[data-inc]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.inc,1));$$('[data-dec]').forEach(b=>b.onclick=()=>changeQty(+b.dataset.dec,-1));$('#checkout').onsubmit=submitOrder;
}
function changeQty(i,d){state.cart[i].qty+=d;if(state.cart[i].qty<=0)state.cart.splice(i,1);save('uniform_cart',state.cart);updateCartCount();renderCart()}
async function submitOrder(e){e.preventDefault();const fd=new FormData(e.target),t=cartTotals();const cadetFirstName=fd.get('cadetFirstName').trim(),cadetLastName=fd.get('cadetLastName').trim(),parentFirstName=fd.get('parentFirstName').trim(),parentLastName=fd.get('parentLastName').trim();const order={id:uid(),cadetFirstName,cadetLastName,parentFirstName,parentLastName,memberName:`${cadetFirstName} ${cadetLastName}`.trim(),capid:fd.get('capid'),customerName:`${parentFirstName} ${parentLastName}`.trim(),phone:fd.get('phone'),email:fd.get('email'),paymentMethod:fd.get('paymentMethod'),notes:fd.get('notes'),items:state.cart,total:t.confirmed,pendingCount:t.pending.length,pendingKnown:t.pendingKnown,status:'Submitted',paid:false,distributedItems:{}};const btn=e.target.querySelector('button[type=submit]');btn.disabled=true;btn.textContent='Submitting...';try{const r=await api('createOrder',{order},'POST');if(!r.ok)throw new Error(r.error||'Unable to submit');state.cart=[];save('uniform_cart',[]);updateCartCount();renderConfirmation(r.order||order)}catch(err){toast(err.message);btn.disabled=false;btn.textContent='Submit Order · Pay '+money(t.confirmed)+' Now'}}
function paymentPanel(o){const p=CFG.PAYMENTS||{},amount=Number(o.total||0).toFixed(2);if(Number(o.total||0)<=0)return `<div class="pay-card"><div><h2>No payment due yet</h2><p>Every item on this order needs a current price or availability check. You will pay after the order is reviewed.</p></div></div>`;if(o.paymentMethod==='Cash')return `<div class="pay-card"><div><h2>Pay with cash</h2><p>Bring <strong>${money(o.total)}</strong> in cash. The administrator will mark the confirmed portion paid when it is received.</p><div class="payment-detail"><span>Order number</span><strong>${esc(o.id)}</strong></div></div></div>`;if(o.paymentMethod==='Venmo'){const user=String(p.VENMO_USERNAME||'').replace(/^@/,'');const web=`https://venmo.com/u/${encodeURIComponent(user)}`;return `<div class="pay-card venmo-card"><div class="pay-logo">V</div><div><h2>Pay ${money(o.total)} with Venmo</h2><p>Send payment to <strong>@${esc(user)}</strong>.</p><div class="payment-detail"><span>Pay-now amount</span><strong>${money(o.total)}</strong></div><div class="payment-detail"><span>Payment note</span><strong>${esc(o.id)}</strong></div><div class="toolbar"><a class="btn primary pay-big" href="${web}" target="_blank" rel="noopener">Open Venmo</a><button class="btn ghost" data-copy="${esc(o.id)}">Copy order #</button></div></div></div>`}const user=String(p.PAYPAL_USERNAME||'').replace(/^@/,'');const me=String(p.PAYPAL_ME||'').replace(/^@/,'');const business=String(p.PAYPAL_BUSINESS_LINK||'').trim();let href=business||(me?`https://paypal.me/${encodeURIComponent(me)}/${amount}USD`:'https://www.paypal.com/myaccount/transfer/homepage/pay');return `<div class="pay-card paypal-card"><div class="pay-logo">P</div><div><h2>Pay ${money(o.total)} with PayPal</h2><p>Send payment to <strong>@${esc(user)}</strong>.</p><div class="payment-detail"><span>Pay-now amount</span><strong>${money(o.total)}</strong></div><div class="payment-detail"><span>Payment note</span><strong>${esc(o.id)}</strong></div><div class="toolbar"><a class="btn primary pay-big" href="${esc(href)}" target="_blank" rel="noopener">Open PayPal</a><button class="btn ghost" data-copy="${esc(o.id)}">Copy order #</button></div></div></div>`}
function wirePaymentCopy(){$$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('Order number copied')}catch{toast('Copy this order number: '+b.dataset.copy)}})}
function renderConfirmation(o){app.innerHTML=`<div class="panel confirmation"><span class="status-pill">Submitted</span><h1>Order received</h1><p class="muted">Your entire uniform request is saved. Only confirmed items are included in the amount due now.</p><div class="hero-card order-number-card"><div class="tiny" style="color:#dce8f5">ORDER NUMBER</div><div class="order-number">${esc(o.id)}</div><div style="margin-top:8px">Pay now: <strong>${money(o.total)}</strong></div></div>${Number(o.pendingCount||0)>0?`<div class="notice warning"><strong>${o.pendingCount} item${o.pendingCount===1?' is':'s are'} pending.</strong><br><span class="tiny">Price/size availability will be checked before you are asked to pay for those items.</span></div>`:''}${paymentPanel(o)}<div class="notice"><strong>Important:</strong> online payments are not automatically marked paid. The administrator verifies the payment and updates the order.</div><div class="toolbar"><button class="btn primary" data-nav="shop">Start Another Order</button><button class="btn ghost" data-nav="track">Track This Order</button></div></div>`;wirePaymentCopy()}

function renderTrack(){app.innerHTML=`<div class="panel" style="max-width:680px;margin:20px auto"><h1>Track an Order</h1><p class="muted">Enter the order number and the email address used at checkout.</p><form id="trackForm" class="grid"><div class="field"><label>Order number</label><input name="id" placeholder="UNIF-ABC123" required></div><div class="field"><label>Email</label><input name="email" type="email" required></div><button class="btn primary">Look Up Order</button></form><div id="trackResult"></div></div>`;$('#trackForm').onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target),box=$('#trackResult');box.innerHTML='<p class="muted">Looking up order…</p>';try{const r=await api('lookupOrder',{id:fd.get('id'),email:fd.get('email')});box.innerHTML=r.ok?orderPublic(r.order):'<div class="notice">No matching order was found.</div>'}catch(err){box.innerHTML=`<div class="notice">${esc(err.message)}</div>`}}}
function orderPublic(o){return `<div class="order-card"><div class="order-head"><div><h3>${esc(o.id)}</h3><div>${esc(o.memberName)}</div></div><span class="status-pill status-${String(o.status||'').toLowerCase().replaceAll(' ','-')}">${esc(o.status)}</span></div><ul class="order-items">${(o.items||[]).map(x=>`<li>${x.qty} × ${linkedName(x.name,x.sourceUrl)} ${x.option?`— ${esc(x.option)}`:''}${x.custom?`— ${esc(x.custom)}`:''}</li>`).join('')}</ul><div class="summary"><div><span>Total</span><strong>${money(o.total)}</strong></div><div><span>Payment</span><strong>${o.paid?'Paid':'Not marked paid'}</strong></div></div></div>`}

async function renderAdmin(){
  if(!state.adminToken){app.innerHTML=`<div class="panel" style="max-width:560px;margin:20px auto"><h1>Administration</h1><p class="muted">Enter the admin token. The token lives in Google Apps Script settings, not in the public GitHub code.</p>${CFG.DEMO_MODE?'<div class="notice"><strong>Demo token:</strong> demo</div>':''}<form id="adminLogin" class="grid"><div class="field"><label>Admin token</label><input name="token" type="password" required></div><button class="btn primary">Open Admin</button></form></div>`;$('#adminLogin').onsubmit=e=>{e.preventDefault();state.adminToken=new FormData(e.target).get('token');sessionStorage.setItem('uniform_admin_token',state.adminToken);renderAdmin()};return}
  app.innerHTML='<div class="panel">Loading administration…</div>';
  try{const r=await api('adminOrders',{token:state.adminToken});if(!r.ok)throw new Error(r.error||'Admin access denied');state.adminOrders=r.orders||[];renderAdminShell()}catch(err){state.adminToken='';sessionStorage.removeItem('uniform_admin_token');app.innerHTML=`<div class="panel"><h2>Admin access failed</h2><p>${esc(err.message)}</p><button class="btn primary" id="retryAdmin">Try Again</button></div>`;$('#retryAdmin').onclick=()=>renderAdmin()}
}
function renderAdminShell(){
  const orders=state.adminOrders;const stats={submitted:orders.filter(o=>o.status==='Submitted').length,awaiting:orders.filter(o=>o.status==='Awaiting Payment').length,paid:orders.filter(o=>o.paid&&!o.batchId&&!['Received','Ready for Pickup','Complete'].includes(o.status)).length,ready:orders.filter(o=>o.status==='Ready for Pickup').length};
  app.innerHTML=`<div class="section-head"><div><h1>Uniform Administration</h1><p>${apiEnabled()?'Google Sheet backend connected':'Demo/local mode'}</p></div><button class="btn ghost" id="logoutAdmin">Log Out</button></div><div class="stats"><div class="stat"><strong>${stats.submitted}</strong><span>New</span></div><div class="stat"><strong>${stats.awaiting}</strong><span>Awaiting payment</span></div><div class="stat"><strong>${stats.paid}</strong><span>Paid / ready</span></div><div class="stat"><strong>${stats.ready}</strong><span>Ready for pickup</span></div></div><div class="admin-tabs"><button class="btn ${state.adminTab==='orders'?'active':''}" data-atab="orders">Orders</button><button class="btn ${state.adminTab==='batch'?'active':''}" data-atab="batch">Bulk Orders</button><button class="btn ${state.adminTab==='distribution'?'active':''}" data-atab="distribution">Distribution</button><button class="btn ${state.adminTab==='products'?'active':''}" data-atab="products">Products & Prices</button></div><div id="adminBody"></div>`;
  $('#logoutAdmin').onclick=()=>{state.adminToken='';sessionStorage.removeItem('uniform_admin_token');renderAdmin()};$$('[data-atab]').forEach(b=>b.onclick=()=>{state.adminTab=b.dataset.atab;renderAdminShell()});
  if(state.adminTab==='orders')renderAdminOrders();else if(state.adminTab==='batch')renderBatch();else if(state.adminTab==='distribution')renderDistribution();else renderAdminProducts();
}
function renderAdminOrders(){
  const box=$('#adminBody');
  const current=state.adminOrders.filter(o=>!o.batchId);
  const old=state.adminOrders.filter(o=>!!o.batchId);
  const visible=state.showOldOrders ? state.adminOrders : current;
  const controls=`<div class="panel orders-filter-bar"><div class="section-head"><div><h2 style="margin:0">Orders</h2><p>${state.showOldOrders?'Showing current and previously bulk-ordered orders.':'Showing only orders that have not yet been placed in a bulk order.'}</p></div><label class="radio-card old-orders-toggle"><input type="checkbox" id="showOldOrders" ${state.showOldOrders?'checked':''}><span>Show old / bulk-ordered orders${old.length?` (${old.length})`:''}</span></label></div></div>`;
  const cards=visible.length?visible.map(o=>`<div class="order-card ${o.batchId?'order-card-old':''}"><div class="order-head"><div><h3>${esc(o.id)} · ${esc(o.memberName)}</h3><div class="tiny">${esc(o.customerName)} · ${esc(o.email)} · ${esc(o.phone)}</div><div class="tiny">${o.created?new Date(o.created).toLocaleString():''}</div>${o.batchId?`<div class="tiny"><strong>${esc(o.batchId)}</strong> · Ordered ${o.batchOrderedAt?new Date(o.batchOrderedAt).toLocaleString():''}</div>`:''}</div><div><span class="status-pill">${esc(o.status)}</span> <span class="status-pill ${o.paid?'status-paid':''}">${o.paid?'PAID':'UNPAID'}</span></div></div><ul class="order-items">${(o.items||[]).map(x=>`<li>${x.qty} × ${linkedName(x.name,x.sourceUrl)} ${x.option?`— ${esc(x.option)}`:''}${x.custom?`— ${esc(x.custom)}`:''} (${money(x.price*x.qty)})</li>`).join('')}</ul><div class="summary"><div><span>Total</span><strong>${money(o.total)}</strong></div><div><span>Preferred payment</span><strong>${esc(o.paymentMethod||'')}</strong></div></div><div class="toolbar"><button class="btn ${o.paid?'ghost':'success'}" data-paid="${esc(o.id)}">${o.paid?'Mark Unpaid':'Mark Paid'}</button><select data-status="${esc(o.id)}" ${o.batchId?'disabled title="Bulk-ordered; use the batch/distribution record"':''}>${['Submitted','Reviewed','Awaiting Payment','Paid / Ready to Order','Ordered','Received','Ready for Pickup','Complete'].map(s=>`<option ${s===o.status?'selected':''}>${s}</option>`).join('')}</select></div>${o.notes?`<div class="notice"><strong>Notes:</strong> ${esc(o.notes)}</div>`:''}</div>`).join(''):`<div class="empty panel"><h2>${state.showOldOrders?'No orders yet':'No current orders'}</h2><p>${!state.showOldOrders&&old.length?'All existing orders have already been assigned to bulk orders. Turn on “Show old / bulk-ordered orders” to view them.':'New orders will appear here until they are assigned to a bulk order.'}</p></div>`;
  box.innerHTML=controls+cards;
  $('#showOldOrders').onchange=e=>{state.showOldOrders=e.target.checked;renderAdminOrders()};
  $$('[data-paid]').forEach(b=>b.onclick=async()=>{const o=state.adminOrders.find(x=>x.id===b.dataset.paid);await adminPatch(o.id,{paid:!o.paid,status:!o.paid&&o.status==='Awaiting Payment'?'Paid / Ready to Order':o.status})});
  $$('[data-status]').forEach(s=>s.onchange=()=>adminPatch(s.dataset.status,{status:s.value}));
}
async function adminPatch(id,patch){const r=await api('updateOrder',{token:state.adminToken,id,patch},'POST');if(!r.ok)return toast(r.error||'Update failed');Object.assign(state.adminOrders.find(x=>x.id===id),patch);renderAdminShell();toast('Order updated')}
function batchRowsForOrders(orders){
  const groups={};
  orders.forEach(o=>(o.items||[]).forEach(x=>{
    if(x.paymentHold)return;
    const k=[x.productId,x.option,x.custom,x.source].join('|');
    groups[k]=groups[k]||{...x,qty:0,orders:[]};
    groups[k].qty+=Number(x.qty||0);
    groups[k].orders.push(`${o.memberName} (${x.qty})`);
  }));
  return Object.values(groups);
}
function naturalCompare(a,b){return String(a??'').localeCompare(String(b??''),undefined,{numeric:true,sensitivity:'base'})}
function sortedBatchRows(rows){
  const key=state.batchSort?.key||'name',dir=state.batchSort?.dir==='desc'?-1:1;
  const copy=[...rows];
  copy.sort((a,b)=>{
    let av,bv;
    if(key==='allocation'){av=(a.orders||[]).join(', ');bv=(b.orders||[]).join(', ')}
    else if(key==='qty'){av=Number(a.qty||0);bv=Number(b.qty||0);if(av!==bv)return (av-bv)*dir}
    else {av=a[key]||'';bv=b[key]||''}
    let c=naturalCompare(av,bv);
    if(c===0 && key!=='option') c=naturalCompare(a.option||'',b.option||'');
    if(c===0 && key!=='name') c=naturalCompare(a.name||'',b.name||'');
    return c*dir;
  });
  return copy;
}
function batchSortHeader(label,key){
  const active=(state.batchSort?.key||'name')===key,arrow=active?(state.batchSort.dir==='desc'?' ▼':' ▲'):'';
  return `<button type="button" class="batch-sort" data-batch-sort="${esc(key)}">${esc(label)}${arrow}</button>`;
}
function batchTable(rows){
  if(!rows.length)return '<div class="empty"><h3>No confirmed items in this batch.</h3></div>';
  const sorted=sortedBatchRows(rows);
  return `<div class="table-wrap"><table><thead><tr><th>${batchSortHeader('Item','name')}</th><th>${batchSortHeader('Size / option','option')}</th><th>${batchSortHeader('Source','source')}</th><th>${batchSortHeader('Qty','qty')}</th><th>${batchSortHeader('Allocation','allocation')}</th></tr></thead><tbody>${sorted.map(x=>`<tr><td>${linkedName(x.name,x.sourceUrl)}</td><td>${esc([x.option,x.custom].filter(Boolean).join(' / '))}</td><td>${esc(x.source||'')}</td><td><strong>${x.qty}</strong></td><td>${esc(x.orders.join(', '))}</td></tr>`).join('')}</tbody></table></div>`;
}
function renderBatch(){
  const queued=state.adminOrders.filter(o=>o.paid&&!o.batchId&&!['Received','Ready for Pickup','Complete'].includes(o.status));
  const rows=batchRowsForOrders(queued);
  const held=[]; queued.forEach(o=>(o.items||[]).forEach(x=>{if(x.paymentHold)held.push({...x,orderId:o.id,memberName:o.memberName})}));
  const historyMap={}; state.adminOrders.filter(o=>o.batchId).forEach(o=>{historyMap[o.batchId]=historyMap[o.batchId]||{id:o.batchId,at:o.batchOrderedAt||'',orders:[]};historyMap[o.batchId].orders.push(o)});
  const history=Object.values(historyMap).sort((a,b)=>String(b.at).localeCompare(String(a.at)));
  $('#adminBody').innerHTML=`<div class="panel"><div class="section-head"><div><h2>Current Bulk Order Queue</h2><p>Paid orders stay here until you close the batch. Closing it marks those orders as ordered and starts a fresh queue automatically.</p></div><div class="toolbar"><button class="btn ghost" id="printBatch">Print Queue</button>${queued.length&&rows.length?'<button class="btn primary" id="closeBatch">Mark This Batch Ordered</button>':''}</div></div><div class="notice"><strong>${queued.length} family order${queued.length===1?'':'s'} waiting for the next bulk purchase.</strong> Orders submitted after you close this batch will automatically go into the next one.</div>${batchTable(rows)}${held.length?`<div class="notice warning"><strong>${held.length} held item${held.length===1?'':'s'} are not included.</strong> Verify those prices/availability before closing the batch if you want them included.</div>`:''}</div><div class="panel" style="margin-top:18px"><h2>Bulk Order History</h2>${history.length?history.map((b,i)=>`<details class="batch-history" ${i===0?'open':''}><summary><strong>${esc(b.id)}</strong> · ${b.at?new Date(b.at).toLocaleString():''} · ${b.orders.length} family order${b.orders.length===1?'':'s'}</summary><div class="tiny" style="margin:10px 0">Orders: ${b.orders.map(o=>esc(o.id)+' — '+esc(o.memberName)).join(', ')}</div>${batchTable(batchRowsForOrders(b.orders))}</details>`).join(''):'<div class="empty"><h3>No bulk orders have been placed yet.</h3></div>'}</div>`;
  $$('[data-batch-sort]').forEach(b=>b.addEventListener('click',()=>{
    const key=b.dataset.batchSort;
    if(state.batchSort.key===key) state.batchSort.dir=state.batchSort.dir==='asc'?'desc':'asc';
    else state.batchSort={key,dir:'asc'};
    renderBatch();
  }));
  $('#printBatch')?.addEventListener('click',()=>print());
  $('#closeBatch')?.addEventListener('click',async()=>{
    if(held.length&&!confirm(`${held.length} held item(s) will NOT be included in this bulk order. Continue with the confirmed items?`))return;
    if(!confirm(`Mark the current bulk order as ORDERED?\n\nThis will lock ${queued.length} family order(s) into one batch. New orders will go into the next batch.`))return;
    const r=await api('createBatch',{token:state.adminToken,orderIds:queued.map(o=>o.id)},'POST');
    if(!r.ok)return toast(r.error||'Could not create bulk order');
    const refreshed=await api('adminOrders',{token:state.adminToken}); state.adminOrders=refreshed.orders||[]; renderAdminShell(); toast(`${r.batchId} marked ordered`);
  });
}

function displayCadet(o){return [o.cadetFirstName,o.cadetLastName].filter(Boolean).join(' ')||o.memberName||'Cadet'}
function displayParent(o){return [o.parentFirstName,o.parentLastName].filter(Boolean).join(' ')||o.customerName||''}
function distMap(o){return o.distributedItems&&typeof o.distributedItems==='object'?o.distributedItems:{}}
function orderComplete(o){const d=distMap(o);return (o.items||[]).every((x,i)=>!!d[i])}
async function setDistributed(orderId,index,checked){
  const o=state.adminOrders.find(x=>x.id===orderId); if(!o)return;
  const d={...distMap(o)}; if(checked)d[index]=true;else delete d[index];
  const complete=(o.items||[]).every((x,i)=>!!d[i]); const when=complete?new Date().toISOString():'';
  const r=await api('updateDistribution',{token:state.adminToken,id:orderId,distributedItems:d,distributedAt:when},'POST');
  if(!r.ok)return toast(r.error||'Could not update distribution');
  o.distributedItems=d;o.distributedAt=when;if(complete)o.status='Complete';
  renderDistribution();
}
function renderDistribution(){
  const batched=state.adminOrders.filter(o=>o.batchId);
  const ids=[...new Set(batched.map(o=>o.batchId))].sort((a,b)=>b.localeCompare(a));
  if(!state.distributionBatch||!ids.includes(state.distributionBatch))state.distributionBatch=ids[0]||'';
  const orders=batched.filter(o=>o.batchId===state.distributionBatch);
  const visible=orders.filter(o=>state.showDistributed||!orderComplete(o));
  const remaining=orders.filter(o=>!orderComplete(o)).length;
  $('#adminBody').innerHTML=`<div class="panel distribution-view"><div class="section-head"><div><h2>Distribution / Pickup</h2><p>Pull each cadet's items from the box, then check them off as they are handed out.</p></div><div class="toolbar"><select id="distBatch">${ids.map(id=>`<option ${id===state.distributionBatch?'selected':''}>${esc(id)}</option>`).join('')}</select><button class="btn ghost" id="printDistribution">Print This List</button></div></div>${ids.length?`<div class="notice"><strong>${remaining} cadet order${remaining===1?'':'s'} still need distribution.</strong> Completed cadets disappear automatically.</div><label class="radio-card" style="max-width:260px"><input type="checkbox" id="showDistributed" ${state.showDistributed?'checked':''}><span>Show completed cadets/items</span></label><div class="distribution-list">${visible.length?visible.map(o=>distributionCard(o)).join(''):'<div class="empty"><h3>Everything in this batch has been distributed.</h3></div>'}</div>`:'<div class="empty"><h3>No bulk orders yet</h3><p>Create a bulk order first, then its distribution list appears here.</p></div>'}</div>`;
  $('#distBatch')?.addEventListener('change',e=>{state.distributionBatch=e.target.value;renderDistribution()});
  $('#showDistributed')?.addEventListener('change',e=>{state.showDistributed=e.target.checked;renderDistribution()});
  $('#printDistribution')?.addEventListener('click',()=>window.print());
  $$('[data-dist-item]').forEach(c=>c.addEventListener('change',()=>setDistributed(c.dataset.order,Number(c.dataset.distItem),c.checked)));
}
function distributionCard(o){
  const d=distMap(o),complete=orderComplete(o); const items=(o.items||[]).map((x,i)=>({x,i,done:!!d[i]})).filter(v=>state.showDistributed||!v.done);
  return `<article class="order-card distribution-card ${complete?'distribution-complete':''}"><div class="order-head"><div><h3>${esc(displayCadet(o))}</h3><div class="contact-line"><strong>Parent:</strong> ${esc(displayParent(o))}</div><div class="contact-line"><a href="tel:${esc(o.phone||'')}">${esc(o.phone||'')}</a> · <a href="mailto:${esc(o.email||'')}">${esc(o.email||'')}</a>${o.capid?` · CAPID ${esc(o.capid)}`:''}</div><div class="tiny">${esc(o.id)} · ${esc(o.batchId||'')}</div></div>${complete?'<span class="status-pill status-paid">DISTRIBUTED</span>':''}</div><div class="distribution-items">${items.map(({x,i,done})=>`<label class="distribution-item ${done?'done':''}"><input type="checkbox" data-dist-item="${i}" data-order="${esc(o.id)}" ${done?'checked':''}><span><strong>${x.qty} × ${esc(x.name)}</strong>${x.option?`<br><span>${esc(x.option)}</span>`:''}${x.custom?`<br><span>${esc(x.custom)}</span>`:''}</span></label>`).join('')}</div>${o.notes?`<div class="notice"><strong>Notes:</strong> ${esc(o.notes)}</div>`:''}</article>`
}

async function renderAdminProducts(){
  const r=await api('adminProducts',{token:state.adminToken});
  const ps=(r.products||[]).map(p=>({...p,source:['Local DTF','Unit Bulk Stock'].includes(p.source)?'Local':p.source}));
  const flag=ps.find(p=>p.id==='FLAG-LOCAL'); if(flag)flag.source='Amazon';
  const order=['Vanguard','Amazon','Walmart','Local','Other'];
  const groups=order.map(source=>({source,items:ps.filter(p=>p.source===source)})).filter(g=>g.items.length);
  const needs=ps.filter(p=>!isActiveProduct(p)).length;
  $('#adminBody').innerHTML=`<div class="panel"><div class="section-head"><div><h2>Products & Prices</h2><p><strong>One rule:</strong> Verify Price makes the item available to families. Deactivate removes it until you verify the price again.</p></div><button class="btn primary" id="newProduct">Add Product</button></div>${needs?`<div class="notice warning"><strong>${needs} item${needs===1?'':'s'} need a price check.</strong> They are hidden from unit-purchase choices until you verify them.</div>`:''}${groups.map(g=>`<div style="margin-top:22px"><div class="section-head"><div><h3 style="margin-bottom:2px">${esc(g.source)}</h3><div class="tiny">${g.items.length} item${g.items.length===1?'':'s'}</div></div></div><div class="table-wrap"><table><thead><tr><th>Product</th><th>Price</th><th>Status</th><th>Last verified</th><th>Actions</th></tr></thead><tbody>${g.items.map(p=>{const active=isActiveProduct(p);return `<tr><td><strong>${linkedName(p.name,p.sourceUrl)}</strong><br><span class="tiny">${esc(p.id)}</span><div class="manual-price-note">${esc(manualPriceNote(p))}</div></td><td>${p.price?money(p.price):'<strong>TBD</strong>'}</td><td>${active?'<span class="status-pill status-paid">ACTIVE</span>':'<span class="badge hold">Needs verification</span>'}</td><td>${esc(p.verified||'Never')}</td><td><div class="toolbar"><button class="btn primary" data-verify-product="${esc(p.id)}">Verify Price</button>${active?`<button class="btn ghost" data-deactivate-product="${esc(p.id)}">Deactivate</button>`:''}<button class="btn ghost" data-edit-product="${esc(p.id)}">Edit</button></div></td></tr>`}).join('')}</tbody></table></div></div>`).join('')}<div class="notice"><strong>How it works:</strong> the status above is the only switch used by the ordering wizard. Verify Price = ACTIVE. Deactivate = Needs verification. Old payment-hold flags are ignored for product availability.</div></div>`;
  $('#newProduct').onclick=()=>productEditor(null);
  $$('[data-edit-product]').forEach(b=>b.onclick=()=>productEditor(ps.find(p=>p.id===b.dataset.editProduct)));
  $$('[data-verify-product]').forEach(b=>b.onclick=()=>quickVerifyProduct(ps.find(p=>p.id===b.dataset.verifyProduct)));
  $$('[data-deactivate-product]').forEach(b=>b.onclick=()=>deactivateProduct(ps.find(p=>p.id===b.dataset.deactivateProduct)));
}

async function deactivateProduct(p){
  if(!p)return;
  const updated={...p,active:false,paymentHold:true,verified:`Deactivated ${localDateStamp()} — verify price to offer again`};
  const res=await api('saveProduct',{token:state.adminToken,product:updated},'POST');
  if(!res.ok){toast(res.error||'Save failed');return;}
  const fresh=await api('getProducts');state.products=fresh.products||[];renderAdminShell();toast('Item deactivated — hidden from ordering');
}

async function quickVerifyProduct(p){
  if(!p)return;
  const existing=$('#verifyPriceModal'); if(existing) existing.remove();
  const supplier=p.sourceUrl
    ? `<a class="btn ghost" href="${esc(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">Open ${esc(p.source||'Supplier')} page ↗</a>`
    : `<div class="tiny">This is a local item, so enter your current per-item cost below.</div>`;
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="verifyPriceModal"><div class="modal-card"><div class="modal-head"><div><h2 style="margin:0">Verify Price</h2><div class="tiny">${esc(p.name)}</div></div><button id="closeVerifyPrice">×</button></div><div class="notice"><strong>This is the activation step.</strong> Confirm the current price, then save it here. Saving a verified price makes this item available in the parent ordering menu.</div><div style="margin:14px 0">${supplier}</div><form id="verifyPriceForm" class="form-grid"><div class="field span-2"><label>Current verified unit price</label><input name="price" type="number" min="0.01" step="0.01" value="${Number(p.price||0)>0?Number(p.price).toFixed(2):''}" placeholder="0.00" required><div class="tiny">Enter the amount one family should pay for one of this item. For bulk purchases, enter the per-item allocation.</div></div>${p.availabilityCheck?`<label class="radio-card span-2"><input type="checkbox" name="available" checked><span>This item is currently available to order</span></label>`:''}<div class="toolbar span-2"><button class="btn primary" type="submit">Save Verified Price & Make Active</button><button class="btn ghost" type="button" id="cancelVerifyPrice">Cancel</button></div></form></div></div>`);
  $('#closeVerifyPrice').onclick=$('#cancelVerifyPrice').onclick=()=>$('#verifyPriceModal').remove();
  $('#verifyPriceForm').onsubmit=async e=>{
    e.preventDefault();
    const f=new FormData(e.target);
    const price=Number(f.get('price'));
    if(!Number.isFinite(price)||price<=0){toast('Enter a valid price greater than $0');return;}
    if(p.availabilityCheck && f.get('available')!=='on'){
      const unavailable={...p,price,active:false,paymentHold:true,verified:`${p.source} price checked ${localDateStamp()} — unavailable`};
      const res=await api('saveProduct',{token:state.adminToken,product:unavailable},'POST');
      if(!res.ok){toast(res.error||'Save failed');return;}
      $('#verifyPriceModal').remove();
      const fresh=await api('getProducts');state.products=fresh.products||[];renderAdminShell();
      toast('Price saved, but item remains unavailable');
      return;
    }
    const updated={...p,price,active:true,paymentHold:false,verified:`${p.source} price verified ${localDateStamp()}`};
    const res=await api('saveProduct',{token:state.adminToken,product:updated},'POST');
    if(!res.ok){toast(res.error||'Save failed');return;}
    $('#verifyPriceModal').remove();
    const fresh=await api('getProducts');state.products=fresh.products||[];renderAdminShell();
    toast('Verified — item is now ACTIVE in ordering');
  };
}

function productEditor(p){
  p=p||{id:'',name:'',category:'',component:'',description:'',price:0,source:'Local',sourceUrl:'',options:'',customLabel:'',active:false,required:false,verified:'Never verified',availabilityCheck:false,recommended:false};
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="modal"><div class="modal-card"><div class="modal-head"><h2 style="margin:0">${p.id?'Edit Product':'Add Product'}</h2><button id="closeModal">×</button></div><form id="productForm" class="form-grid"><div class="field"><label>Product ID / SKU</label><input name="id" value="${esc(p.id)}" ${p.id?'readonly':''} required></div><div class="field"><label>Name</label><input name="name" value="${esc(p.name)}" required></div><div class="field"><label>Category</label><input name="category" value="${esc(p.category)}" required></div><div class="field"><label>Starter component</label><input name="component" value="${esc(p.component||'')}" placeholder="Boots, Coat, T-Shirt..."></div><div class="field"><label>Source</label><select name="source">${['Vanguard','Amazon','Walmart','Local','Other'].map(x=>`<option ${x===p.source?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><label>Current price</label><input value="${Number(p.price||0)>0?money(p.price):'Not verified'}" readonly><div class="tiny">Use <strong>Verify Price</strong> in Products & Prices to change or approve the price.</div></div><div class="field span-2"><label>Description</label><textarea name="description">${esc(p.description||'')}</textarea></div><div class="field span-2"><label>Supplier URL</label><input name="sourceUrl" value="${esc(p.sourceUrl||'')}"></div><div class="field span-2"><label>Options (use | between choices)</label><input name="options" value="${esc(p.options||'')}" placeholder="Small|Medium|Large|XL"></div><div class="field span-2"><label>Custom text prompt (optional)</label><input name="customLabel" value="${esc(p.customLabel||'')}" placeholder="Last name exactly as it should appear"></div><label class="radio-card"><input type="checkbox" name="required" ${p.required?'checked':''}><span>Starter item</span></label><label class="radio-card"><input type="checkbox" name="availabilityCheck" ${p.availabilityCheck?'checked':''}><span>Check availability when verifying price</span></label><button class="btn primary span-2">Save Product Details</button>${p.id?'<button type="button" class="btn danger span-2" id="deleteProduct">Delete Product</button>':''}</form></div></div>`);
  $('#closeModal').onclick=()=>$('#modal').remove();
  $('#productForm').onsubmit=async e=>{
    e.preventDefault();
    const f=new FormData(e.target);
    const obj={...p,id:f.get('id').trim(),name:f.get('name').trim(),category:f.get('category').trim(),component:f.get('component').trim(),description:f.get('description').trim(),source:f.get('source'),sourceUrl:f.get('sourceUrl').trim(),options:f.get('options').trim(),customLabel:f.get('customLabel').trim(),required:f.get('required')==='on',availabilityCheck:f.get('availabilityCheck')==='on',recommended:!!p.recommended};
    const r=await api('saveProduct',{token:state.adminToken,product:obj},'POST');
    if(!r.ok)return toast(r.error||'Save failed');
    $('#modal').remove();
    const fresh=await api('getProducts');state.products=fresh.products||[];renderAdminShell();toast('Product details saved');
  };
  $('#deleteProduct')?.addEventListener('click',async()=>{if(!confirm('Delete this product?'))return;const r=await api('deleteProduct',{token:state.adminToken,id:p.id},'POST');if(!r.ok)return toast(r.error||'Delete failed');$('#modal').remove();const fresh=await api('getProducts');state.products=fresh.products||[];renderAdminShell()});
}


init();
