export const name="brand_family-fill";
export const id="dl_c9ff0a162b9d249e78f5";
export const url=new URL("../icons/brand_family-fill.svg?v=3b0e398b370f638a3f1297c60a3aad1e161ffc361ca7fd3dab491c55e05770ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
