export const name="arrow_downward-fill";
export const id="dl_d0b1b0cfcfa7456a97c0";
export const url=new URL("../icons/A/arrow_downward-fill.svg?v=37038af301242a4dc180f63f28af878b15b35bb15770e24cbb9534894411dbca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
