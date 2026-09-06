export const name="currency-kzt";
export const id="dl_48b2ee55d2834751a55f";
export const url=new URL("../icons/currency-kzt.svg?v=34ac34dfcf1941f1fe94c1354465b712301312e3a7121530200e10b7ba14cb8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
