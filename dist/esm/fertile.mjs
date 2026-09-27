export const name="fertile";
export const id="dl_1ae6484d9b2247e802f8";
export const url=new URL("../icons/fertile.svg?v=4fb7cba26a8a30444b495c32e27d9aad4c10e6ecc27103e65ef59ca96bfed6e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
