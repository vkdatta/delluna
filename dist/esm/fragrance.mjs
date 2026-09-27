export const name="fragrance";
export const id="dl_0148356e90a239fa560a";
export const url=new URL("../icons/fragrance.svg?v=94c48bef01a912c97596907e253b125cb5d1b34f11dc1a6ad7206767fa051e51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
