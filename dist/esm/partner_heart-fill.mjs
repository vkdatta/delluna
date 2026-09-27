export const name="partner_heart-fill";
export const id="dl_0a400b43decf21e7fab3";
export const url=new URL("../icons/partner_heart-fill.svg?v=17842ec7ef72208a9438ccc7c083e5e8de8c9b616e5ece8fd15f53f0aa21b4d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
