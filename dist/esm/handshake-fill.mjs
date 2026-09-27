export const name="handshake-fill";
export const id="dl_515077f047c34058a159";
export const url=new URL("../icons/handshake-fill.svg?v=c3d0379c33ec41b8ec6c53c711bac8cc2b19153c25aa3cb167c9d98d412fa48f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
