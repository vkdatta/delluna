export const name="atm";
export const id="dl_fb9c8ee549ea0d74a11c";
export const url=new URL("../icons/atm.svg?v=bc8b2385d400912c0ccc80ae3974ca6a9bf77827d29b7916384bc7a74ad479ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
