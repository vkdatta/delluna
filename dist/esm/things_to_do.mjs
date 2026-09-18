export const name="things_to_do";
export const id="dl_ac383c540bbe42edade7";
export const url=new URL("../icons/things_to_do.svg?v=58f607d6075591adc6f174e16ea794552147b758a0bba3ebeea521fcfa3d26dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
