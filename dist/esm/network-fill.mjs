export const name="network-fill";
export const id="dl_db99f9d0e17c4125893d";
export const url=new URL("../icons/network-fill.svg?v=39cb70d9623e9e0ba5e8086d9c1f29d1ada06809945b78e746d17449e32071ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
