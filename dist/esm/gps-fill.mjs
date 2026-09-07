export const name="gps-fill";
export const id="dl_b67a078d1a59432c9a7d";
export const url=new URL("../icons/gps-fill.svg?v=408e468789c90d1c494b107211fd22f2765bd4183f380bb00c8571f0b509f7aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
