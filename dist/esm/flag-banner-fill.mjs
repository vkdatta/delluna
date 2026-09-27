export const name="flag-banner-fill";
export const id="dl_d235bc95eac2420e8f85";
export const url=new URL("../icons/flag-banner-fill.svg?v=fe55858da1e789f63b1a2cf845b8a1818dff7bc456e4a6377524a0bd3f7edf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
