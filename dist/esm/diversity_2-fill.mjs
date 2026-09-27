export const name="diversity_2-fill";
export const id="dl_e0f51d83369540a2f7df";
export const url=new URL("../icons/diversity_2-fill.svg?v=9477bfad27913d2ffaaeec334db01f605cd5d62c853b8a7b9d2a9106580e2b2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
