export const name="propane-fill";
export const id="dl_f92ae82eb31325250700";
export const url=new URL("../icons/propane-fill.svg?v=d41f0f31d0551bafebc690938e34f9d120209e1bcac1546b57180efac9513b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
