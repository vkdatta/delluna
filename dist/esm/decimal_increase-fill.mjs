export const name="decimal_increase-fill";
export const id="dl_f60320eb0359358ca616";
export const url=new URL("../icons/decimal_increase-fill.svg?v=1c5c3244ac44172e523795afa95e4c380edc1ea0f5df4270f314c9a675886f9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
