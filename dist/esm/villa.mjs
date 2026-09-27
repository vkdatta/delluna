export const name="villa";
export const id="dl_dc4720bc78f504838fa7";
export const url=new URL("../icons/villa.svg?v=648f395f737036cb38c0c07d36816cdf6b2266d1e3b3ccf0cf34aebea79c95de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
