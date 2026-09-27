export const name="dentistry";
export const id="dl_b2c9c562b8d8a4591763";
export const url=new URL("../icons/dentistry.svg?v=ce9c04b2604d7614c14069c6356b58bd5c55bb8a7f3b2627c61d438b306aa5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
