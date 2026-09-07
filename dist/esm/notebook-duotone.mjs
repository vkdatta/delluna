export const name="notebook-duotone";
export const id="dl_a826e6cdd1ec4f4ca0f7";
export const url=new URL("../icons/notebook-duotone.svg?v=909853345ec23bad2a2266140eb18666dac70824651a350a8af38fefe46367e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
