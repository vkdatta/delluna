export const name="lock-laminated-bold";
export const id="dl_f8645f73505241b7b38b";
export const url=new URL("../icons/lock-laminated-bold.svg?v=8d71db43f2834678b9b2232b88a2a238138e911b1269eabacdc4a59cf530d091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
