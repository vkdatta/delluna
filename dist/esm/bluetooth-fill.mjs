export const name="bluetooth-fill";
export const id="dl_bc49da12a48a44c2a720";
export const url=new URL("../icons/bluetooth-fill.svg?v=11c04621e5c20dddb59a1af58b99286fb2c5a536eb018a6f7cb677ad2b791405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
