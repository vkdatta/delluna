export const name="arrow-bend-double-up-right-fill";
export const id="dl_a95643e40cdb40a1b187";
export const url=new URL("../icons/arrow-bend-double-up-right-fill.svg?v=b9fa4756f9e43e358c986601c02082d2a255757aea96628c598db3ab5c553324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
