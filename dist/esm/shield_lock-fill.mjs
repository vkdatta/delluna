export const name="shield_lock-fill";
export const id="dl_c7208b5099ee270e1874";
export const url=new URL("../icons/shield_lock-fill.svg?v=b2a410bd9d0cd2afd90d547ea42f2776f3f2b6070fcf49347ad6e0ea992106a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
