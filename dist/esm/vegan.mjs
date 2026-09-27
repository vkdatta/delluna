export const name="vegan";
export const id="dl_2cc53eda50f94ec6911f";
export const url=new URL("../icons/vegan.svg?v=76e31d128c2ba7855e6f718872dc6c5e6458238507956f11f1681b691412b318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
