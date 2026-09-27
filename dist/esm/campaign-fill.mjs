export const name="campaign-fill";
export const id="dl_c07ecda374347b9acd74";
export const url=new URL("../icons/campaign-fill.svg?v=3ca4a294f90c40da222644c00b7b0a7528be2e7be6d58a7387f1d304ecbd4e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
