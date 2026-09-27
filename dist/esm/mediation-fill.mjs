export const name="mediation-fill";
export const id="dl_a2357e7487dc3a6c7994";
export const url=new URL("../icons/mediation-fill.svg?v=015bdf41f4004708c804dc656e195b2d9c7d1d684eddbe585db1c4075d9e1bff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
