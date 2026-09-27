export const name="18mp";
export const id="dl_ede7b8d1810465af174f";
export const url=new URL("../icons/18mp.svg?v=ee438ca1df0e5a653f7d2e15cfabc8d6b3ea8afd5b12c12783b6f11031e4814a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
