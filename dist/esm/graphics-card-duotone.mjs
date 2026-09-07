export const name="graphics-card-duotone";
export const id="dl_869770e81c7b4659af45";
export const url=new URL("../icons/graphics-card-duotone.svg?v=dc3cee495ae29e323328a849499ff720245175c02ea9a7e30e15c93c746e1d01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
