export const name="tractor-thin";
export const id="dl_a3b3881aab584e43bfd8";
export const url=new URL("../icons/T/tractor-thin.svg?v=3381a7a4775445a4125daaa9473059531a5a1165fb961c3bef3a58c3b6809fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
