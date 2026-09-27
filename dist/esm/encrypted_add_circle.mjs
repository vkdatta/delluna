export const name="encrypted_add_circle";
export const id="dl_7138799426b801f78d80";
export const url=new URL("../icons/encrypted_add_circle.svg?v=eb77b13a2ccb54db2da1588db118615b3a7a773fff03f5366afc76db0ca26c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
