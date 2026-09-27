export const name="network_locked";
export const id="dl_696d65702bf74b9292bc";
export const url=new URL("../icons/network_locked.svg?v=96139f06d2d0dc6d703089e795dc280b63c6c64d89ec8dde88ec4e1a75fea3a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
