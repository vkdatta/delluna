export const name="address-book-tabs-fill";
export const id="dl_a5180af2d61648f19888";
export const url=new URL("../icons/address-book-tabs-fill.svg?v=71127f18fb8daece359c2ff0ea0f7eb4bed1f4d7500dfc275e0d2a7e27f5106d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
