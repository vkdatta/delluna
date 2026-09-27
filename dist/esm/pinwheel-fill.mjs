export const name="pinwheel-fill";
export const id="dl_36ab15fa8f5247b5951e";
export const url=new URL("../icons/pinwheel-fill.svg?v=fb8376c94039f2e415c35c5863aaacda5b2c2c8acfc6c5985024da7f20476cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
