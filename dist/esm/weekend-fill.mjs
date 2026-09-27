export const name="weekend-fill";
export const id="dl_d1b8ca9f0c715128f8c1";
export const url=new URL("../icons/weekend-fill.svg?v=cfcf2074c342d769db74eb75f7d652582c5aa5b447e27e56183cd9abf7d2234e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
