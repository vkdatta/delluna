export const name="lucid_3-maximize-2";
export const id="dl_9e86579b7acc495b8755";
export const url=new URL("../icons/lucid_3-maximize-2.svg?v=a0aa7640a85ac0bb32d9315f5f4c97b6e6cf57ee06e9e2564c3a0aeef2f5976d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
